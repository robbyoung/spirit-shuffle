import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { getImageForSpirit, Spirit } from '../../models/spirit'
import './spirit-card.scss'

interface SpiritCardProps {
  spirit: Spirit
  className?: string
}

function SpiritCard({ spirit, className }: SpiritCardProps) {
  const nodeRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [className])

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={`card-animate`}
      in={animate}
      onEntered={() => setAnimate(false)}
      timeout={5000}
    >
      <img
        src={getImageForSpirit(spirit)}
        alt={spirit}
        ref={nodeRef}
        className={`spirit-card ${className}`}
      />
    </CSSTransition>
  )
}

export default SpiritCard
