import queryString from 'query-string';
import { ParsedQuery } from 'query-string/base';
import { useMemo } from 'react';
import { Player, playerFromUrlKey } from '../models/player';

interface QueryState {
  players: Player[];
}

function useQueryState(): QueryState {
  return useMemo(() => {
    const queryParams = queryString.parse(window.location.search);
    const players = getPlayers(queryParams);
    return {
      players,
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

export default useQueryState;
