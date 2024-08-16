from typing import List

from sqlalchemy.orm import Session

from app.crud.base import CRUDRepository
from app.models.peladinha_team_player import Peladinha_Team_Player
from app.models.player import Player


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


peladinha_team_player_crud = Peladinha_Team_PlayerCRUD(model=Peladinha_Team_Player)
