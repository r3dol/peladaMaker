from sqlalchemy import create_engine, Column, Integer, String, Float,ForeignKey, Date, Table
from sqlalchemy.orm import relationship, declarative_base, sessionmaker

Base = declarative_base()


class Player(Base):
    __tablename__ = "player"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    rating = Column(Float, nullable=False)
    photo = Column(String, nullable=False)

    peladinhas = relationship("Peladinha_Team_Player", back_populates="Player")
