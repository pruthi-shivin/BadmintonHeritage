const PricingCard = ({
  title,
  description,
  price,
  duration,
  featured,
}) => {
  return (
    <div
      className={`pricing-card ${
        featured ? "pricing-card--featured" : ""
      }`}
    >
      <button
        className={`pricing-card__icon ${
            featured
            ? "pricing-card__icon--white"
            : "pricing-card__icon--blue"
        }`}
        >
        →
        </button>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="pricing-card__price">
        {price}
        <span>{duration}</span>
      </div>
    </div>
  );
};

export default PricingCard;