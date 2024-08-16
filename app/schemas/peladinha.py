import datetime
from typing import List, Optional

from pydantic import BaseModel


class PeladinhaBase(BaseModel):
    name: str
    time: datetime.datetime
    description: Optional[str] = None
    max_capacity: int
    #location_id:int


class PeladinhaCreate(PeladinhaBase):
    pass


class PeladinhaUpdate(PeladinhaBase):
    pass


class PeladinhaInDB(PeladinhaBase):
    id: int
   # location_id: int


class PeladinhaOut(PeladinhaBase):
    id: int
    #location_id: int