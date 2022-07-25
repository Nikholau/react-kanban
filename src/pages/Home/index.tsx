import Board, { moveCard } from '@lourenci/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { useState } from 'react';

import './styles.scss';

export const Home = () => {
  let initialBoard = {
    counter: 9,
    columns: [
      {
        id: 1,
        title: "📝  To Do",
        cards: [
          {
            id: 1.1,
            title: "Documentar padrões mobile",
            description: "Tag1"
          },
          {
            id: 1.2,
            title: "Ajustes fluxo de compra",
            description: "Tag1"
          },
          {
            id: 1.3,
            title: "Banners da home",
            description: "Tag1"
          },
          {
            id: 1.4,
            title: "Template de e-mail marketing",
            description: "Tag1"
          }
        ]
      },
      {
        id: 2,
        title: "💻  In Progress",
        cards: [
          {
            id: 2.1,
            title: "Wireframe das telas",
            description: "Tag2"
          }
        ]
      },
      {
        id: 3,
        title: "🚀  Done",
        cards: [
          {
            id: 3.1,
            title: "Implementação do blog",
            description: "Tag3"
          },
          {
            id: 3.2,
            title: "Análise de métricas",
            description: "Tag3"
          },
          {
            id: 3.3,
            title: "UX Review",
            description: "Tag3"
          }
        ]
      }
    ]
  };
  const [board, setBoard] = useState(initialBoard);

  function onCardNew(newCard: any) {
    const newCardLocal = { id: initialBoard.counter + 1, ...newCard };
    initialBoard.counter = initialBoard.counter + 1;
    setBoard(initialBoard);
    return newCardLocal;
  }

  function handleCardMove(_card: any, source: any, destination: any) {
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
          allowAddCard={{ on: "Bottom" }}
          onNewCardConfirm={onCardNew}
          onCardNew={console.log} 
          />
      </div>
    </div>
  );
}