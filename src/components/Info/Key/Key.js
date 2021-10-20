const Key = (text, actionOnClick) => {
  return (
    <li>
      <button className="key" onClick={actionOnClick}></button>
      {text}
    </li>
  );
};

export default Key;
