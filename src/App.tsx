import sun from './images/elements/sun.png'
import moon from './images/elements/moon.png'
import fire from './images/elements/fire.png'
import sky from './images/elements/sky.png'
import water from './images/elements/water.png'
import mountain from './images/elements/mountain.png'
import plant from './images/elements/plant.png'
import beast from './images/elements/beast.png'

import title from './images/si-title.png'
import './App.scss'
import SpiritCard from './components/spirit-card/spirit-card'
import { Spirit } from './models/spirit'

function App() {
  return (
    <div className="app">
      <div className="title">
        <p>Spirit Shuffle</p>
      </div>

      <div className="subtitle">
        <p>
          <span>A</span>
          <img src={title} className="inline-title-image"></img>
          <span>Randomiser</span>
        </p>
      </div>

      <div>
        <img src={sun} className="element spin" alt="logo" />
        <img src={moon} className="element spin" alt="logo" />
        <img src={fire} className="element spin" alt="logo" />
        <img src={sky} className="element spin" alt="logo" />
        <img src={water} className="element spin" alt="logo" />
        <img src={mountain} className="element spin" alt="logo" />
        <img src={plant} className="element spin" alt="logo" />
        <img src={beast} className="element spin" alt="logo" />
      </div>

      <div>
        <SpiritCard spirit={Spirit.Earth} />
        <SpiritCard spirit={Spirit.River} />
        <SpiritCard spirit={Spirit.Thunderspeaker} />
        <SpiritCard spirit={Spirit.Bringer} />
        <SpiritCard spirit={Spirit.Shadows} />
      </div>
    </div>
  )
}

export default App
