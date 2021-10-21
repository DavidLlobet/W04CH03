import Key from "../Key/Key";

const Keyboard = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <ol className="keyboard">
      {numbers.map((number, index) => (
        <Key number={number} className={"key"} key={index} />
      ))}
      <Key number={"delete"} className={"key big"} />
    </ol>
  );
};

export default Keyboard;
