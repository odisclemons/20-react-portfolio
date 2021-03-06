import uuid from "react-uuid";

const Portfolio = () => {
  // {
  //     thumbnail:"",
  //     url:"",
  //     heading:"",
  //     description:""
  // }

  const jobs = [
    {
      thumbnail: "nha.webp",
      url: "https://newarkha.org",
      heading: "Newark Housing Authority",
      description: "My first large web project.",
    },
    {
      thumbnail: "nhasf2.webp",
      url: "https://nhasf.newarkha.org",
      heading: "NHASF",
      description: "NHA Scholarship Foundation.",
    },
    {
      thumbnail: "kkd.webp",
      url: "https://kimskreativedesigns.com",
      heading: "Kim's Kreative Designs",
      description: "My cousin's business site.",
    },
    {
      thumbnail: "routemyday.webp",
      url: "https://odisclemons.github.io/route-my-day/",
      heading: "Route My Day",
      description: "Project for UCF bootcamp.",
    },
    {
      thumbnail: "planted.webp",
      url: "https://agile-wildwood-01808.herokuapp.com/",
      heading: "Planted",
      description: "Plan your garden or entire farm with Planted.",
    },
    {
      thumbnail: "notetaker.webp",
      url: "https://odis-11-note-taker.herokuapp.com/",
      heading: "Note Taker",
      description: "A simple app that allows notes in the browser.",
    },
  ];

  return (
    <section id="portfolio">
      <div className="section-heading">
        <h1>Portfolio</h1>
      </div>
      <div className="section-content">
        {jobs.map((j, i) => {
          return (
            <Project
              key={uuid()}
              index={i}
              thumbnail={j.thumbnail}
              url={j.url}
              heading={j.heading}
              description={j.description}
            />
          );
        })}
      </div>
    </section>
  );
};

const Project = ({ index, thumbnail, url, heading, description }) => {
  return (
    <div
      className={`gallery-box gallery-box-${index === 0 ? "lg" : "sm"}`}
      style={{ backgroundImage: `url(img/${thumbnail})` }}
      role="img"
      aria-label={`Image of ${description}`}
      onClick={() => window.open(url, "_blank")}
    >
      <div className="green-cover"></div>
      <div className="gallery-box-label">
        <h1>{heading}</h1>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default Portfolio;
