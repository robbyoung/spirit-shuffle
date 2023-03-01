import queryString from 'query-string';
import { ParsedQuery } from 'query-string/base';
import { useMemo } from 'react';
import { adversaryFromUrlKey, IndexedAdversary } from '../models/adversaries';
import { Box, boxesFromUrlKey } from '../models/box';
import { Player, playerFromUrlKey } from '../models/player';

interface QueryState {
  players: Player[];
  boxes: Box[];
  adversary?: IndexedAdversary;
}

function useQueryState(): QueryState {
  return useMemo(() => {
    const queryParams = queryString.parse(window.location.search);
    const players = getPlayers(queryParams);
    const boxes = getBoxes(queryParams);
    const adversary = getAdversary(queryParams);

    return {
      boxes,
      players,
      adversary,
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

export default useQueryState;
