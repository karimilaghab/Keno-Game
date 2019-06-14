import React from "react";
import "./Cell.css";

function Cell(props) {
  const style = props.selected ? "cells selected" : "cells";
  return (
    <React.Fragment>
      <button
        className={style}
        disabled={props.selected}
        onClick={() => props.onClick && props.onClick(props.value)}
      >
        {props.value}
      </button>
      {props.step === 1 ? (
        <span
          style={{ fontSize: "10px" }}
          onClick={() => props.remove && props.remove(props.value)}
        >
          del
        </span>
      ) : null}
    </React.Fragment>
  );
}

export default Cell;
