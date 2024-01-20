import React from "react";
import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

const footerText = "Web by Miguel Siesto";

const renderElement = () => {
  const utils = render(<Footer />);

  const query = {
    text: () => screen.queryByText(footerText),
  };

  return {
    ...utils,
    query,
  };
};

describe("Footer", () => {
  it("renders by default", () => {
    const { query } = renderElement();

    expect(query.text()).not.toBeNull();
  });
});
