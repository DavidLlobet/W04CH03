import { useContext } from "react";
import Context from "../../Context/Context";

const Key = ({ number, className }) => {
  const { showNumbers, setShowNumbers } = useContext(Context);

  const addNumber = () => {
    if (showNumbers.length < 10) {
      setShowNumbers(showNumbers + number);
    }
  };

  return (
    <li>
      <button className={className} onClick={addNumber}>
        {number}
      </button>
    </li>
  );
};

export default Key;
