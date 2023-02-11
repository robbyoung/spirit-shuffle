import sun from './images/elements/sun.png'
import moon from './images/elements/moon.png'
import fire from './images/elements/fire.png'
import sky from './images/elements/sky.png'
import water from './images/elements/water.png'
import mountain from './images/elements/mountain.png'
import plant from './images/elements/plant.png'
import beast from './images/elements/beast.png'

import title from './images/si-title.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={title} className="elemetn"></img>
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
      </header>
    </div>
  )
}

export default App
