import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/phoneContext/phoneContext";
import Info from "./Info";

describe("Given a Info component", () => {
  describe("when it's rendered '", () => {
    test("Then it should display the text 'Calling...", () => {
      const expectedText = "Calling...";
      const value = false;

      render(
        <PhoneContext.Provider value={value}>
          <Info />
        </PhoneContext.Provider>
      );
      const text = screen.queryByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
