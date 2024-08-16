from fastapi import Depends, FastAPI

from app.dependencies import get_query_token, get_token_header
from app.routers import users, peladinha, peladinha_team_player, player, users

app = FastAPI(title="PeladaMaker API", version="0.0.0")

app.include_router(users.router)
app.include_router(peladinha.router)
app.include_router(peladinha_team_player.router)

app.include_router(player.router)

@app.get("/")
async def root():
    return {"message": "Hello World!"}
