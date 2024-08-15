from fastapi import Depends, FastAPI

from app.dependencies import get_query_token, get_token_header
from app.routers import users

app = FastAPI(title="PeladaMaker API", version="0.0.0")

app.include_router(users.router)


@app.get("/")
async def root():
    return {"message": "Hello World!"}
