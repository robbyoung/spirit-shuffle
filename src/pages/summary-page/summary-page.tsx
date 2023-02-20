import './summary-page.scss';
import useQueryState from '../../hooks/use-query-state';
import PlayerSummary from '../../components/player-summary/player-summary';

function SummaryPage() {
  const players = useQueryState().players;

  return (
    <div className="body">
      {players.map((player, i) => (
        <PlayerSummary key={`player-${i}`} player={player} />
      ))}
    </div>
  );
}

export default SummaryPage;
