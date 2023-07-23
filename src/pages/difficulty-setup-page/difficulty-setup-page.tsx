import './difficulty-setup-page.scss';
import {
  allAdversaries,
  Adversary,
  getImageForAdversary,
  adversaryIncludedInBoxes,
} from '../../models/adversaries';
import IconButton from '../../components/icon-button/icon-button';
import { BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';
import useQueryState from '../../hooks/use-query-state';
import AdversaryWheel from '../../components/adversary-wheel/adversary-wheel';
import Loader from '../../components/loader/loader';

function DifficultySetupPage() {
  const { state, addAdversary } = useQueryState();
  const [adversary, setAdversary] = useState<Adversary | undefined>(undefined);
  const availableAdversaries = allAdversaries.filter((a) =>
    adversaryIncludedInBoxes(a, state.boxes)
  );

  return (
    <Loader images={[...availableAdversaries.map(getImageForAdversary)]}>
      <div className="body difficulty-setup-page">
        <AdversaryWheel
          availableAdversaries={availableAdversaries}
          onSelected={setAdversary}
        />
        {adversary !== undefined && (
          <>
            <p>{adversary.name}</p>
            <IconButton
              icon={<BsCheckLg />}
              tooltip="Done"
              onClick={() => addAdversary({ adversary, index: 0 }, 'summary')}
            ></IconButton>
          </>
        )}
      </div>
    </Loader>
  );
}

export default DifficultySetupPage;
