import { getImageForSpirit, Spirit } from '../../models/spirit'
import './spirit-card.scss'

interface SpiritCardProps {
  spirit: Spirit
  className?: string
}

function SpiritCard({ spirit, className }: SpiritCardProps) {
  return (
    <img
      src={getImageForSpirit(spirit)}
      alt={spirit}
      className={`spirit-card ${className}`}
    />
  )
}

export default SpiritCard
