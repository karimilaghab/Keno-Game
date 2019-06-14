import React from "react";
import "./Welcome.css";
import { connect } from "react-redux";
import { startGame, incrementStep } from "../../actions/game";

function Welcome({ start }) {
  return (
    <section>
      <h1>Welcome to Keno!</h1>
      <ul>
        <p>
          Keno is fun, easy game that is played approximately every 3 minutes
        </p>
        <p>
          20 numbers are drawn from the 80 available on the keno display screen
        </p>
        <p>
          Match the numbers you play to the numbers drawn for a chance to win
          over $1,000,000
        </p>
      </ul>
      <button type="button" className="btnCreate" onClick={() => start()}>
        Create Ticket
      </button>
    </section>
  );
}

const dispatchToProps = dispatch => ({
  start: () => dispatch(startGame()) && dispatch(incrementStep())
});

export default connect(
  null,
  dispatchToProps
)(Welcome);
