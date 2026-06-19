import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      {/* Left — Section Title */}
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      {/* Right — Interactive Feature List */}
      <div className="what-box">
        <div className="what-box-in">

          {/* Item 01 — Java & Backend */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-content-in">
              <h3>Java &amp; Backend</h3>
              <h4>Building Robust Web Applications</h4>
              <p>
                Specializing in backend services, RESTful APIs, and database
                integration using Spring and enterprise Java frameworks.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Java</div>
                <div className="what-tags">Spring Boot</div>
                <div className="what-tags">Hibernate</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">JDBC</div>
              </div>
            </div>
            <div className="what-arrow"></div>
          </div>

          {/* Item 02 — IoT & Embedded */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-content-in">
              <h3>IoT &amp; Embedded Systems</h3>
              <h4>Bridging Software and Hardware</h4>
              <p>
                Designing smart solutions and automation systems using IoT
                devices, Arduino, sensors, and embedded programming.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Arduino</div>
                <div className="what-tags">IoT Systems</div>
                <div className="what-tags">Sensors &amp; Automation</div>
                <div className="what-tags">C / C++</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">HTML / CSS / JS</div>
              </div>
            </div>
            <div className="what-arrow"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
