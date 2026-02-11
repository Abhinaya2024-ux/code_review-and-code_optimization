from fastapi import FastAPI
import review
import auth
import optimize   # 👈 add this

app = FastAPI()

app.include_router(auth.router)
app.include_router(review.router)
app.include_router(optimize.router)   # 👈 add this
