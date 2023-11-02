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
const SectionTestimonials = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className="testimonials">
          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Dave Bryson"
              src={Dave}
            />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Ben Hadley"
              src={Ben}
            />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Steve Miller"
              src={Steve}
            />
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Hannah Smith"
              src={Hannah}
            />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

      <div className="gallery">
        <figure className="gallery-item">
          <img
            src={Gallery1}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery2}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery3}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery4}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery5}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery6}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery7}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery8}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery9}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery10}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery11}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src={Gallery12}
            alt="Photo of beautifully
      arranged food"
          />
        </figure>
      </div>
    </section>
  );
};

export default SectionTestimonials;
