import { useMemo } from 'react';
import { Board, getRemainingBoards } from '../models/board';
import useQueryState from './use-query-state';

function useAvailableBoards(): Board[] {
  const { state: queryState } = useQueryState();

  return useMemo(() => {
    const playerBoards = queryState.players.map((player) => player.board);

    return getRemainingBoards(playerBoards, true);
  }, [queryState]);
}

export default useAvailableBoards;
