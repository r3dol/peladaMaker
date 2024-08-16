from pydantic import BaseModel


class PlayerBase(BaseModel):
    name: str
    rating: float | None = 0.0
    # photo: str


class PlayerCreate(PlayerBase):
    pass


class PlayerUpdate(PlayerBase):
    name: str | None = None
    rating: float | None


class PlayerInDB(PlayerBase):
    id: int


class PlayerOut(PlayerBase):
    id: int
    name: str
    rating: float | None
