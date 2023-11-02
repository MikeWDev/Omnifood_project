import NavBar from "../components/navBar";
import {
  Customer1,
  Customer2,
  Customer3,
  Customer4,
  Customer5,
  Customer6,
  HeroMin,
  HeroWebp,
} from "../assets/img/imgIndex";
import { Link } from "react-scroll";
const SectionHero = () => {
  return (
    <>
      <NavBar />
      <section className="section-hero" id="hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <Link
              to="cta"
              duration={2000}
              smooth={true}
              className="btn btn--full margin-right-sm"
              href="#cta"
            >
              Start eating well
            </Link>
            <Link
              to="how"
              duration={2000}
              smooth={true}
              className="btn btn--outline"
              href="#how"
            >
              Learn more &darr;
            </Link>

            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src={Customer1} alt="Customer photo" />
                <img src={Customer2} alt="Customer photo" />
                <img src={Customer3} alt="Customer photo" />
                <img src={Customer4} alt="Customer photo" />
                <img src={Customer5} alt="Customer photo" />
                <img src={Customer6} alt="Customer photo" />
              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <picture>
              <source srcSet={HeroWebp} type="image/webp" />
              <source srcSet={HeroMin} type="image/png" />

              <img
                src={HeroMin}
                className="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionHero;
