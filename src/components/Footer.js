const Footer = () => {
  return (
    <footer>
      <section id="contact">
        <div className="section-heading">
          <h1>Contact Me</h1>
        </div>
        <div className="section-content">
          <nav>
            <ul>
              <li>
                <a href="tel:555-555-555">555-555-555</a>
              </li>
              <li>
                <a href="mailto:odis.clemons@gmail.com">
                  odis.clemons@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/odisclemons">Github</a>
              </li>
              <li>
                <a onClick={() => alert("I'm not into social media :-(")}>
                  Twitter
                </a>
              </li>
              <li>
                <a onClick={() => alert("Spotify is cool but I don' use it.")}>
                  Spotify
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
