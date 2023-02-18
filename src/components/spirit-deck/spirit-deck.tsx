import { useMemo, useState } from 'react';
import usePrevious from '../../hooks/use-previous';
import { Spirit } from '../../models/spirit';
import SpiritCard from '../spirit-card/spirit-card';
import './spirit-deck.scss';

interface SpiritDeckProps {
  spirits: Spirit[];
  selectCount: number;
  onShuffle: () => void;
}

function SpiritDeck({ spirits, selectCount, onShuffle }: SpiritDeckProps) {
  const [order, setOrder] = useState(Object.keys(spirits));
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const prevOrder = usePrevious(order) || order;

  useMemo(() => {
    setOrder(Object.keys(spirits));
  }, [spirits]);

  function onDeckClick() {
    if (!hasBeenClicked) {
      setHasBeenClicked(true);
      setOrder(shuffleDeck(order));
      onShuffle();
    }
  }

  return (
    <>
      <div
        className={`spirit-deck ${
          hasBeenClicked ? 'disabled' : 'clickable'
        } size-${order.length}`}
        onClick={() => onDeckClick()}
      >
        {[...spirits].reverse().map((spirit, i) => (
          <SpiritCard
            key={`card-${order[i]}`}
            spirit={spirit}
            animate={hasBeenClicked}
            className={`card-${order[i]} prev-card-${prevOrder[i]} ${
              hasBeenClicked && order.length - parseInt(order[i]) <= selectCount
                ? 'selected'
                : ''
            }`}
          />
        ))}
      </div>
    </>
  );
}

function shuffleDeck<T>(deck: Array<T>): T[] {
  const newDeck = [...deck];
  let currentIndex = newDeck.length;
  let randomIndex = 0;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newDeck[currentIndex], newDeck[randomIndex]] = [
      newDeck[randomIndex],
      newDeck[currentIndex],
    ];
  }

  return newDeck;
}

export default SpiritDeck;
