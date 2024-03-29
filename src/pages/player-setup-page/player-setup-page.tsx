import './player-setup-page.scss';
import { Spirit, getImageForSpirit } from '../../models/spirit';
import SpiritDeck from '../../components/spirit-deck/spirit-deck';
import IconButton from '../../components/icon-button/icon-button';
import { useState } from 'react';
import SpiritCardFilterOverlay from '../../components/spirit-card-filter-overlay/spirit-card-filter-overlay';
import BoardDealer from '../../components/board-dealer/board-dealer';
import useAvailableSpirits from '../../hooks/use-available-spirits';
import useAvailableBoards from '../../hooks/use-available-boards';
import { Board, getImageForBoard } from '../../models/board';
import { HiPencil } from 'react-icons/hi';
import { BsFillPersonPlusFill, BsCheckLg } from 'react-icons/bs';
import useQueryState from '../../hooks/use-query-state';
import Loader from '../../components/loader/loader';

function PlayerSetupPage() {
  const { state, addPlayer } = useQueryState();
  const numPlayers = state.players.length;
  const availableSpirits = useAvailableSpirits();
  const availableBoards = useAvailableBoards();

  const [showFilterOverlay, setShowFilterOverlay] = useState(false);
  const [selectedSpirits, setSelectedSpirits] = useState(availableSpirits);
  const [allowEdits, setAllowEdits] = useState(true);

  const [spirit, setSpirit] = useState<Spirit | undefined>(undefined);
  const [board, setBoard] = useState<Board | undefined>(undefined);

  const setupFinished = spirit !== undefined && board !== undefined;
  const allowNextPlayer = setupFinished && numPlayers < 5;

  return (
    <Loader
      images={[
        ...availableSpirits.map(getImageForSpirit),
        ...availableBoards.map(getImageForBoard),
      ]}
    >
      <div className="body">
        <h2 className="title">Player {numPlayers + 1}</h2>
        <SpiritDeck
          spirits={selectedSpirits}
          onShuffle={() => setAllowEdits(false)}
          onDealt={setSpirit}
        />
        <BoardDealer
          availableBoards={availableBoards}
          animate={spirit !== undefined}
          onDealt={setBoard}
        />
        <div className="icon-bar">
          {allowEdits && (
            <IconButton
              icon={<HiPencil />}
              tooltip="Edit Deck Contents"
              onClick={() => allowEdits && setShowFilterOverlay(true)}
            ></IconButton>
          )}
          {allowNextPlayer && (
            <IconButton
              icon={<BsFillPersonPlusFill />}
              tooltip="Next Player"
              onClick={() => addPlayer(numPlayers, spirit, board, 'spirit')}
            ></IconButton>
          )}
          {setupFinished && (
            <IconButton
              icon={<BsCheckLg />}
              tooltip="All Players Set Up"
              onClick={() => addPlayer(numPlayers, spirit, board, 'difficulty')}
            ></IconButton>
          )}
        </div>
        {showFilterOverlay && (
          <SpiritCardFilterOverlay
            availableSpirits={availableSpirits}
            selectedSpirits={selectedSpirits}
            onDismiss={() => setShowFilterOverlay(false)}
            onSelectionChange={setSelectedSpirits}
          />
        )}
      </div>
    </Loader>
  );
}

export default PlayerSetupPage;
