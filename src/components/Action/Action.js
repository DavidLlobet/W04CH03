import { useContext } from "react";
import Context from "../../Context/Context";

const Action = ({ text, className, actionOnClick }) => {
  const { showNumbers, setShowNumbers } = useContext(Context);
  const { calling, setCalling } = useContext(Context);

  return (
    <a href="button" className={className} onClick={actionOnClick}>
      {text}
    </a>
  );
};

export default Action;
