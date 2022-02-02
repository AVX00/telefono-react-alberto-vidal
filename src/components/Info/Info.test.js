import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/phoneContext/phoneContextProvider";
import Info from "./Info";

describe("Given a Info component", () => {
  describe("when it's rendered '", () => {
    test("Then it should display the text 'Calling...", () => {
      const expectedText = "Calling...";
      const isCalling = false;

      render(
        <PhoneContextProvider>
          <Info isCalling={isCalling} />
        </PhoneContextProvider>
      );
      const text = screen.queryByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
