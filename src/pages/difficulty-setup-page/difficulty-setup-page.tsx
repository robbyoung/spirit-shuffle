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
import AdversaryWheel from '../../components/adversary-wheel/adversary-wheel';

function DifficultySetupPage() {
  const [difficulty] = useState<IndexedAdversary>(
    getRandomAdversary(allAdversaries, 0, 12)
  );

  const { addAdversary } = useQueryState();

  return (
    <div className="body difficulty-setup-page">
      <AdversaryWheel availableAdversaries={allAdversaries} />
    </div>
  );
}

export default DifficultySetupPage;
