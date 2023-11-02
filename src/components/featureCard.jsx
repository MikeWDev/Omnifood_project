const FeatureCard = ({ data }) => {
  return (
    <div className="feature">
      <ion-icon className="feature-icon" name={`${data.icon}`}></ion-icon>
      <p className="feature-title">{data.title}</p>
      <p className="feature-text">{data.text}</p>
    </div>
  );
};

export default FeatureCard;
