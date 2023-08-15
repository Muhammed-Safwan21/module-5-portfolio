import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import { ContextValue } from "../../App";

const Skills = () => {
  const { theme } = useContext(ContextValue);
  return (
    <Container
      fluid
      className={theme === false ? "skill-dark" : "skill-light"}
      id="skills"
    >
      <Row>
        <Col className="title-column">
          <h1>Skills &amp; <span>Tools</span></h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div className="skills-list">
            <div className="skill-item">
              <img src="./Images/js.svg" alt="" className="skill-icon" />
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill-item">
              <img src="./Images/react.svg" alt="" className="skill-icon" />
              <span className="skill-name">React JS</span>
            </div>
            <div className="skill-item">
              <img src="./Images/nodejs.svg" alt="" className="skill-icon" />
              <span className="skill-name">Node JS</span>
            </div>
            <div className="skill-item">
              <img src="./Images/mongodb.svg" alt="" className="skill-icon" />
              <span className="skill-name">MongoDB</span>
            </div>

            <div className="skill-item">
              <img src="./Images/html5.svg" alt="" className="skill-icon" />
              <span className="skill-name">HTML 5</span>
            </div>
            <div className="skill-item">
              <img src="./Images/css.svg" alt="" className="skill-icon" />
              <span className="skill-name">CSS 3</span>
            </div>
            <div className="skill-item">
              <img
                src="./Images/gitHub.svg"
                alt=""
                className="skill-icon"
                id="github-icon"
              />
              <span className="skill-name">GitHib</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
