import LaunchIcon from "@mui/icons-material/Launch";
import { GitHub } from "@mui/icons-material";
import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Project.css";
import { ContextValue } from "../../App";


const ProjectCards = () => {
  const { theme } = useContext(ContextValue);
  const projects = [
    {
      id: 1,
      title: "Task Manager",
      description:
        "The Task manager App is a simple application that allows users to manage their tasks and create to-do lists. It provides an intuitive user interface for adding, editing, and deleting tasks. The app is built using React, a popular JavaScript library for building user interfaces.",
      image: "./Images/taskManager.png",
      tools: ["React", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Muhammed-Safwan21/task-manager/",
      link: "https://muhammed-safwan21.github.io/task-manager/",
    },
    {
      id: 2,
      title: "Quote Generator",
      description:
        "A simple React application that generates random quotes using the type.fit API.",
      image: "./Images/quote.png",
      tools: ["React", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Muhammed-Safwan21/quote-generator",
      link: "https://muhammed-safwan21.github.io/quote-generator/",
    },
    {
      id: 3,
      title: "Add to Cart (Shopping List)",
      description:
        "This is a simple shopping list application built with React. It allows you to add items to a list and delete items by clicking on them.",
      image: "./Images/shoppingList.png",
      tools: ["React", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Muhammed-Safwan21/add-to-cart",
      link: "https://muhammed-safwan21.github.io/add-to-cart/",
    },
    {
      id: 4,
      title: "JavaScript Calculator",
      description:
        "The JavaScript Calculator is a simple web application that allows users to perform arithmetic calculations. The calculator will provide a user interface with buttons for numbers, mathematical operations, and a display area to show the input and output of calculations.",
      image: "./Images/calculatorjs.png",
      tools: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Muhammed-Safwan21/js-calculator",
      link: "https://muhammed-safwan21.github.io/js-calculator/",
    },
  ];

  return (
    <Container
      className={theme === false ? "project-dark" : "project-light"}
      id="projects"
    >
      <div className="project-card">
        <h1 id="main-heading">Projects</h1>

        <div>
          {projects.map((project, index) => (
            <Row className="project-container" key={project.id}>
              {index % 2 === 0 ? (
                
                <>
                  <Col className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: "400px", height: "350px" }}
                    />
                  </Col>

                  <Col className="project-description">
                    <h3 className="title">{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-tools">
                      {project.tools.map((tool,index) => (
                        <div className="tool-box" key={index}>
                          <div className="tool">{tool}</div>
                        </div>
                      ))}
                    </div>

                    <div className="project-links">
                      <div className="github-link">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHub />
                           Github Link
                        </a>
                      </div>
                      <div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LaunchIcon />
                          Live link
                        </a>
                      </div>
                    </div>
                  </Col>
                </>
              ) : (
               
                <>
                  <Col className="project-description">
                    <h3 className="title">{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tools">
                      {project.tools.map((tool,index) => (
                        <div className="tool-box" key={index}>
                          <div className="tool">{tool}</div>
                        </div>
                      ))}
                    </div>
                    <div className="project-links">
                      <div className="github-link">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHub />
                          Github Link
                        </a>
                      </div>
                      <div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LaunchIcon />
                          Live link
                        </a>
                      </div>
                    </div>
                  </Col>

                  <Col className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: "400px", height: "350px" }}
                    />
                  </Col>
                </>
              )}
            </Row>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectCards;
