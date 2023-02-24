import { Box } from './box';

export interface Adversary {
  name: string;
  key: string;
  difficulties: number[];
  box: Box;
}

export const allAdversaries: Adversary[] = [
  {
    name: 'The Kingdom of Brandenburg-Prussia',
    key: 'bp',
    difficulties: [1, 2, 4, 6, 7, 9, 10],
    box: Box.SI,
  },
  {
    name: 'The Kingdom of England',
    key: 'en',
    difficulties: [1, 3, 4, 6, 7, 9, 11],
    box: Box.SI,
  },
  {
    name: 'The Kingdom of Sweden',
    key: 'sw',
    difficulties: [1, 2, 3, 5, 6, 7, 8],
    box: Box.SI,
  },
  {
    name: 'The Kingdom of France (Plantation Colony)',
    key: 'fr',
    difficulties: [2, 3, 5, 7, 8, 9, 10],
    box: Box.BC,
  },
  {
    name: 'The Habsburg Monarchy (Livestock Colony)',
    key: 'hb',
    difficulties: [2, 3, 5, 6, 8, 9, 10],
    box: Box.JE,
  },
  {
    name: 'The Tsardom of Russia',
    key: 'ru',
    difficulties: [1, 3, 4, 6, 7, 9, 11],
    box: Box.JE,
  },
  {
    name: 'The Kingdom of Scotland',
    key: 'sc',
    difficulties: [1, 3, 4, 6, 7, 8, 10],
    box: Box.FF,
  },
];

export function adversaryIncludedInBoxes(adversary: Adversary, boxes: Box[]) {
  return boxes.includes(adversary.box);
}
