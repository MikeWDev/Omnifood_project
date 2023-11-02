const StepImgBox = (props) => {
  return (
    <div className="step-img-box">
      <img src={props.src} className="step-img" alt={props.alt} />
    </div>
  );
};

export default StepImgBox;
