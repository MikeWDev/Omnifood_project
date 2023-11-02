import PricingPlan from "../components/pricingPlan";
import { starterPlan, completePlan } from "../components/content";
import SectionFeatCards from "./SectionFeatureCards";
const SectionPricing = () => {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2-cols margin-bottom-md">
        <PricingPlan
          planClass="pricing-plan--starter"
          planName="Starter"
          planPrice="399"
          planText="per month. That's just $13 per meal!"
          planBullets={starterPlan}
        />
        <PricingPlan
          planClass="pricing-plan--complete"
          planName="Complete"
          planPrice="649"
          planText="per month. That's just $11 per meal!"
          planBullets={completePlan}
        />
      </div>

      <div className="container grid">
        <aside className="plan-details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

      <SectionFeatCards />
    </section>
  );
};

export default SectionPricing;
