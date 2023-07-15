import './summary-page.scss';
import useQueryState from '../../hooks/use-query-state';
import PlayerSummary from '../../components/player-summary/player-summary';
import IconButton from '../../components/icon-button/icon-button';
import { BsArrowRepeat } from 'react-icons/bs';

function SummaryPage() {
  const { state, wipeState } = useQueryState();

  return (
    <div className="body">
      {state.players.map((player, i) => (
        <PlayerSummary key={`player-${i}`} player={player} />
      ))}
      <IconButton
        icon={<BsArrowRepeat />}
        tooltip="Restart"
        onClick={() => wipeState()}
      />
    </div>
  );
}

export default SummaryPage;
