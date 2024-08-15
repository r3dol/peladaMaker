from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class peladinha(Base):
    __tablename__ = "peladinha"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    time = Column(DateTime(timezone=True), nullable=False)
    description = Column(String, nullable=True)
    max_capacity = Column(Integer, nullable=False)
    location_id = Column(String, ForeignKey("location.id"), nullable=False)

    players = relationship(argument="peladinha_team_player", back_populates="Peladinha")

    def __repr__(self):
        return (
            f"Peladinha(id={self.id}, name={self.name}, time={self.time}, description={self.description}, "
            f"max_capacity={self.max_capacity}, location_id={self.location_id})"
        )


