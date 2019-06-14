import * as actions from "./game";
import { constants } from "./game";

describe("action creators", () => {
  it("should create an action to add a ticket", () => {
    const number = 5;
    const expectedAction = {
      type: constants.addTicket,
      payload: { number, systemSelected: false }
    };
    expect(actions.addTicket(number)).toEqual(expectedAction);
  });

  it("should create an action to remove a ticket", () => {
    const payload = 5;
    const expectedAction = {
      type: constants.removeTicket,
      payload
    };
    expect(actions.removeTicket(payload)).toEqual(expectedAction);
  });
});
