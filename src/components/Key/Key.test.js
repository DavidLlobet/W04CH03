import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it receives a text with value '9'", () => {
    test("Then it should display '9'", () => {
      const textReceived = "9";
      const expectedText = "9";

      render(<Key textReceived={textReceived} actionOnClick={() => {}} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
