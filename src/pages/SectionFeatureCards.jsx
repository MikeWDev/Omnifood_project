import FeatureCard from "../components/featureCard";
import {
  featureCardNo1,
  featureCardNo2,
  featureCardNo3,
  featureCardNo4,
} from "../components/content";

const SectionFeatCards = () => {
  return (
    <div className="container grid grid--4-cols">
      <FeatureCard data={featureCardNo1} />
      <FeatureCard data={featureCardNo2} />
      <FeatureCard data={featureCardNo3} />
      <FeatureCard data={featureCardNo4} />
    </div>
  );
};

export default SectionFeatCards;
