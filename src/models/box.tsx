import spiritIsland from '../images/boxes/spirit-island.png';
import branchAndClaw from '../images/boxes/branch-and-claw.png';
import featherAndFlame from '../images/boxes/feather-and-flame.png';
import jaggedEarth from '../images/boxes/jagged-earth.png';
import horizons from '../images/boxes/horizons.png';

export enum Box {
  SI = 'Spirit Island',
  JE = 'Jagged Earth',
  BC = 'Branch and Claw',
  FF = 'Feather and Flame',
  HZ = 'Horizons of Spirit Island',
}

export function getImageForBox(board: Box): string {
  switch (board) {
    case Box.SI:
      return spiritIsland;
    case Box.JE:
      return jaggedEarth;
    case Box.BC:
      return branchAndClaw;
    case Box.FF:
      return featherAndFlame;
    case Box.HZ:
      return horizons;
  }
}

export function getBoxesUrlKey(boxes: Box[]): string {
  return boxes
    .map((box) => Object.keys(Box)[Object.values(Box).indexOf(box)])
    .join('')
    .toLowerCase();
}

export function boxesFromUrlKey(key: string): Box[] {
  return Object.keys(Box)
    .filter((boxKey) => key.toUpperCase().includes(boxKey))
    .map((boxKey) => Object.values(Box)[Object.keys(Box).indexOf(boxKey)]);
}
