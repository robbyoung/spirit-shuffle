import { useMemo } from 'react';
import { Spirit } from '../models/spirit';
import useQueryState from './use-query-state';

function useAvailableSpirits(): Spirit[] {
  const queryState = useQueryState();

  return useMemo(() => {
    const allSpirits = Object.values(Spirit);
    const playerSpirits = queryState.players.map((player) => player.spirit);

    return allSpirits.filter((spirit) => !playerSpirits.includes(spirit));
  }, [queryState]);
}

export default useAvailableSpirits;
