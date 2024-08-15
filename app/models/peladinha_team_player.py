from sqlalchemy import Column, Float, ForeignKey, Integer, String
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class peladinha_team_player(Base):
    """
    Represents a player in a Peladinha team.

    Attributes:
        id (int): Primary key.
        player_id (int): Foreign key referencing the player.
        peladinha_id (int): Foreign key referencing the peladinha.
        team_id (int): Foreign key referencing the team.
        position (str): The position of the player in the team.
        rating (float): The rating of the player.
        goals_scored (int): The number of goals scored by the player.
    """

    __tablename__ = "peladinha_team_player"

    id = Column(Integer, primary_key=True)
    player_id = Column(Integer, ForeignKey("player.id"), nullable=False)
    peladinha_id = Column(Integer, ForeignKey("peladinha.id"), nullable=False)
    team_id = Column(Integer, ForeignKey("team.id"), nullable=False)
    position = Column(String, nullable=True)
    rating = Column(Float, nullable=True)
    goals_scored = Column(Integer, nullable=True)

    peladinha = relationship("peladinha", back_populates="players")
    team = relationship("team", back_populates="players")
    player = relationship("player", back_populates="peladinhas")
