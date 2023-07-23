import './difficulty-setup-page.scss';
import { allAdversaries, Adversary } from '../../models/adversaries';
import IconButton from '../../components/icon-button/icon-button';
import { BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';
import useQueryState from '../../hooks/use-query-state';
import AdversaryWheel from '../../components/adversary-wheel/adversary-wheel';

function DifficultySetupPage() {
  const { addAdversary } = useQueryState();
  const [adversary, setAdversary] = useState<Adversary | undefined>(undefined);

  return (
    <div className="body difficulty-setup-page">
      <AdversaryWheel
        availableAdversaries={allAdversaries}
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
  );
}

export default DifficultySetupPage;
