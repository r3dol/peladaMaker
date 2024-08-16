from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.crud.peladinha_team_player import peladinha_team_player_crud
from app.models.peladinha_team_player import Peladinha_Team_Player
from app.schemas.peladinha_team_player import (
    Peladinha_Team_PlayerInDB,
    Peladinha_Team_PlayerCreate,
)

router = APIRouter()


@router.post(
    "/",
    response_model=Optional[Peladinha_Team_PlayerInDB],
    status_code=status.HTTP_201_CREATED,
)
def create_training_plan(
    peladinha_team_player_create: Peladinha_Team_PlayerCreate,
    db: Session = Depends(get_db),
    # user: User = Depends(get_current_active_user),
):
    """
    Create a new training plan with the specified data.

    Parameters:
        db (Session, optional): The database session.
            Defaults to Depends(get_db).
        user (User, optional): The current authenticated user. ???

    Returns:
        Optional[PelainhaInDB]: The created peladinha.

    Raises:
        HTTPException: If there is an error creating the peladinha.
    """
    peladinha_team_player = peladinha_team_player_crud.get_one(
        db,
        Peladinha_Team_Player.name
        == peladinha_team_player_create.name,  # , owner_id=user.id
    )
    if peladinha_team_player is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Training plan with name {peladinha_team_player_create.name} already exists",
        )
    return peladinha_team_player_crud.create(
        db, obj_create=peladinha_team_player_create  # , owner_id=user.id
    )
