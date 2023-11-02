import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
  Gallery11,
  Gallery12,
  Dave,
  Steve,
  Hannah,
  Ben,
} from "../assets/img/imgIndex";
import Figure from "../components/figureCard";
import GalleryComp from "../components/galleryComponent";
const SectionTestimonials = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className="testimonials">
          <Figure
            imgSrc={Dave}
            imgAlt="Photo of customer Dave Bryson"
            testimonialText="Inexpensive, healthy and great-tasting meals, without even having to
            order manually! It feels truly magical."
            testimonialName="Dave Bryson"
          />
          <Figure
            imgSrc={Ben}
            imgAlt="Photo of customer Ben Hadley"
            testimonialText="The AI algorithm is crazy good, it chooses the right meals for me
            every time. It's amazing not to worry about food anymore!"
            testimonialName="Ben Hadley"
          />
          <Figure
            imgSrc={Steve}
            imgAlt="Photo of customer Steve Miller"
            testimonialText="Omnifood is a life saver! I just started a company, so there's no
            time for cooking. I couldn't live without my daily meals now!"
            testimonialName="Steve Miller"
          />
          <Figure
            imgSrc={Hannah}
            imgAlt="Photo of customer Hannah Smith"
            testimonialText="I got Omnifood for the whole family, and it frees up so much time!
            Plus, everything is organic and vegan and without plastic."
            testimonialName="Hannah Smith"
          />
        </div>
      </div>

      <GalleryComp />
    </section>
  );
};

export default SectionTestimonials;
