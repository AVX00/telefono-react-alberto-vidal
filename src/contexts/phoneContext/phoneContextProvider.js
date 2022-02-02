import PhoneContext from "./phoneContext";

const PhoneContextProvider = ({ children }) => {
  return (
    <PhoneContext.Provider value={"hola"}>{children}</PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
