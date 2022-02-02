import { useContext } from "react/cjs/react.development";
import PhoneContext from "../../contexts/phoneContext/phoneContext";

const Info = () => {
  const { isCalling } = useContext(PhoneContext);
  console.log(isCalling);
  return (
    <span className={`message${isCalling ? "" : " off"}`}>Calling...</span>
  );
};

export default Info;
