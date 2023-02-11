import { getImageForSpirit, Spirit } from '../../models/spirit'
import './spirit-card.scss'

interface SpiritCardProps {
  spirit: Spirit
}

function SpiritCard({ spirit }: SpiritCardProps) {
  return (
    <img src={getImageForSpirit(spirit)} alt={spirit} className="spirit-card" />
  )
}

export default SpiritCard
