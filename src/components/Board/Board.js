import React from "react";
import { connect } from "react-redux";
import { getBoard } from "../../reducers/gameReducer";
import Cell from "../Cell/Cell";
import { addTicket, updateBoard } from "../../actions/game";

function Board({ board, addTicket, editable }) {
  return (
    <React.Fragment>
      {board.map(cellValue => {
        return (
          <React.Fragment>
            <Cell
              key={`cell-board-${cellValue.number}`}
              value={cellValue.number}
              selected={cellValue.selected}
              onClick={editable ? addTicket : undefined}
            />
            {cellValue.number % 10 === 0 && <br />}
            {cellValue.number === 40 && <br />}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default connect(
  state => ({ board: getBoard(state) }),
  dispatch => ({
    addTicket: number => {
      dispatch(addTicket(number));
      dispatch(updateBoard(number));
    }
  })
)(Board);
