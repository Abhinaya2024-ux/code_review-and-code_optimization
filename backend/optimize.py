from fastapi import APIRouter
from pydantic import BaseModel
from services.optimizer_engine import optimize_code_with_summary
from scoring import analyze_code

router = APIRouter()

class AnalyzeOptimizeRequest(BaseModel):
    language: str
    code: str

@router.post("/analyze-and-optimize")
def analyze_and_optimize(data: AnalyzeOptimizeRequest):
    # Analyze original code
    before_score, before_review = analyze_code(data.code)
    
    # Get optimized code with full analysis
    result = optimize_code_with_summary(data.code, data.language)
    
    # Analyze optimized code
    after_score, after_review = analyze_code(result["optimized_code"])
    
    return {
        "before": {
            "score": before_score,
            "complexity": result.get("time_complexity", {}).get("before", "O(?)"),
            "space_complexity": result.get("space_complexity", {}).get("before", "O(?)"),
            "review": before_review
        },
        "after": {
            "score": after_score,
            "complexity": result.get("time_complexity", {}).get("after", "O(?)"),
            "space_complexity": result.get("space_complexity", {}).get("after", "O(?)"),
            "review": after_review
        },
        "score_gain": after_score - before_score,
        "complexity_improved": result.get("time_complexity", {}).get("before") != result.get("time_complexity", {}).get("after"),
        "optimization_summary": result.get("optimizations", result.get("summary", [])),
        "performance_improvement": result.get("performance_improvement", result.get("performance_gain", "15-20%")),
        "learning_tip": result.get("learning_tip", "Focus on algorithmic improvements first"),
        "optimized_code": result["optimized_code"],
        "time_complexity": result.get("time_complexity", {}),
        "space_complexity": result.get("space_complexity", {})
    }