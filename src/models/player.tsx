import { Board } from './board';
import { Spirit } from './spirit';

export interface Player {
  spirit: Spirit;
  board: Board;
}

export function getPlayerUrlKey(player: Player): string {
  const spiritId =
    Object.keys(Spirit)[Object.values(Spirit).indexOf(player.spirit)];
  const boardId =
    Object.keys(Board)[Object.values(Board).indexOf(player.board)];
  return `${spiritId}-${boardId}`;
}

export function playerFromUrlKey(key: string): Player {
  const split = key.split('-');
  const spirit = Object.values(Spirit)[Object.keys(Spirit).indexOf(split[0])];
  const board = Object.values(Board)[Object.keys(Board).indexOf(split[1])];

  return {
    spirit,
    board,
  };
}
