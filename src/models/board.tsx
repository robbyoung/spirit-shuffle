import boardA from '../images/spirits/bringer.png';
import boardB from '../images/spirits/lightning.png';
import boardC from '../images/spirits/earth.png';
import boardD from '../images/spirits/thunderspeaker.png';
import boardE from '../images/spirits/ocean.png';
import boardF from '../images/spirits/river.png';

export enum Board {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
}

export function getImageForBoard(board: Board): string {
  switch (board) {
    case Board.A:
      return boardA;
    case Board.B:
      return boardB;
    case Board.C:
      return boardC;
    case Board.D:
      return boardD;
    case Board.E:
      return boardE;
    case Board.F:
      return boardF;
  }
}

export function getRemainingBoards(taken: Board[]): Board[] {
  const boards: Board[] = [];

  if (!taken.includes(Board.A)) {
    boards.push(Board.A);
  }

  if (!taken.includes(Board.B)) {
    boards.push(Board.B);
  }

  if (!taken.includes(Board.C)) {
    boards.push(Board.C);
  }

  if (!taken.includes(Board.D)) {
    boards.push(Board.D);
  }

  if (!taken.includes(Board.E)) {
    boards.push(Board.E);
  }

  if (!taken.includes(Board.F)) {
    boards.push(Board.F);
  }

  return boards;
}
