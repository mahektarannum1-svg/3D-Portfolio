import "./styles/Landing.css";

const Landing = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.hash = "#contact";
  };

  return (
    <div className="landing-section" id="landingDiv">
      {/* Atmospheric background overlay */}
      <div className="landing-bg-overlay" />

      {/* Hero content — centered */}
      <div className="landing-hero-content">
        <p className="landing-eyebrow">Software Engineer &amp; IoT Developer</p>

        <h1 className="landing-display">
          MAHEK<br />
          <span>TARANNUM</span>
        </h1>

        <p className="landing-sub">
          Building robust backend systems and intelligent IoT solutions that bridge software and hardware.
        </p>

        <form onSubmit={handleSubmit} className="hero-email-capture">
          <input
            type="email"
            placeholder="Your email address"
            className="hero-email-input"
            required
            data-cursor="disable"
          />
          <button type="submit" className="btn-primary hero-email-btn" data-cursor="disable">
            Get in touch
          </button>
        </form>
      </div>

      {/* Scroll indicator */}
      <div className="landing-scroll-hint">
        <span>Scroll</span>
        <div className="landing-scroll-line" />
      </div>
    </div>
  );
};

export default Landing;
