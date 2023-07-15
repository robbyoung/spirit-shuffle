import './difficulty-setup-page.scss';
import {
  allAdversaries,
  IndexedAdversary,
  getImageForAdversary,
  getRandomAdversary,
} from '../../models/adversaries';
import IconButton from '../../components/icon-button/icon-button';
import { BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';
import useQueryState from '../../hooks/use-query-state';

function DifficultySetupPage() {
  const [difficulty] = useState<IndexedAdversary>(
    getRandomAdversary(allAdversaries, 0, 12)
  );

  const { addAdversary } = useQueryState();

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
          onClick={() => addAdversary(difficulty, 'summary')}
        ></IconButton>
      }
    </div>
  );
}

export default DifficultySetupPage;
