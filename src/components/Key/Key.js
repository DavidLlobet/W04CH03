import { useContext } from "react";
import Context from "../../Context/Context";

const Key = ({ number, className }) => {
  const { showNumbers, setShowNumbers } = useContext(Context);

  const addNumber = () => {
    if (showNumbers.length < 9) {
      setShowNumbers(showNumbers + number);
    }
  };

  const deleteNumber = () => {
    if (showNumbers.length > 0) {
      setShowNumbers("");
    }
  };

  return (
    <li>
      <button
        className={className}
        onClick={number === "delete" ? deleteNumber : addNumber}
      >
        {number}
      </button>
    </li>
  );
};

export default Key;
