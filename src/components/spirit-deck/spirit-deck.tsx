import { useState } from 'react'
import { Spirit } from '../../models/spirit'
import SpiritCard from '../spirit-card/spirit-card'
import './spirit-deck.scss'

interface SpiritDeckProps {
  spirits: Spirit[]
}

function SpiritDeck({ spirits }: SpiritDeckProps) {
  const [order, setOrder] = useState(Object.keys(spirits))

  return (
    <>
      <div className={`spirit-deck`}>
        {spirits.map((spirit, i) => (
          <SpiritCard
            spirit={spirit}
            className={`card-${order[i]}`}
            key={`card-${order[i]}`}
          />
        ))}
      </div>
      <button onClick={() => setOrder(shuffleDeck(order))}>Shuffle</button>
    </>
  )
}

function shuffleDeck<T>(deck: Array<T>): T[] {
  const newDeck = [...deck]
  let currentIndex = newDeck.length
  let randomIndex = 0

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[newDeck[currentIndex], newDeck[randomIndex]] = [
      newDeck[randomIndex],
      newDeck[currentIndex],
    ]
  }

  return newDeck
}

export default SpiritDeck
