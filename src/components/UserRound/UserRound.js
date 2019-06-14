import React from "react";
import { connect } from "react-redux";
import { getStep, getYourTickets } from "../../reducers/gameReducer";
import Board from "../Board/Board";
import YourTickets from "../YourTickets/YourTickets";
import { incrementStep, resetBoard } from "../../actions/game";
import "./UserRound.css";

function UserRound({ step, selectedNumber, nextStep }) {
  return (
    <React.Fragment>
      <p>
        You select <u>{selectedNumber}</u> Numbers
      </p>
      <div className="UserRound">
        <div className="UserRoundBoard">
          <p>Select 10 unique numbers</p>
          <hr />
          <Board editable={true} />
        </div>
        <hr />
        <div className="UserRoundSide">
          <p>Your Tickets</p>
          <hr />
          <YourTickets direction={step === 1 ? "column" : "row"} />
        </div>
      </div>
      <button
        type="button"
        className="btnConfirm"
        disabled={selectedNumber < 10}
        onClick={() => nextStep()}
      >
        Confirm
      </button>
    </React.Fragment>
  );
}

export default connect(
  state => ({
    step: getStep(state),
    selectedNumber: getYourTickets(state).length
  }),
  dispatch => ({
    nextStep: () => dispatch(incrementStep()) && dispatch(resetBoard())
  })
)(UserRound);
