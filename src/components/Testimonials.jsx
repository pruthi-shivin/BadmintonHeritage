import { testimonials } from "../data/testimonialsData";


const Testimonials = () => {
  const renderCard = (item, index) => (
    <div
      key={index}
      className={`testimonial-card ${
        item.large
          ? "testimonial-card--large"
          : "testimonial-card--small"
      }`}
    >
      <div className="testimonial-user">
        <img
          src={item.avatar}
          alt={item.name}
        />

        <div>
          <h4>{item.name}</h4>

          <span>
            ⭐ {item.rating}
          </span>
        </div>
      </div>

      {item.large && (
        <>
          <div className="testimonial-book">
            <img
              src={item.image}
              alt={item.title}
            />
          </div>

          <h3>{item.title}</h3>
        </>
      )}

      <p>{item.text}</p>
    </div>
  );

  return (
    <section className="testimonials-section">

      <div className="container">

        <h2 className="testimonials-title">
          What They Say About Us!
        </h2>

        <div className="testimonials-grid">

          <div className="testimonial-column">
            {renderCard(testimonials[0], 0)}
            {renderCard(testimonials[3], 3)}
          </div>

          <div className="testimonial-column">
            {renderCard(testimonials[1], 1)}
            {renderCard(testimonials[4], 4)}
          </div>

          <div className="testimonial-column">
            {renderCard(testimonials[2], 2)}
            {renderCard(testimonials[5], 5)}
          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;