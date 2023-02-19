import { useMemo, useState } from 'react';
import usePrevious from '../../hooks/use-previous';
import { Spirit } from '../../models/spirit';
import SpiritCard from '../spirit-card/spirit-card';
import './spirit-deck.scss';

interface SpiritDeckProps {
  spirits: Spirit[];
  onShuffle: () => void;
  onDealt: (spirit: Spirit) => void;
}

function SpiritDeck({ spirits, onShuffle, onDealt }: SpiritDeckProps) {
  const [order, setOrder] = useState(Object.keys(spirits));
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [hasBeenDealt, setHasBeenDealt] = useState(false);

  const prevOrder = usePrevious(order) || order;
  while (prevOrder.length < order.length) {
    prevOrder.push(order[prevOrder.length]);
  }

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

  function onAnimationFinished(spirit: Spirit) {
    setHasBeenDealt(true);
    onDealt(spirit);
  }

  return (
    <>
      <div
        className={`spirit-deck shuffled-${hasBeenClicked} dealt-${hasBeenDealt} size-${order.length}`}
        onClick={() => onDeckClick()}
      >
        {[...spirits].reverse().map((spirit, i) => {
          const selected =
            hasBeenClicked && parseInt(order[i]) == order.length - 1;
          return (
            <SpiritCard
              key={`card-${order[i]}`}
              spirit={spirit}
              animate={hasBeenClicked}
              className={`card-${order[i]} prev-card-${prevOrder[i]} ${
                selected ? 'selected' : ''
              }`}
              onFinished={() => selected && onAnimationFinished(spirit)}
            />
          );
        })}
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
