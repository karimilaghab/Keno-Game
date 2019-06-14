import React from "react";
import Welcome from "./Welcome/Welcome";
import "./Game.css";
import { connect } from "react-redux";
import { getStep } from "../reducers/gameReducer";
import MainBoard from "./MainBoard/MainBoard";

function Game({ step }) {
  return <div className="Game">{step ? <MainBoard /> : <Welcome />}</div>;
}

export default connect(
  state => ({ step: getStep(state) }),
  null
)(Game);
