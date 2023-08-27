import React from "react";
import Image from 'next/image';


const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (project) {
      var projectImage = "/static/images/portfolio/" + project.image;
      return (
        <div key={project.title} className="h-auto min-w-[150px] max-w-[300px] max-[900px]:w-[50%] w-[25%] columns portfolio-item">
          <div className="item-wrap">
            <a href={project.url} title={project.title}>
              <Image alt={project.title} src={projectImage} width={300} height={100} 
                      />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
              <div className="shadow-sm link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row shadow-2xl !max-w-[1200px]">
        <div className="twelve columns collapsed items-center align-middle">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
