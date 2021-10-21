import Key from "../Key/Key";
import Display from "../Display/Display";

const Keyboard = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const addNumber = () => {};

  return (
    <ol className="keyboard">
      {numbers.map((number) => (
        <Key number={number} className={"key"} />
      ))}
      <Key number={"delete"} className={"key big"} />
    </ol>
  );
};

export default Keyboard;
