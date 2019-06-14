import React from "react";
import { connect } from "react-redux";
import { getYourTickets, getStep } from "../../reducers/gameReducer";
import Cell from "../Cell/Cell";
import { removeTicket } from "../../actions/game";

function YourTickets({ myTickets, direction, step, removeTicket }) {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: direction,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        {myTickets.map(value => {
          return (
            <React.Fragment>
              <Cell
                value={value.number}
                key={`selected-ticket-${value.number}`}
                selected={value.systemSelected}
                step={step}
                remove={step === 1 ? removeTicket : undefined}
              />
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default connect(
  state => ({
    step: getStep(state),
    myTickets: getYourTickets(state)
  }),
  dispatch => ({
    removeTicket: number => dispatch(removeTicket(number))
  })
)(YourTickets);
