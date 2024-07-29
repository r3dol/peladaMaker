from fastapi import FastAPI, APIRouter

app = FastAPI(title="Pelada Maker", version="0.0.0 - ALPHA")
router = APIRouter()


app.include_router(exercise_router, prefix="/exercises", tags=["exercise"])

@app.get("/")
def root():
    return {"message": "Hello world"}