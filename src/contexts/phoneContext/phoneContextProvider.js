import { useState } from "react";
import PhoneContext from "./phoneContext";

const PhoneContextProvider = ({ children }) => {
  const [isCalling] = useState(false);
  const [number] = useState(0);

  const buttonText = (() => (isCalling ? "hang" : "call"))();

  const data = {
    isCalling,
    number,
    buttonText,
  };

  return <PhoneContext.Provider value={data}>{children}</PhoneContext.Provider>;
};

export default PhoneContextProvider;
