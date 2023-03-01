import './difficulty-setup-page.scss';
import {
  allAdversaries,
  IndexedAdversary,
  getImageForAdversary,
  getRandomAdversary,
  getAdversaryUrlKey,
} from '../../models/adversaries';
import IconButton from '../../components/icon-button/icon-button';
import { BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';

function DifficultySetupPage() {
  const [difficulty] = useState<IndexedAdversary>(
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
            {difficulty.adversary.name} {difficulty.index}
          </p>
          <p>
            Difficulty {difficulty.adversary.difficulties[difficulty.index]}
          </p>
        </>
      )}
      {
        <IconButton
          icon={<BsCheckLg />}
          tooltip="Done"
          onClick={() => {
            const adversaryKey = getAdversaryUrlKey(difficulty);
            const params = window.location.search
              .split('&')
              .filter((param) => param !== '');
            params.push(`a=${adversaryKey}`);
            window.location.assign(
              `summary${params.length === 1 ? '?' : ''}${params.join('&')}`
            );
          }}
        ></IconButton>
      }
    </div>
  );
}

export default DifficultySetupPage;
