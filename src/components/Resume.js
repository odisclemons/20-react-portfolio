const Resume = () => {
  return (
    <section id="resume" style={{ height: 300 }}>
      <div className="section-heading">
        <h1>Resume</h1>
      </div>
      <div className="section-content">
        <div className="centerStuff moreContainer">
          <button
            className="more"
            id="aboutBtn"
            onClick={() => (window.location = "docs/resume.pdf")}
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
