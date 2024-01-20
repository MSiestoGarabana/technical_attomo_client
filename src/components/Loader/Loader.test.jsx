import React from "react";
import { screen, render } from "@testing-library/react";
import Loader from "./";

const loaderText = "Loading...";

const renderElement = () => {
  const utils = render(<Loader />);

  const query = {
    text: () => screen.queryByText(loaderText),
  };

  return {
    ...utils,
    query,
  };
};

describe("Loader", () => {
  it("renders by default", () => {
    const { query } = renderElement();
    expect(query.text()).not.toBeNull();
  });
});
