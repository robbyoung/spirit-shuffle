import './board-dealer.scss';
import { useMemo, useRef } from 'react';
import { Board, getImageForBoard } from '../../models/board';
import { CSSTransition } from 'react-transition-group';

interface BoardDealerProps {
  animate: boolean;
  availableBoards: Board[];
  onDealt: (board: Board) => void;
}

function BoardDealer({ animate, availableBoards, onDealt }: BoardDealerProps) {
  const nodeRef = useRef(null);
  const board = useMemo(() => getRandomBoard(availableBoards), []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      mountOnEnter={true}
      classNames={`deal-board`}
      in={animate}
      onEntered={() => onDealt(board)}
      timeout={1000}
    >
      <img
        src={getImageForBoard(board)}
        alt={board}
        ref={nodeRef}
        className="board"
      />
    </CSSTransition>
  );
}

function getRandomBoard(boards: Board[]): Board {
  const randomIndex = Math.floor(Math.random() * boards.length);
  return boards[randomIndex];
}

export default BoardDealer;
