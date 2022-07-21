import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

import blank from '../../assets/blank.png';

import './styles.scss';

export const Home = () => {
  const board = {
    columns: [
      {
        id: 1,      
        title: 'To Do',
        cards: [
          {
            id: 1,
            title: 'Add card',
            description: 'Add capability to add a card in a column'
          },
        ]
      },
      {
        id: 2,
        title: 'In Progress',
        cards: [
          {
            id: 2,
            title: 'Drag-n-drop support',
            description: 'Move a card between the columns'
          },
        ]
      },
      {
        id: 3,
        title: 'Done',
        cards: [
          {
            id: 3,
            title: 'Drag-n-drop support',
            description: 'Move a card between the columns'
          },
        ]
      }
    ]
  }
  return(
    <div className="container">
      <h1 className='title'>Kanban do projeto</h1>
      <div className="kanbanContainer">
      <Board initialBoard={board} />
      </div>
      <div className='image'>
      <img src={blank} alt="decoration" />
      </div>
    </div>
  );
}