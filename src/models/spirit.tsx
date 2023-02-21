import bringer from '../images/spirits/bringer.png';
import lightning from '../images/spirits/lightning.png';
import earth from '../images/spirits/earth.png';
import thunderspeaker from '../images/spirits/thunderspeaker.png';
import ocean from '../images/spirits/ocean.png';
import river from '../images/spirits/river.png';
import shadows from '../images/spirits/shadows.png';
import green from '../images/spirits/green.png';
import fangs from '../images/spirits/fangs.png';
import keeper from '../images/spirits/keeper.png';
import wildfire from '../images/spirits/wildfire.png';
import serpent from '../images/spirits/serpent.png';
import stone from '../images/spirits/stone.png';
import memory from '../images/spirits/memory.png';
import trickster from '../images/spirits/trickster.png';
import lure from '../images/spirits/lure.png';
import minds from '../images/spirits/minds.png';
import volcano from '../images/spirits/volcano.png';
import shroud from '../images/spirits/shroud.png';
import vengeance from '../images/spirits/vengeance.png';
import starlight from '../images/spirits/starlight.png';
import fractured from '../images/spirits/fractured.png';
import downpour from '../images/spirits/downpour.png';
import finder from '../images/spirits/finder.png';
import teeth from '../images/spirits/teeth.png';
import eyes from '../images/spirits/eyes.png';
import mud from '../images/spirits/mud.png';
import heat from '../images/spirits/heat.png';
import whirlwind from '../images/spirits/whirlwind.png';
import { Box } from './box';

export enum Spirit {
  Lightning = "Lightning's Swift Strike",
  River = 'River Surges in Sunlight',
  Earth = 'Vital Strength of the Earth',
  Shadows = 'Shadows Flicker Like Flame',
  Thunderspeaker = 'Thunderspeaker',
  Green = 'A Spread of Rampant Green',
  Ocean = "Ocean's Hungry Grasp",
  Bringer = 'Bringer of Dreams and Nightmares',
  Fangs = 'Sharp Fangs Behind the Leaves',
  Keeper = 'Keeper of the Forbidden Wilds',
  Wildfire = 'Heart of the Wildfire',
  Serpent = 'Serpent Slumbering Beneath the Island',
  Stone = "Stone's Unyielding Defiance",
  Memory = 'Shifting Memory of Ages',
  Trickster = 'Grinning Trickster Stirs Up Trouble',
  Lure = 'Lure of the Deep Wilderness',
  Minds = 'Many Minds Move as One',
  Volcano = 'Volcano Looming High',
  Shroud = 'Shroud of Silent Mist',
  Vengeance = 'Vengeance as a Burning Plague',
  Starlight = 'Starlight Seeks Its Form',
  Fractured = 'Fractured Days Split the Sky',
  Downpour = 'Downpour Drenches the World',
  Finder = 'Finder of Paths Unseen',
  Teeth = 'Devouring Teeth Lurk Underfoot',
  Eyes = 'Eyes Watch From the Trees',
  Mud = 'Fathomless Mud of the Swamp',
  Heat = 'Rising Heat of Stone and Sand',
  Whirlwind = 'Sun-Bright Whirlwind',
}

export function getImageForSpirit(spirit: Spirit): string {
  switch (spirit) {
    case Spirit.Lightning:
      return lightning;
    case Spirit.Earth:
      return earth;
    case Spirit.Thunderspeaker:
      return thunderspeaker;
    case Spirit.Bringer:
      return bringer;
    case Spirit.Ocean:
      return ocean;
    case Spirit.River:
      return river;
    case Spirit.Shadows:
      return shadows;
    case Spirit.Green:
      return green;
    case Spirit.Fangs:
      return fangs;
    case Spirit.Keeper:
      return keeper;
    case Spirit.Wildfire:
      return wildfire;
    case Spirit.Serpent:
      return serpent;
    case Spirit.Stone:
      return stone;
    case Spirit.Memory:
      return memory;
    case Spirit.Trickster:
      return trickster;
    case Spirit.Lure:
      return lure;
    case Spirit.Minds:
      return minds;
    case Spirit.Volcano:
      return volcano;
    case Spirit.Shroud:
      return shroud;
    case Spirit.Vengeance:
      return vengeance;
    case Spirit.Starlight:
      return starlight;
    case Spirit.Fractured:
      return fractured;
    case Spirit.Downpour:
      return downpour;
    case Spirit.Finder:
      return finder;
    case Spirit.Teeth:
      return teeth;
    case Spirit.Eyes:
      return eyes;
    case Spirit.Mud:
      return mud;
    case Spirit.Heat:
      return heat;
    case Spirit.Whirlwind:
      return whirlwind;
  }
}

export function spiritIncludedInBoxes(spirit: Spirit, boxes: Box[]): boolean {
  switch (spirit) {
    case Spirit.Lightning:
    case Spirit.Earth:
    case Spirit.Thunderspeaker:
    case Spirit.Bringer:
    case Spirit.Ocean:
    case Spirit.River:
    case Spirit.Shadows:
    case Spirit.Green:
      return boxes.includes(Box.SI);
    case Spirit.Fangs:
    case Spirit.Keeper:
      return boxes.includes(Box.BC);
    case Spirit.Stone:
    case Spirit.Memory:
    case Spirit.Trickster:
    case Spirit.Lure:
    case Spirit.Minds:
    case Spirit.Volcano:
    case Spirit.Shroud:
    case Spirit.Vengeance:
    case Spirit.Starlight:
    case Spirit.Fractured:
      return boxes.includes(Box.JE);
    case Spirit.Wildfire:
    case Spirit.Serpent:
    case Spirit.Downpour:
    case Spirit.Finder:
      return boxes.includes(Box.FF);
    case Spirit.Teeth:
    case Spirit.Eyes:
    case Spirit.Mud:
    case Spirit.Heat:
    case Spirit.Whirlwind:
      return boxes.includes(Box.HZ);
  }
}
