import React from "react";
import { connect } from "react-redux";
import { getStep } from "../../reducers/gameReducer";
import "./MainBoard.css";
import UserRound from "../UserRound/UserRound";
import SystemRound from "../SystemRound/SystemRound";

function MainBoard({ step }) {
  if (step === 1) {
    return <UserRound />;
  }
  if (step === 2) {
    return <SystemRound />;
  }
}

export default connect(
  state => ({
    step: getStep(state)
  }),
  null
)(MainBoard);
