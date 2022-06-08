import react from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="hlt">Odis Clemons</h1>

        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
      <div
        className="jt"
        role="img"
        aria-label="Jumbotron image of laptop with code displayed"
      >
        <div className="green-cover"></div>
        <div id="profile-pic" role="img" aria-label="profile picture of Odis">
          &nbsp;
        </div>
        <h2 className="hlt">dreadHeadDev welcomes you!</h2>
      </div>
    </header>
  );
};

export default Header;
