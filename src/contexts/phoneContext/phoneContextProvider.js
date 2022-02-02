import PhoneContext from "./phoneContext";

const PhoneContextProvider = ({ children }) => {
  const data = {
    isCalling: false,
    number: 99999999,
  };

  return <PhoneContext.Provider value={data}>{children}</PhoneContext.Provider>;
};

export default PhoneContextProvider;
