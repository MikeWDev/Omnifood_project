import PricingList from "./pricingList";

const PricingPlan = (props) => {
  return (
    <div className={`pricing-plan ${props.planClass}`}>
      <header className="plan-header">
        <p className="plan-name">{props.planName}</p>
        <p className="plan-price">
          <span>$</span>
          {props.planPrice}
        </p>
        <p className="plan-text">{props.planText}</p>
      </header>
      <PricingList data={props.planBullets} />
      <div className="plan-sing-up">
        <a href="#" className="btn btn--full">
          Start eating well
        </a>
      </div>
    </div>
  );
};

export default PricingPlan;
