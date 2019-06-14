import { constants } from "../actions/game";

const initialState = {
  board: new Array(80)
    .fill({})
    .map((_, index) => ({ number: index + 1, selected: false })),
  yourTickets: [],
  randomNumbers: [],
  step: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.incrementStep:
      return { ...state, step: state.step + 1 };

    case constants.timeoutTicked:
      if (state.randomNumbers.length === 20) return state;
      if (state.randomNumbers.find(item => item === action.payload))
        return state;
      const index = state.yourTickets.findIndex(
        item => item.number === action.payload
      );

      const newTickets =
        index === -1
          ? state.yourTickets
          : [
              ...state.yourTickets.slice(0, index),
              { ...state.yourTickets[index], systemSelected: true },
              ...state.yourTickets.slice(index + 1)
            ];

      return {
        ...state,
        yourTickets: newTickets,
        randomNumbers: [...state.randomNumbers, action.payload]
      };

    case constants.resetBoard:
      return {
        ...state,
        board: state.board.map(item =>
          item.selected === true ? { ...item, selected: false } : item
        )
      };

    case constants.updateBoard:
      const countBoard = state.board.reduce((acc, value) => {
        return value.selected ? acc + 1 : acc + 0;
      }, 0);
      if (state.step === 1 && countBoard === 10) {
        return state;
      } else {
        const index = state.board.findIndex(
          ({ number }) => number === action.payload
        );
        return {
          ...state,
          board: [
            ...state.board.slice(0, index),
            { ...state.board[index], selected: true },
            ...state.board.slice(index + 1)
          ]
        };
      }

    case constants.addTicket:
      if (state.yourTickets.length === 10) return state;
      if (state.yourTickets.find(item => item.number === action.payload.number))
        return state;
      return {
        ...state,
        yourTickets: [...state.yourTickets, action.payload]
      };

    case constants.removeTicket:
      const _index = state.board.findIndex(
        ({ number }) => number === action.payload
      );
      return {
        ...state,
        yourTickets: state.yourTickets.filter(item => {
          return item.number !== action.payload;
        }),
        board: [
          ...state.board.slice(0, _index),
          { ...state.board[_index], selected: false },
          ...state.board.slice(_index + 1)
        ]
      };

    default:
      return state;
  }
};

export const getBoard = state => state.game.board;
export const getYourTickets = state => state.game.yourTickets;
export const getRandomNumbers = state => state.game.randomNumbers;
export const getStep = state => state.game.step;
