from typing import List

from sqlalchemy.orm import Session

from app.crud.base import CRUDRepository
from app.models.Peladinha import Peladinha
from app.models.Player import Player


class PlayerCRUD(CRUDRepository):
    def get_name_in_peladinha(
        self, player: Player
    ) -> str:
        """Returns the name of player.

        Parameters:
           player.

        Returns:
            name of the player.
        """
        return player.name

player_crud = PlayerCRUD(model=Peladinha)