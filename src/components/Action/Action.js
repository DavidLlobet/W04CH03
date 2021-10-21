const Action = ({ text, className, actionOnClick }) => {
  return (
    <a href="button" className={className} onClick={actionOnClick}>
      {text}
    </a>
  );
};

export default Action;
