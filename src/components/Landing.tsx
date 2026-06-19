import "./styles/Landing.css";

const Landing = () => {
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
          Building robust backend systems and intelligent IoT solutions<br />
          that bridge software and hardware.
        </p>

        <div className="landing-cta-group">
          <a
            href="#contact"
            className="btn-primary"
            data-cursor="disable"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="btn-ghost"
            data-cursor="disable"
          >
            View my work
          </a>
        </div>
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
