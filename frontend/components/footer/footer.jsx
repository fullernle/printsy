import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div>
          <h4>Built With:</h4>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Ruby on Rails</li>
            <li>HTML/CSS</li>
          </ul>
        </div>

        <div>
          <h4>Other Projects:</h4>
          <ul>
            <li>
              <a href="https://homecooked--app.herokuapp.com">
                Homecooked MERN Project
              </a>
            </li>
            <li>
              <a href="https://fullernle.com/grimdarkstats">
                Grimdark Stats VanillaJS Project
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>About Me</h4>
          <ul>
            <li>Tabletop Game Enthusiast</li>
            <li>3D Printing Hobbyist</li>
            <li>Likes to dance in free time</li>
            <li>Loves to create experiences</li>
          </ul>
        </div>

        <div>
          <h4>My Links</h4>
          <ul>
            <li><a href="https://github.com/fullernle">Github</a></li>
            <li><a href="https://linkedin.com/in/fullernle">LinkedIn</a></li>
            <li><a href="https://fullernle.com">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
