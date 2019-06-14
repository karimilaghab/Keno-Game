import React from "react";
import Cell from "./Cell";
import { shallow } from "enzyme";

it("should draw Cell component", () => {
  const wrapper = shallow(<Cell selected={false} value="3" />);
  expect(wrapper.find(".cells").length).toBe(1);
});
