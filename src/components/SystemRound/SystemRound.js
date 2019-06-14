import React, { Component } from "react";
import { connect } from "react-redux";
import { getStep, getYourTickets } from "../../reducers/gameReducer";
import Board from "../Board/Board";
import YourTickets from "../YourTickets/YourTickets";
import "./SystemRound.css";
import { play } from "../../actions/game";

class SystemRound extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 40, disable: false };
    this.interval = null;
  }

  startTimer() {
    const TIME = 41 * 1000;
    let countDownDate = new Date().getTime() + TIME;

    this.interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let seconds = Math.floor(distance / 1000);
      if (distance <= 0) {
        clearInterval(this.interval);
      }
      this.setState({ timer: seconds });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.timer <= 0) {
      clearInterval(this.interval);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { step, play, sameNumber } = this.props;
    return (
      <React.Fragment>
        <div className="System">
          <div className="SystemSide">
            <p>
              <b>Your Tickets</b>
            </p>
            <hr />
            <YourTickets direction={step === 1 ? "column" : "row"} />
          </div>
          <button
            type="button"
            className="btnPlay"
            disabled={this.state.disable}
            onClick={() => {
              play();
              this.startTimer();
              this.setState({ disable: true });
            }}
          >
            Let's Play
          </button>
          <div className="SystemBoard">
            <strong>Time: {this.state.timer}</strong>
            <hr />
            <Board editable={false} />
          </div>
          {this.state.timer === 0 && (
            <div style={{ marginTop: "10px" }}>
              <strong>Result: </strong>
              {sameNumber ? (
                <p>
                  <b>Congratulations,</b> {sameNumber} number/s are matched
                </p>
              ) : (
                <p>Oh sorry! No number is matched</p>
              )}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    step: getStep(state),
    sameNumber: getYourTickets(state).reduce((acc, value) => {
      return value.systemSelected === true ? acc + 1 : acc + 0;
    }, 0)
  }),
  dispatch => ({
    play: () => dispatch(play())
  })
)(SystemRound);
