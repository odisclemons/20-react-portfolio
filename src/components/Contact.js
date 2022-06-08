import react, { useState } from "react";

const Contact = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((state) => {
      return { ...state, [id]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { fullName, email, message } = state;

    fullName = fullName.trim().replace(" ", "%20");
    message = message.trim().replace(" ", "%20");

    const mailtoLink = `mailto:odis.clemons@gmail.com?cc=${email}&subject=Site%20Visitor%20${fullName}&body=${message}`;
    console.log(mailtoLink);
    alert(`Opening your default mail client...`);
    window.location.href = mailtoLink;
    e.preventDefault();
  };

  return (
    <section id="contact">
      <div className="section-heading">
        <h1>Contact Me</h1>
      </div>
      <div className="section-content">
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            defaultValue={state.fullName}
            onChange={handleChange}
          />
          <input
            id="email"
            type="text"
            placeholder="Email"
            defaultValue={state.email}
            onChange={handleChange}
          />
          <textarea
            id="message"
            name="message"
            defaultValue={state.message}
            onChange={handleChange}
          ></textarea>
          <input type="submit" value="Send" />
        </form>

        <nav>
          <ul>
            <li>
              <a href="tel:555-555-555">555-555-555</a>
            </li>
            <li>
              <a href="mailto:odis.clemons@gmail.com">odis.clemons@gmail.com</a>
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
  );
};

export default Contact;
