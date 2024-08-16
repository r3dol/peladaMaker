import datetime
from typing import List, Optional

from pydantic import BaseModel


class PlayerBase(BaseModel):
    name: str
    rating: float
    #photo


class PlayerCreate(PlayerBase):
    pass


class PlayerUpdate(PlayerBase):
    pass


class PlayerInDB(PlayerBase):
    id: int


class PlayerOut(PlayerBase):
    id: int
