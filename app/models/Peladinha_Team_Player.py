from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship, declarative_base

Base = declarative_base()


class Peladinha_Team_Player(Base):
    __tablename__ = "peladinha_team_player"

    id = Column(Integer, primary_key=True)
    player_id = Column(Integer, ForeignKey("player.id"), nullable=False)
    peladinha_id = Column(Integer, ForeignKey("peladinha.id"), nullable=False)
    team_id = Column(Integer, ForeignKey("team.id"), nullable=False)
    position = Column(String, nullable=True)
    rating = Column(Float, nullable=True)
    goals_scored = Column(Integer, nullable=True)

    peladinha = relationship("Peladinha", back_populates="players")
    team = relationship("Team", back_populates="players")
    player = relationship("Player", back_populates="peladinhas")
