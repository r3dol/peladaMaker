from typing import List

from sqlalchemy.orm import Session

from app.crud.base import CRUDRepository
from app.models.Peladinha import Peladinha
from app.models.Peladinha_Team_Player import Peladinha_Team_Player
from app.models.Player import Player


class Peladinha_Team_PlayerCRUD(CRUDRepository):
    def get_players_in_peladinha(
        self, peladinha_team_player: Peladinha_Team_Player
    ) -> List[Player]:
        """Returns a list of players in a peladinha.

        Parameters:
            peladinha (TrainingUnit): peladinha.

        Returns:
            List[Players]: A list of players in the peladinha.
        """
        return peladinha_team_player.players

peladinha_team_player_crud = Peladinha_Team_Player(model=Peladinha_Team_Player)