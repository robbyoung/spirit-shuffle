import { useState } from 'react';
import usePrevious from '../../hooks/use-previous';
import { Spirit } from '../../models/spirit';
import SpiritCard from '../spirit-card/spirit-card';
import './spirit-deck.scss';

interface SpiritDeckProps {
  spirits: Spirit[];
}

function SpiritDeck({ spirits }: SpiritDeckProps) {
  const [order, setOrder] = useState(Object.keys(spirits));
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const prevOrder = usePrevious(order) || order;

  function onDeckClick() {
    if (!hasBeenClicked) {
      setHasBeenClicked(true);
      setOrder(shuffleDeck(order));
    }
  }

  return (
    <>
      <div
        className={`spirit-deck ${hasBeenClicked ? 'disabled' : 'clickable'}`}
        onClick={() => onDeckClick()}
      >
        {spirits.map((spirit, i) => (
          <SpiritCard
            key={`card-${order[i]}`}
            spirit={spirit}
            animate={hasBeenClicked}
            className={`card-${order[i]} prev-card-${prevOrder[i]}`}
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
