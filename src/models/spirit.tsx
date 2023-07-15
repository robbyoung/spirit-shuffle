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
import behemoth from '../images/spirits/behemoth.png';
import roots from '../images/spirits/roots.png';
import hearth from '../images/spirits/hearth.png';
import darkness from '../images/spirits/darkness.png';
import sun from '../images/spirits/sun.png';
import voice from '../images/spirits/voice.png';
import waters from '../images/spirits/waters.png';
import dances from '../images/spirits/dances.png';
import { Box } from './box';

export enum Spirit {
  LSS = "Lightning's Swift Strike",
  RSS = 'River Surges in Sunlight',
  VSE = 'Vital Strength of the Earth',
  SFF = 'Shadows Flicker Like Flame',
  TSR = 'Thunderspeaker',
  SRG = 'A Spread of Rampant Green',
  OHG = "Ocean's Hungry Grasp",
  BOD = 'Bringer of Dreams and Nightmares',
  SFL = 'Sharp Fangs Behind the Leaves',
  KFW = 'Keeper of the Forbidden Wilds',
  HWF = 'Heart of the Wildfire',
  SSB = 'Serpent Slumbering Beneath the Island',
  SYD = "Stone's Unyielding Defiance",
  SMA = 'Shifting Memory of Ages',
  GTT = 'Grinning Trickster Stirs Up Trouble',
  LDW = 'Lure of the Deep Wilderness',
  MMM = 'Many Minds Move as One',
  VLH = 'Volcano Looming High',
  SSM = 'Shroud of Silent Mist',
  VBP = 'Vengeance as a Burning Plague',
  SSF = 'Starlight Seeks Its Form',
  FDS = 'Fractured Days Split the Sky',
  DDW = 'Downpour Drenches the World',
  FPU = 'Finder of Paths Unseen',
  DTU = 'Devouring Teeth Lurk Underfoot',
  EWT = 'Eyes Watch From the Trees',
  FMS = 'Fathomless Mud of the Swamp',
  RHS = 'Rising Heat of Stone and Sand',
  SBW = 'Sun-Bright Whirlwind',
  EEB = 'Ember-Eyed Behemoth',
  TRJ = 'Towering Roots of the Jungle',
  HVL = 'Hearth-Vigil',
  BDS = 'Breath of Darkness Down Your Spine',
  RGS = 'Relentless Gaze of the Sun',
  WVD = 'Wandering Voice Keens Delirium',
  WWB = 'Wounded Waters Bleeding',
  DUE = 'Dances Up Earthquakes',
}

export function getImageForSpirit(spirit: Spirit): string {
  switch (spirit) {
    case Spirit.LSS:
      return lightning;
    case Spirit.VSE:
      return earth;
    case Spirit.TSR:
      return thunderspeaker;
    case Spirit.BOD:
      return bringer;
    case Spirit.OHG:
      return ocean;
    case Spirit.RSS:
      return river;
    case Spirit.SFF:
      return shadows;
    case Spirit.SRG:
      return green;
    case Spirit.SFL:
      return fangs;
    case Spirit.KFW:
      return keeper;
    case Spirit.HWF:
      return wildfire;
    case Spirit.SSB:
      return serpent;
    case Spirit.SYD:
      return stone;
    case Spirit.SMA:
      return memory;
    case Spirit.GTT:
      return trickster;
    case Spirit.LDW:
      return lure;
    case Spirit.MMM:
      return minds;
    case Spirit.VLH:
      return volcano;
    case Spirit.SSM:
      return shroud;
    case Spirit.VBP:
      return vengeance;
    case Spirit.SSF:
      return starlight;
    case Spirit.FDS:
      return fractured;
    case Spirit.DDW:
      return downpour;
    case Spirit.FPU:
      return finder;
    case Spirit.DTU:
      return teeth;
    case Spirit.EWT:
      return eyes;
    case Spirit.FMS:
      return mud;
    case Spirit.RHS:
      return heat;
    case Spirit.SBW:
      return whirlwind;
    case Spirit.EEB:
      return behemoth;
    case Spirit.TRJ:
      return roots;
    case Spirit.HVL:
      return hearth;
    case Spirit.BDS:
      return darkness;
    case Spirit.RGS:
      return sun;
    case Spirit.WVD:
      return voice;
    case Spirit.WWB:
      return waters;
    case Spirit.DUE:
      return dances;
  }
}

export function spiritIncludedInBoxes(spirit: Spirit, boxes: Box[]): boolean {
  switch (spirit) {
    case Spirit.LSS:
    case Spirit.VSE:
    case Spirit.TSR:
    case Spirit.BOD:
    case Spirit.OHG:
    case Spirit.RSS:
    case Spirit.SFF:
    case Spirit.SRG:
      return boxes.includes(Box.SI);
    case Spirit.SFL:
    case Spirit.KFW:
      return boxes.includes(Box.BC);
    case Spirit.SYD:
    case Spirit.SMA:
    case Spirit.GTT:
    case Spirit.LDW:
    case Spirit.MMM:
    case Spirit.VLH:
    case Spirit.SSM:
    case Spirit.VBP:
    case Spirit.SSF:
    case Spirit.FDS:
      return boxes.includes(Box.JE);
    case Spirit.HWF:
    case Spirit.SSB:
    case Spirit.DDW:
    case Spirit.FPU:
      return boxes.includes(Box.FF);
    case Spirit.EEB:
    case Spirit.TRJ:
    case Spirit.HVL:
    case Spirit.BDS:
    case Spirit.RGS:
    case Spirit.WVD:
    case Spirit.WWB:
    case Spirit.DUE:
      return boxes.includes(Box.NI);
    case Spirit.DTU:
    case Spirit.EWT:
    case Spirit.FMS:
    case Spirit.RHS:
    case Spirit.SBW:
      return boxes.includes(Box.HZ);
  }
}
