import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer Intern</h4>
                <h5>Dheecodinglab · Bengaluru</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Worked on backend application engineering, developing features, and managing database connections. Designed database schemas and optimized data queries for enterprise services using Java, Spring Boot, Hibernate, and MySQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in ECE</h4>
                <h5>Poojya Doddappa Appa College of Engineering</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              Graduated in Electronics and Communication Engineering with a GPA of 8.26. Developed expertise in microcontrollers, embedded programming, IoT system architecture, and core software engineering fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
