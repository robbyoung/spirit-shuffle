import { getImageForBoard } from '../../models/board';
import { Player } from '../../models/player';
import SpiritCard from '../spirit-card/spirit-card';
import './player-summary.scss';

interface PlayerSummaryProps {
  player: Player;
}

function PlayerSummary({ player }: PlayerSummaryProps) {
  return (
    <div className="player-summary">
      <div className="text">
        <p className="spirit-name">{player.spirit}</p>
        <p className="on">on</p>
        <p className="board-name">{player.board}</p>
      </div>
      <div className="images">
        <SpiritCard spirit={player.spirit} />
        <div>
          <img
            src={getImageForBoard(player.board)}
            alt={player.board}
            className="board"
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerSummary;
