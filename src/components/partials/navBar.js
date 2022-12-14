import React from "react";
import { Navbar } from "./styles/navbar.styled.js";
import Direction from "./direction";
import home from "../../icon/menu/home.png";
import skills from "../../icon/menu/skills.png";
import works from "../../icon/menu/works.png";
import certificates from "../../icon/menu/certificates.png";
import testimonials from "../../icon/menu/testimonials.png";
import about from "../../icon/menu/about.png";
import user from "../../icon/menu/user.png";
import me_standing from "../../icon/menu/me-standing.png";
export default function NavBar({ showNavBar, updateDisplay }) {
  return (
    <Navbar display={showNavBar ? "block" : "none"} data-testid="navbar">
      <Direction
        icon="hide"
        toggle={updateDisplay}
        style={{
          position: "absolute",
          transform: "translate(calc(-50% - 2px))",
          border: "4px solid var(--bright)"
        }}
      />
      <ul>
        <li>
          <a href="/">
            <img className="icon" src={home} alt="home" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img className="icon" src={skills} alt="skills" />
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img className="icon" src={works} alt="works" />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img className="icon" src={certificates} alt="certificates" />
            <span>Certificates</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img className="icon" src={testimonials} alt="home" />
            <span>Testimonials</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img className="icon" src={about} alt="about" />
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img className="icon" src={user} alt="user" />
            <span>Digital presence</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img className="icon" src={me_standing} alt="me standing" />
            <span>Contact me</span>
          </a>
        </li>
      </ul>
    </Navbar>
  );
}
