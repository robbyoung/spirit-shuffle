import { useMemo } from 'react';
import { Spirit, spiritIncludedInBoxes } from '../models/spirit';
import useQueryState from './use-query-state';

function useAvailableSpirits(): Spirit[] {
  const queryState = useQueryState();

  return useMemo(() => {
    const allSpirits = Object.values(Spirit);
    const playerSpirits = queryState.players.map((player) => player.spirit);

    return allSpirits.filter(
      (spirit) =>
        !playerSpirits.includes(spirit) &&
        spiritIncludedInBoxes(spirit, queryState.boxes)
    );
  }, [queryState]);
}

export default useAvailableSpirits;
