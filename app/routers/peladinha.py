
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.crud.peladinha import peladinha_crud
from app.models.Peladinha import Peladinha
from app.schemas.peladinha import PeladinhaInDB, PeladinhaCreate


router = APIRouter()


@router.post(
    "/", response_model=Optional[PeladinhaInDB], status_code=status.HTTP_201_CREATED
)
def create_training_plan(
    training_plan_create: PeladinhaCreate,
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
    peladinha = peladinha_crud.get_one(
        db, Peladinha.name == training_plan_create.name#, owner_id=user.id
    )
    if peladinha is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Training plan with name {training_plan_create.name} already exists",
        )
    return peladinha_crud.create(
        db, obj_create=training_plan_create#, owner_id=user.id
    )