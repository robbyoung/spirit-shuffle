import bringer from '../images/spirits/bringer.png'
import lightning from '../images/spirits/lightning.png'
import earth from '../images/spirits/earth.png'
import thunderspeaker from '../images/spirits/thunderspeaker.png'
import ocean from '../images/spirits/ocean.png'
import river from '../images/spirits/river.png'
import shadows from '../images/spirits/shadows.png'
import green from '../images/spirits/green.png'

export enum Spirit {
  Lightning = "Lightning's Swift Strike",
  River = 'River Surges in Sunlight',
  Earth = 'Vital Strength of the Earth',
  Shadows = 'Shadows Flicker Like Flame',
  Thunderspeaker = 'Thunderspeaker',
  Green = 'A Spread of Rampant Green',
  Ocean = "Ocean's Hungry Grasp",
  Bringer = 'Bringer of Dreams and Nightmares',
}

export function getImageForSpirit(spirit: Spirit) {
  switch (spirit) {
    case Spirit.Lightning:
      return lightning
    case Spirit.Earth:
      return earth
    case Spirit.Thunderspeaker:
      return thunderspeaker
    case Spirit.Bringer:
      return bringer
    case Spirit.Ocean:
      return ocean
    case Spirit.River:
      return river
    case Spirit.Shadows:
      return shadows
    case Spirit.Green:
      return green
  }
}
