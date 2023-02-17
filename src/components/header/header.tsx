import sun from '../../images/elements/sun.png';
import moon from '../../images/elements/moon.png';
import fire from '../../images/elements/fire.png';
import sky from '../../images/elements/sky.png';
import water from '../../images/elements/water.png';
import mountain from '../../images/elements/mountain.png';
import plant from '../../images/elements/plant.png';
import beast from '../../images/elements/beast.png';
import title from '../../images/si-title.png';

import './header.scss';

function Header() {
  return (
    <div className="header">
      <div className="element-group">
        <img src={sun} className="element upper" alt="logo" />
        <img src={moon} className="element lower" alt="logo" />
        <img src={fire} className="element upper" alt="logo" />
        <img src={sky} className="element lower" alt="logo" />
      </div>

      <div className="titles">
        <div className="title">
          <h1>Spirit Shuffle</h1>
        </div>

        <div className="subtitle">
          <p>
            <span>A</span>
            <img src={title} className="inline-title-image"></img>
            <span>Randomiser</span>
          </p>
        </div>
      </div>

      <div className="element-group">
        <img src={water} className="element lower" alt="logo" />
        <img src={mountain} className="element upper" alt="logo" />
        <img src={plant} className="element lower" alt="logo" />
        <img src={beast} className="element upper" alt="logo" />
      </div>
    </div>
  );
}

export default Header;
