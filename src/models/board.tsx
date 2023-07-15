import boardA from '../images/boards/board-a.png';
import boardB from '../images/boards/board-b.png';
import boardC from '../images/boards/board-c.png';
import boardD from '../images/boards/board-d.png';
import boardE from '../images/boards/board-e.png';
import boardF from '../images/boards/board-f.png';

export enum Board {
  A = 'Board A',
  B = 'Board B',
  C = 'Board C',
  D = 'Board D',
  E = 'Board E',
  F = 'Board F',
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

export function getRemainingBoards(taken: Board[], usingJE: boolean): Board[] {
  const boards: Board[] = [];

  if (!taken.includes(Board.A)) {
    boards.push(Board.A);
  }

  if (
    !taken.includes(Board.B) &&
    (!taken.includes(Board.E) || taken.length >= 4)
  ) {
    boards.push(Board.B);
  }

  if (!taken.includes(Board.C)) {
    boards.push(Board.C);
  }

  if (
    !taken.includes(Board.D) &&
    (!taken.includes(Board.F) || taken.length >= 4)
  ) {
    boards.push(Board.D);
  }

  if (
    !taken.includes(Board.E) &&
    (!taken.includes(Board.B) || taken.length >= 4) &&
    usingJE
  ) {
    boards.push(Board.E);
  }

  if (
    !taken.includes(Board.F) &&
    (!taken.includes(Board.D) || taken.length >= 4) &&
    usingJE
  ) {
    boards.push(Board.F);
  }

  return boards;
}
