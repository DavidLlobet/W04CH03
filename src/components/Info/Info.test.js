import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When it receives true", () => {
    test("Then it should display 'Calling...'", () => {
      const condition = true;
      const expectedText = "Calling...";

      render(<Info condition={condition} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });

  describe("When it receives false", () => {
    test("Then it should display ''", () => {
      const condition = false;
      const expectedText = "";

      render(<Info condition={condition} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
