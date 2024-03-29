import brandenburg from '../images/adversaries/brandenburg.png';
import england from '../images/adversaries/england.png';
import sweden from '../images/adversaries/sweden.png';
import france from '../images/adversaries/france.png';
import habsburg from '../images/adversaries/habsburg.png';
import russia from '../images/adversaries/russia.png';
import scotland from '../images/adversaries/scotland.png';
import habsburgMining from '../images/adversaries/habsburg-mining.png';

import { Box } from './box';

export interface Adversary {
  name: string;
  key: string;
  difficulties: number[];
  box: Box;
}

export interface IndexedAdversary {
  adversary: Adversary;
  index: number;
}

export const allAdversaries: Adversary[] = [
  {
    name: 'Brandenburg-Prussia',
    key: 'bp',
    difficulties: [1, 2, 4, 6, 7, 9, 10],
    box: Box.SI,
  },
  {
    name: 'England',
    key: 'en',
    difficulties: [1, 3, 4, 6, 7, 9, 11],
    box: Box.SI,
  },
  {
    name: 'Sweden',
    key: 'sw',
    difficulties: [1, 2, 3, 5, 6, 7, 8],
    box: Box.SI,
  },
  {
    name: 'France',
    key: 'fr',
    difficulties: [2, 3, 5, 7, 8, 9, 10],
    box: Box.BC,
  },
  {
    name: 'Habsburg',
    key: 'hb',
    difficulties: [2, 3, 5, 6, 8, 9, 10],
    box: Box.JE,
  },
  {
    name: 'Russia',
    key: 'ru',
    difficulties: [1, 3, 4, 6, 7, 9, 11],
    box: Box.JE,
  },
  {
    name: 'Scotland',
    key: 'sc',
    difficulties: [1, 3, 4, 6, 7, 8, 10],
    box: Box.FF,
  },
  {
    name: 'Habsburg Mining Expedition',
    key: 'hm',
    difficulties: [1, 3, 4, 5, 7, 9, 10],
    box: Box.NI,
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
    case 'hm':
      return habsburgMining;
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
): IndexedAdversary {
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
  return { adversary, index: difficulty.index };
}

export function getAdversaryUrlKey(indexedAdversary: IndexedAdversary) {
  return `${indexedAdversary.adversary.key}-${indexedAdversary.index}`;
}

export function adversaryFromUrlKey(key: string): IndexedAdversary {
  const split = key.split('-');
  const adversary =
    allAdversaries.find((a) => a.key === split[0]) || allAdversaries[0];
  const index = parseInt(split[1]);

  return {
    adversary,
    index: index,
  };
}
