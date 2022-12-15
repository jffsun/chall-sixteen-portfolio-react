import React from 'react';

// Import Navigation bar styling 
import '../../styles/Portfolio.css'

const projects = [
  {
    title: "Teacher's Pet",
    github: "https://github.com/jffsun/teachers-pet",
    technology: "MVC",
    deployed: "https://aqueous-wildwood-21593.herokuapp.com/"
  },
  {
    title: "Doggy Daycare",
    github: "https://github.com/jffsun/doggy-daycare",
    technology: "MERN",
    deployed: "https://placeholder.com/"
  },
  {
    title: "Social Network API",
    github: "https://github.com/jffsun/chall-fourteen-social-network-api",
    technology: "MongoDB",
    deployed: "https://placeholder.com/"
  },
  {
    title: "Tech Blog",
    github: "https://github.com/jffsun/chall-twelve-tech-blog",
    technology: "MVC",
    deployed: "https://glacial-castle-86468.herokuapp.com/"
  },
  {
    title: "Employee Tracker",
    technology: "SQL",
    github: "https://github.com/jffsun/chall-ten-employee-tracker",
    deployed: "https://placeholder.com/"
  },
  {
    title: "Team Generator",
    github: "https://github.com/jffsun/chall-eight-team-generator",
    technology: "OOP",
    deployed: "https://placeholder.com/"
  }
 ]

export default function Portfolio() {

    // Function takes project's title
    function imageFile (projectTitle) {
      
      // Remove apostrophes, coerce title lowercase, and split string into individual elements in an array
      const titleSplit = projectTitle.replace("'", "").toLowerCase().split(' ')

      // Join words tgether with '-'
      return titleSplit.join('-') + '.png'
    } 

  // Function will create JSX for each project in projects array 
  const allProjects = projects.map((project) => {
    return (
      <div className="project rounded">
        {/* Items will all appear in a row */}
        <div className="row img-wrapper">

            <img src=
            {imageFile(project.title)} 
            alt={project.title}
            className="img-responsive">
            </img>
        
            <div className="img-overlay">
              <div className="project-title">
                <h2>{project.technology} {project.title}</h2>
              </div>
             
              <div className="links-container">
                {/* Github Link */}
                <a href={project.github} target="_blank" rel="noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-github project-link" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>

                {/* Heroku Link */}
                <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="45" height="45"><title>Heroku</title><path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"/></svg>
                </a>
              </div>
            </div>
        </div>
      </div>
    );
  });
  return (
    <div>
       <h1>Portfolio</h1>
       <div className="projects-container">
        {allProjects}
      </div>
    </div>
  )
};
