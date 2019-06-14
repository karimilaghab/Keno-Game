import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import { Provider } from "react-redux";
import store from "../store";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <Game />
    </Provider>
  );
});
