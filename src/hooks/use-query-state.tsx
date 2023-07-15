import queryString from 'query-string';
import { ParsedQuery } from 'query-string/base';
import { useMemo } from 'react';
import {
  adversaryFromUrlKey,
  getAdversaryUrlKey,
  IndexedAdversary,
} from '../models/adversaries';
import { Box, boxesFromUrlKey, getBoxesUrlKey } from '../models/box';
import { getPlayerUrlKey, Player, playerFromUrlKey } from '../models/player';
import { Board } from '../models/board';
import { Spirit } from '../models/spirit';

interface QueryState {
  players: Player[];
  boxes: Box[];
  adversary?: IndexedAdversary;
}

interface QueryStateWithMutators {
  state: QueryState;
  setBoxes: (boxes: Box[], navigateTo: string) => void;
  addPlayer: (
    numPlayers: number,
    spirit: Spirit,
    board: Board,
    navigateTo: string
  ) => void;
  addAdversary: (adversary: IndexedAdversary, navigateTo: string) => void;
  wipeState: () => void;
}

function useQueryState(): QueryStateWithMutators {
  return useMemo(() => {
    const queryParams = queryString.parse(window.location.search);
    const players = getPlayers(queryParams);
    const boxes = getBoxes(queryParams);
    const adversary = getAdversary(queryParams);

    return {
      state: {
        boxes,
        players,
        adversary,
      },
      setBoxes,
      addPlayer,
      addAdversary,
      wipeState,
    };
  }, [window.location.search]);
}

function getPlayers(params: ParsedQuery<string>): Player[] {
  const players: Player[] = [];
  for (let i = 1; i <= 6; i++) {
    if (typeof params[`p${i}`] === 'string') {
      const player = playerFromUrlKey(params[`p${i}`] as string);
      players.push(player);
    } else {
      return players;
    }
  }

  return players;
}

function getBoxes(params: ParsedQuery<string>): Box[] {
  if (typeof params['b'] === 'string') {
    return boxesFromUrlKey(params['b']);
  }

  return Object.values(Box);
}

function getAdversary(
  params: ParsedQuery<string>
): IndexedAdversary | undefined {
  if (typeof params['a'] === 'string') {
    return adversaryFromUrlKey(params['a']);
  }

  return undefined;
}

function setBoxes(boxes: Box[], navigateTo: string) {
  const params = getBoxesUrlKey(boxes);
  window.location.assign(`${navigateTo}?b=${params}`);
}

function addPlayer(
  numPlayers: number,
  spirit: Spirit,
  board: Board,
  navigateTo: string
) {
  const playerKey = getPlayerUrlKey({
    spirit,
    board,
  });

  const params = window.location.search
    .split('&')
    .filter((param) => param !== '');
  params.push(`p${numPlayers + 1}=${playerKey}`);
  window.location.assign(
    `${navigateTo}${params.length === 1 ? '?' : ''}${params.join('&')}`
  );
}

function addAdversary(adversary: IndexedAdversary, navigateTo: string) {
  const adversaryKey = getAdversaryUrlKey(adversary);
  const params = window.location.search
    .split('&')
    .filter((param) => param !== '');
  params.push(`a=${adversaryKey}`);
  window.location.assign(
    `${navigateTo}${params.length === 1 ? '?' : ''}${params.join('&')}`
  );
}

function wipeState() {
  window.location.assign(`/`);
}

export default useQueryState;
