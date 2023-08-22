import dahan from '../../images/svgs/dahan.svg';
import town from '../../images/svgs/town.svg';
import './icon.scss';

export const DahanIcon = () => {
  return <img className="icon-dahan" src={dahan}></img>;
};

export const TownIcon = () => {
  return <img className="icon-town" src={town}></img>;
};
