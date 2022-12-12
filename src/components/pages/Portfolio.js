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
    title: "Team Profile Generator",
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
  const projectsJSX = projects.map((project) => {
    return (
      <div className="container">
        {/* Items will all appear in a row */}
        <div className="row img-wrapper">
          <h1>{project.title}</h1>
            <img src=
            {imageFile(project.title)} 
            alt={project.title}
            className="img-responsive">
            </img>
            <p>{project.technology}</p>
            <div className="img-overlay">
              {/* Github Link */}
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-md">Github</button>
              </a>
              {/* Heroku Link */}
              <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-md">Heroku</button>
              </a>
            </div>
        </div>
      </div>
    );
  });
  return (
    <div>
       <h1>Portfolio</h1>
      {projectsJSX}
    </div>
  )
};
