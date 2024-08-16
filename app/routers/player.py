from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.crud.player import player_crud
from app.database.db import get_db
from app.schemas.player import PlayerInDB, PlayerCreate

router = APIRouter()


@router.post(
    "/create", response_model=Optional[PlayerInDB], status_code=status.HTTP_201_CREATED
)
def create_player(
        player_create: PlayerCreate,
        db: Session = Depends(get_db),

        #pagination_params=Depends(get_pagination_params),
        # user: User = Depends(get_current_active_user),
):
    try:
        player = player_crud.create(db, player_create)
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Error creating player",
        ) from e

    return player
