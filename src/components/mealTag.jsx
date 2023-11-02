const MealTag = (props) => {
  return <span className={`tag ${props.tagClass} `}>{props.tagText}</span>;
};

export default MealTag;
