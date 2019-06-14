export const constants = {
  start: "START_GMAE",
  addTicket: "ADD_TICKET",
  removeTicket: "REMOVE_TICKET",
  incrementStep: "INCREMENT_STEP",
  resetBoard: "RESET_BOARD",
  updateBoard: "UPDATE_BOARD",
  startTimer: "START_TIMER",
  timeoutTicked: "TIMEOUT_TICKED",
  timerStop: "TIMER_STOP"
};

export const startGame = () => ({ type: constants.start });

export const addTicket = number => ({
  type: constants.addTicket,
  payload: { number, systemSelected: false }
});

export const removeTicket = number => ({
  type: constants.removeTicket,
  payload: number
});

export const updateBoard = number => ({
  type: constants.updateBoard,
  payload: number
});

export const incrementStep = () => ({ type: constants.incrementStep });

export const resetBoard = () => ({ type: constants.resetBoard });

export const play = () => ({ type: constants.startTimer });
