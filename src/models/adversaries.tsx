import brandenburg from '../images/adversaries/brandenburg.png';
import england from '../images/adversaries/brandenburg.png';
import sweden from '../images/adversaries/brandenburg.png';
import france from '../images/adversaries/brandenburg.png';
import habsburg from '../images/adversaries/brandenburg.png';
import russia from '../images/adversaries/brandenburg.png';
import scotland from '../images/adversaries/brandenburg.png';

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

export function getImageForAdversary(adversary: Adversary): string {
  switch (adversary.key) {
    case 'bp':
      return brandenburg;
    case 'en':
      return england;
    case 'sw':
      return sweden;
    case 'fr':
      return france;
    case 'hb':
      return habsburg;
    case 'ru':
      return russia;
    case 'sc':
      return scotland;
    default:
      throw `Unknown adversary code ${adversary.key}`;
  }
}

export function adversaryIncludedInBoxes(adversary: Adversary, boxes: Box[]) {
  return boxes.includes(adversary.box);
}

export function getRandomAdversary(
  adversaries: Adversary[],
  minDifficulty: number,
  maxDifficulty: number
): { adversary: Adversary; difficultyIndex: number } {
  const adversary = adversaries[Math.floor(Math.random() * adversaries.length)];

  const difficulties = adversary.difficulties
    .map((difficulty, index) => ({
      difficulty,
      index,
    }))
    .filter(
      (option) =>
        option.difficulty >= minDifficulty && option.difficulty <= maxDifficulty
    );

  if (difficulties.length == 0) {
    throw 'None of the given adversaries can fulfill the difficulty requirement';
  }

  const difficulty =
    difficulties[Math.floor(Math.random() * difficulties.length)];
  return { adversary, difficultyIndex: difficulty.index };
}
