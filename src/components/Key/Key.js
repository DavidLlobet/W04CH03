const Key = ({ number, className, actionOnClick }) => {
  return (
    <li>
      <button className={className} onClick={actionOnClick}>
        {number}
      </button>
    </li>
  );
};

export default Key;
