import Display from "../Display/Display";
import Context from "../../Context/Context";
import { useContext } from "react";
import Action from "../Action/Action";

const Actions = () => {
  const { showNumbers, setShowNumbers } = useContext(Context);
  const { calling, setCalling } = useContext(Context);

  const makeCall = () => {
    setShowNumbers("");
    setCalling(true);
  };

  const hangCall = () => {
    setCalling(false);
  };

  return (
    <div className="actions">
      <Display number={showNumbers} />
      <Action
        text={showNumbers > 0 ? "Call" : ""}
        className={showNumbers > 0 ? "call active" : ""}
        onclick={makeCall}
      />
      <Action
        text={showNumbers < 1 ? "Hang" : ""}
        className={showNumbers < 1 ? "hang active" : ""}
        onclick={hangCall}
      />
    </div>
  );
};

export default Actions;
