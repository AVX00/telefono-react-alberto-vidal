import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/phoneContext/phoneContextProvider";
import Display from "./Display";

describe("Given a Info component", () => {
  describe("when it's rendered '", () => {
    test("Then it should display the text 'Calling...", () => {
      const expectedNumber = "99999999";

      render(
        <PhoneContextProvider>
          <Display />
        </PhoneContextProvider>
      );
      const number = screen.queryByText(expectedNumber);

      expect(number).toBeInTheDocument();
    });
  });
});
