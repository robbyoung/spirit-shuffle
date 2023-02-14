import { useEffect, useState } from 'react';

interface State<T> {
  current: T;
  previous: T | undefined;
}

function usePrevious<T>(value: T) {
  const [state, updateState] = useState({
    current: value,
    previous: undefined,
  } as State<T>);

  useEffect(() => {
    updateState({ current: value, previous: state.current });
  }, [value]);

  return state.previous;
}

export default usePrevious;
