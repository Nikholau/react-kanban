import { IBoard } from "../pages/Home";

export const initialBoard: IBoard = {
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