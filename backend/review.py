from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Submission, User
from services.dispatcher import analyze_code_by_language
from pydantic import BaseModel


# -------------------------------
# Request Model (JSON Body)
# -------------------------------
class CodeSubmission(BaseModel):
    user_id: int
    language: str
    code: str


router = APIRouter()


# -------------------------------
# Database Dependency
# -------------------------------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# -------------------------------
# Submit Code Endpoint
# -------------------------------
@router.post("/submit")
def submit_code(data: CodeSubmission, db: Session = Depends(get_db)):

    user_id = data.user_id
    language = data.language
    code = data.code

    # Check if user exists
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # 🔥 Call Dispatcher (Hybrid Logic)
    score, review = analyze_code_by_language(code, language)

    # Save submission
    submission = Submission(
        user_id=user_id,
        language=language,
        code=code,
        score=score
    )

    db.add(submission)

    # Update user score
    total = user.total_submissions
    overall = user.overall_score

    new_overall = ((overall * total) + score) / (total + 1)

    user.overall_score = new_overall
    user.total_submissions += 1

    db.commit()

    # Determine status
    status = "Poor"
    if new_overall > 80:
        status = "Excellent"
    elif new_overall > 60:
        status = "Good"
    elif new_overall > 40:
        status = "Improving"

    return {
        "submission_score": score,
        "overall_score": round(new_overall, 2),
        "status": status,
        "review": review
    }
