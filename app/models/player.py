from sqlalchemy import Column, Float, Integer, String
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class Player(Base):
    __tablename__ = "player"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    rating = Column(Float, nullable=False)
    photo = Column(String, nullable=False)

    #teams = relationship("Peladinha_Team_Player", back_populates="player")
