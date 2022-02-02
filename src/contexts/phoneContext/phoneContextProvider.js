import PhoneContext from "./phoneContext";

const PhoneContextProvider = ({ children }) => {
  const data = {
    isCalling: false,
  };

  return <PhoneContext.Provider value={data}>{children}</PhoneContext.Provider>;
};

export default PhoneContextProvider;
