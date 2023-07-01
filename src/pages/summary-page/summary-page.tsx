import './summary-page.scss';
import useQueryState from '../../hooks/use-query-state';
import PlayerSummary from '../../components/player-summary/player-summary';
import IconButton from '../../components/icon-button/icon-button';
import { BsCheckLg } from 'react-icons/bs';

function SummaryPage() {
  const players = useQueryState().players;

  return (
    <div className="body">
      {players.map((player, i) => (
        <PlayerSummary key={`player-${i}`} player={player} />
      ))}
      <IconButton
        icon={<BsCheckLg />}
        tooltip="Home"
        onClick={() => {
          window.location.assign(`/`);
        }}
      />
    </div>
  );
}

export default SummaryPage;
