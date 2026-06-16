import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a passionate Software Engineer and Java Developer with a background in Electronics and Communication Engineering. I specialize in building robust backend systems using Java, Spring Boot, and databases, while also designing innovative IoT and embedded solutions. I love bridging the gap between software and hardware to create impactful, full-stack applications.
        </p>
        <p className="para" style={{ marginTop: "1rem" }}>
          I am active on LeetCode, where I regularly solve data structures and algorithms problems to continuously sharpen my analytical thinking and software design skills.
        </p>
      </div>
    </div>
  );
};

export default About;
