import { useContext } from "react";
import PhoneContext from "../../contexts/phoneContext/phoneContext";

const Action = () => {
  const { isCalling, buttonText } = useContext(PhoneContext);

  return (
    <a
      href={buttonText}
      className={`${buttonText}${isCalling ? " active" : ""}`}
    >
      {`${buttonText[0].toUpperCase()}${buttonText.slice(1)}`}
    </a>
  );
};
export default Action;
