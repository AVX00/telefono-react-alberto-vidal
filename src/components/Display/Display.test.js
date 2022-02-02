import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/phoneContext/phoneContext";
import Display from "./Display";

describe("Given a Info component", () => {
  describe("when it's rendered '", () => {
    test("Then it should display the text 'Calling...", () => {
      const expectedNumber = "99999999";
      const number = expectedNumber;

      render(
        <PhoneContext.Provider value={{ number }}>
          <Display />
        </PhoneContext.Provider>
      );
      const resultantNumber = screen.queryByText(expectedNumber);

      expect(resultantNumber).toBeInTheDocument();
    });
  });
});
