import {
  TechCrunch,
  BusinessIn,
  NYTimes,
  Forbes,
  UsaToday,
} from "../assets/img/imgIndex";
const SectionFeatured = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src={TechCrunch} alt="Techcrunch logo" />
          <img src={BusinessIn} alt="Business Insider logo" />
          <img src={NYTimes} alt="The New York Times logo" />
          <img src={Forbes} alt="Forbes logo" />
          <img src={UsaToday} alt="USA Today logo" />
        </div>
      </div>
    </section>
  );
};

export default SectionFeatured;
