const Resume = () => {
  return (
    <section id="resume" style={{ height: 300 }}>
      <div className="section-heading">
        <h1>Resume</h1>
      </div>
      <div
        className="section-content"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <button
          className="more"
          id="aboutBtn"
          style={{ width: "auto" }}
          onClick={() =>
            window.open("docs/OdisClemonsResume-6-2022.pdf", "_blank")
          }
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;
