
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.crud.player import player_crud
from app.models.Player import Player
from app.schemas.player import PlayerInDB, PlayerCreate

router = APIRouter()


@router.post(
    "/", response_model=Optional[PlayerInDB], status_code=status.HTTP_201_CREATED
)
def create_training_plan(
    player_create: PlayerCreate,
    db: Session = Depends(get_db),
    #user: User = Depends(get_current_active_user),
):
    """
    Create a new training plan with the specified data.

    Parameters:
        peladinha_create (TrainingPlanCreate):
            The data for creating the peladinha.
        db (Session, optional): The database session.
            Defaults to Depends(get_db).
        user (User, optional): The current authenticated user. ???

    Returns:
        Optional[PelainhaInDB]: The created peladinha.

    Raises:
        HTTPException: If there is an error creating the peladinha.
    """
    player = player_crud.get_one(
        db, Player.name == player_create.name#, owner_id=user.id
    )
    if player is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Training plan with name {player_create.name} already exists",
        )
    return player_crud.create(
        db, obj_create=player_create#, owner_id=user.id
    )