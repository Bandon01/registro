function Testimonial() {
    return (
      <div className="testimonial-section">
        <div className="testimonial">
          <div className="testimonial-image">
            <img src="/api/placeholder/60/60" alt="Client" style={{ borderRadius: '50%' }} />
          </div>
          <div className="testimonial-content">
            <h3>John Doe</h3>
            <p>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
          </div>
        </div>
        <div className="testimonial-controls">
          <button className="prev">&#10094;</button>
          <button className="next">&#10095;</button>
        </div>
      </div>
    );
  }
  
  export default Testimonial;