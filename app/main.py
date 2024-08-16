from fastapi import FastAPI

from app.routers import users, peladinha, peladinha_team_player, player

app = FastAPI(title="PeladaMaker API", version="0.0.0")

app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(peladinha.router, prefix="/peladinha", tags=["peladinha"])
app.include_router(
    peladinha_team_player.router, prefix="/peladinha_team_player", tags=["peladinha"]
)
app.include_router(player.router, prefix="/player", tags=["player"])
# app.include_router(auth_router, prefix="/auth", tags=["auth"])


@app.get("/")
async def root():
    return {"message": "Hello World!"}
