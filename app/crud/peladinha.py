from typing import List

from sqlalchemy.orm import Session

from app.crud.base import CRUDRepository
from app.models.Peladinha import Peladinha
from app.models.Player import Player


class PeladinhaCRUD(CRUDRepository):
    def get_players_in_peladinha(
        self, peladinha: Peladinha
    ) -> List[Player]:
        """Returns a list of players in a peladinha.

        Parameters:
            peladinha (TrainingUnit): peladinha.

        Returns:
            List[Players]: A list of players in the peladinha.
        """
        return peladinha.players

peladinha_crud = PeladinhaCRUD(model=Peladinha)