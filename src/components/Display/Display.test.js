import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When it receives '900000000'", () => {
    test("Then it should display '900000000'", () => {
      const number = "900000000";
      const expectedNumber = "900000000";

      render(<Display number={number} />);
      const textElement = screen.getByText(expectedNumber);

      expect(textElement).toBeInTheDocument();
    });
  });
});
