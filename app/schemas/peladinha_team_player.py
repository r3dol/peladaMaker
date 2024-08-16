import datetime
from typing import List, Optional

from pydantic import BaseModel


class Peladinha_Team_PlayerBase(BaseModel):
    peladinha_id: int
    team_id: int
    player_id: int
    name: str
    postion: str
    rating: float
    goals_scored: int


class Peladinha_Team_PlayerCreate(Peladinha_Team_PlayerBase):
    pass


class Peladinha_Team_PlayerUpdate(Peladinha_Team_PlayerBase):
    pass


class Peladinha_Team_PlayerInDB(Peladinha_Team_PlayerBase):
    id: int

# location_id: int


class Peladinha_Team_PlayerOut(Peladinha_Team_PlayerBase):
    id: int
    # location_id: int
