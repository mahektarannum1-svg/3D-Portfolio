import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  return (
    <div className="header">
      {/* Logo / Brand */}
      <a href="/#" className="navbar-title" data-cursor="disable">
        MT
      </a>

      {/* Center LinkedIn link */}
      <a
        href="https://www.linkedin.com/in/mahek-tarannum/"
        className="navbar-connect"
        data-cursor="disable"
        target="_blank"
        rel="noreferrer"
      >
        linkedin.com/in/mahek-tarannum
      </a>

      {/* Nav links + pill CTA */}
      <div className="navbar-right">
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
        <a
          href="https://www.linkedin.com/in/mahek-tarannum/"
          className="navbar-pill-cta"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          Connect
        </a>
      </div>
    </div>
  );
};

export default Navbar;
