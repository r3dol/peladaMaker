from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Date, Table
from sqlalchemy.orm import relationship, declarative_base, sessionmaker

Base = declarative_base()


class Team(Base):
    __tablename__ = "team"

    id = Column(Integer, primary_key=True)
    team_name = Column(String, nullable=False)
    team_size = Column(Integer, nullable=False)

    jogadores = relationship("Peladinha_Team_Player", back_populates="Team")
