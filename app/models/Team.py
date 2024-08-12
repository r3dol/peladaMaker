from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class Team(Base):
    __tablename__ = "team"

    id = Column(Integer, primary_key=True)
    team_name = Column(String, nullable=False)
    team_size = Column(Integer, nullable=False)

    players = relationship("Peladinha_Team_Player", back_populates="team")
