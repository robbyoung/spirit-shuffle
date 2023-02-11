import './spirit-card.scss'

export enum Spirit {
  Lightning = 'lightning',
  Earth = 'earth',
  Green = 'green',
  Thunderspeaker = 'thunderspeaker',
}

interface SpiritCardProps {
  spirit: Spirit
}

function SpiritCard({ spirit }: SpiritCardProps) {
  return (
    <img
      src={`../../images/spirits/${spirit}.png`}
      alt={spirit}
      className="spirit-card"
    />
  )
}

export default SpiritCard
