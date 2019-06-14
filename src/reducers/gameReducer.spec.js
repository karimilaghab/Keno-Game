import { constants } from "../actions/game";
import reducer from "./gameReducer";

describe("game reducer", () => {
  const initState = {
    board: new Array(80)
      .fill({})
      .map((_, index) => ({ number: index + 1, selected: false })),
    yourTickets: [],
    randomNumbers: [],
    step: 0
  };
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });
  it("should handle ADD_TICKET", () => {
    const payload = { number: 5, systemSelected: false };
    expect(
      reducer(undefined, {
        type: constants.addTicket,
        payload
      })
    ).toEqual({
      ...initState,
      yourTickets: [...initState.yourTickets, payload]
    });
  });

  it("should ADD_TICKET handle duplication", () => {
    const payload = { number: 5, systemSelected: false };
    expect(
      reducer(
        {
          ...initState,
          yourTickets: [...initState.yourTickets, payload]
        },
        {
          type: constants.addTicket,
          payload
        }
      )
    ).toEqual({
      ...initState,
      yourTickets: [...initState.yourTickets, payload]
    });
  });

  it("should ADD_TICKET handle addition limit", () => {
    const payload = { number: 11, systemSelected: false };
    const mockTicket = [
      { number: 1, systemSelected: false },
      { number: 2, systemSelected: false },
      { number: 3, systemSelected: false },
      { number: 4, systemSelected: false },
      { number: 5, systemSelected: false },
      { number: 6, systemSelected: false },
      { number: 7, systemSelected: false },
      { number: 8, systemSelected: false },
      { number: 9, systemSelected: false },
      { number: 10, systemSelected: false }
    ];
    expect(
      reducer(
        {
          ...initState,
          yourTickets: mockTicket
        },
        {
          type: constants.addTicket,
          payload
        }
      )
    ).toEqual({
      ...initState,
      yourTickets: mockTicket
    });
  });
});
