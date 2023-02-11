import { useState } from 'react'
import { Spirit } from '../../models/spirit'
import SpiritCard from '../spirit-card/spirit-card'
import './spirit-deck.scss'

interface SpiritDeckProps {
  spirits: Spirit[]
}

function SpiritDeck({ spirits }: SpiritDeckProps) {
  const [deckState, setDeckState] = useState('')

  return (
    <>
      <div className={`spirit-deck ${deckState}`}>
        {spirits.map((spirit, i) => (
          <SpiritCard key={`card-${i}`} spirit={spirit} />
        ))}
      </div>
      <button onClick={() => setDeckState('shuffle')}>Shuffle</button>
      <button onClick={() => setDeckState('')}>Reset</button>
    </>
  )
}

export default SpiritDeck
