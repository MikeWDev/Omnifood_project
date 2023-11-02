const Figure = (props) => {
  return (
    <figure className="testimonial">
      <img className="testimonial-img" alt={props.imgAlt} src={props.imgSrc} />
      <blockquote className="testimonial-text">
        {props.testimonialText}
      </blockquote>
      <p className="testimonial-name">&mdash; {props.testimonialName} </p>
    </figure>
  );
};

export default Figure;
