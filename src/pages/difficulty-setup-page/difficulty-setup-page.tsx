import './difficulty-setup-page.scss';
import {
  allAdversaries,
  Difficulty,
  getImageForAdversary,
  getRandomAdversary,
} from '../../models/adversaries';
import IconButton from '../../components/icon-button/icon-button';
import { BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';

function DifficultySetupPage() {
  const [difficulty] = useState<Difficulty | undefined>(
    getRandomAdversary(allAdversaries, 0, 12)
  );

  return (
    <div className="body difficulty-setup-page">
      {difficulty && (
        <>
          <img
            className="flag"
            src={getImageForAdversary(difficulty.adversary)}
          ></img>
          <p>
            {difficulty.adversary.name} {difficulty.difficultyIndex}
          </p>
          <p>
            Difficulty{' '}
            {difficulty.adversary.difficulties[difficulty.difficultyIndex]}
          </p>
        </>
      )}
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
