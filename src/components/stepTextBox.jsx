const StepTextBox = (props) => {
  return (
    <div className="step-text-box">
      <p className="step-number">{props.number}</p>
      <h3 className="heading-tertiary">{props.heading}</h3>
      <p className="step-description">{props.description}</p>
    </div>
  );
};

export default StepTextBox;
