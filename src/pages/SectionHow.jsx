import { AppScreen1, AppScreen2, AppScreen3 } from "../assets/img/imgIndex";
import StepImgBox from "../components/stepImgBox";
import StepTextBox from "../components/stepTextBox";
const SectionHow = () => {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        <StepTextBox
          number="01"
          heading="Tell us what you like (and what not)"
          description="Never again waste time thinking about what to eat! Omnifood AI will
          create a 100% personalized weekly meal plan just for you. It makes sure
          you get all the nutrients and vitamins you need, no matter what diet you
          follow!"
        />
        <StepImgBox
          src={AppScreen1}
          alt="iPhone app preferences selection screen"
        />
        <StepImgBox
          src={AppScreen2}
          alt="iPhone app
        meal approving plan screen"
        />
        <StepTextBox
          number="02"
          heading="Approve your weekly meal plan"
          description=" Once per week, approve the meal plan generated for you by Omnifood
          AI. You can change ingredients, swap entire meals, or even add your
          own recipes."
        />
        <StepTextBox
          number="03"
          heading="Receive meals at convenient time"
          description=" Best chefs in town will cook your selected meal every day, and we
        will deliver it to your door whenever works best for you. You can
        change delivery schedule and address daily!"
        />
        <StepImgBox src={AppScreen3} alt="iPhone app delivery screen" />
      </div>
    </section>
  );
};

export default SectionHow;
