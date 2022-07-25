import Board, { moveCard } from '@lourenci/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { useState } from 'react';
import './styles.scss';
import { initialBoard } from '../../helpers/data';

interface ICard {
  id: number;
  title: string;
  description?: string;
}

interface IColumns {
  id: number;
  title: string;
  cards: ICard[];
}

export interface IBoard {
  counter: number;
  columns: IColumns[];
}

export const Home = () => {
  const [board, setBoard] = useState<IBoard>(initialBoard);

  function onCardNew(newCard: any) {
    const newCardLocal = { id: initialBoard.counter + 1, ...newCard };
    initialBoard.counter = initialBoard.counter + 1;
    setBoard(initialBoard);
    return newCardLocal;
  }

  function handleCardMove(_card: ICard, source: number, destination: number) {
    const updatedBoard = moveCard(board, source, destination);
    setBoard(updatedBoard);
  }


  return(
    <div className="container">
      <h1 className='title'>Kanban do projeto</h1>
      <div className="kanbanContainer">
        <Board 
          onCardDragEnd={handleCardMove}
          initialBoard={board} 
          allowRenameColumn
          allowRemoveCard
          allowAddCard={{ on: "Bottom" }}
          onNewCardConfirm={onCardNew}
          onCardNew={console.log} 
          onCardRemove={console.log}
          
          />
      </div>
    </div>
  );
}