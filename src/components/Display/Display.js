import { useContext } from "react/cjs/react.development";
import PhoneContext from "../../contexts/phoneContext/phoneContext";

const Display = () => {
  const { number } = useContext(PhoneContext);

  return <span className="number">{number}</span>;
};

export default Display;
