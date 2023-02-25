import './difficulty-setup-page.scss';
import {
  allAdversaries,
  getImageForAdversary,
  getRandomAdversary,
} from '../../models/adversaries';
import IconButton from '../../components/icon-button/icon-button';
import { BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';

function DifficultySetupPage() {
  const [difficulty] = useState(getRandomAdversary(allAdversaries, 0, 12));

  return (
    <div className="body">
      <img src={getImageForAdversary(difficulty.adversary)}></img>
      <p>
        {difficulty.adversary.name}{' '}
        {difficulty.adversary.difficulties[difficulty.difficultyIndex]}
      </p>
      {
        <IconButton
          icon={<BsCheckLg />}
          tooltip="Done"
          onClick={() => {
            const params = window.location.search;
            window.location.assign(`summary${params}`);
          }}
        ></IconButton>
      }
    </div>
  );
}

export default DifficultySetupPage;
