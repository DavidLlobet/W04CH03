import { useContext } from "react";
import Context from "../../Context/Context";

const Action = ({ text, className }) => {
  const { showNumbers, setShowNumbers } = useContext(Context);

  const call = () => {
    if (showNumbers.length < 10) {
      setShowNumbers(showNumbers + number);
    }
  };

  const hang = () => {
    if (showNumbers.length > 0) {
      setShowNumbers("");
    }
  }

  return (
    <a href="button" className={className} onclick={}>
      {text}
    </a>
  );
};

export default Action;
