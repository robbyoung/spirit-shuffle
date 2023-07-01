import './summary-page.scss';
import useQueryState from '../../hooks/use-query-state';
import PlayerSummary from '../../components/player-summary/player-summary';
import IconButton from '../../components/icon-button/icon-button';
import { BsArrowRepeat } from 'react-icons/bs';

function SummaryPage() {
  const players = useQueryState().players;

  return (
    <div className="body">
      {players.map((player, i) => (
        <PlayerSummary key={`player-${i}`} player={player} />
      ))}
      <IconButton
        icon={<BsArrowRepeat />}
        tooltip="Restart"
        onClick={() => {
          window.location.assign(`/`);
        }}
      />
    </div>
  );
}

export default SummaryPage;
