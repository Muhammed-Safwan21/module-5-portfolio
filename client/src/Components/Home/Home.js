import React, { useContext } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import { GitHub, Email, LinkedIn } from "@mui/icons-material";
import "./Home.css";
import TypeWriterEffect from "react-typewriter-effect";
import { ContextValue } from "../../App";


function Home() {
  const { theme } = useContext(ContextValue);
  return (
    <Container
      className={theme === false ? "home-dark" : "home-light"}
      id="home"
    >
      <Row>
        <Col md={6} className="text-column">
          <div className="text-content">
            <h2><span>Hi </span>there..!</h2>
            <h1>
              I'm Muhammed Safwan
            </h1>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: theme === false ? 'cyan' : '#3a0ca3',
                fontWeight: 700,
                fontSize: "1.7em",
              }}
              startDelay={2000}
              cursorColor="#3F3D56"
              multiText={[
                "Full Stack Developer",
                "Freelancer",
                "Open Source Contributer",
                "Mern Stack Developer",
              ]}
            
              nextTextDelay={1000}
              typeSpeed={50}
              loop={true}
            />

            <div className="icons">
              <a href="https://github.com/Muhammed-Safwan21">
                <GitHub className="icon" />
              </a>
              <a href="https://mail.google.com/mail" target="_blank"
              rel="noopener noreferrer">
                <Email className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/muhammed-safwan-k-9abb36216/" target="_blank"
              rel="noopener noreferrer">
                <LinkedIn className="icon" />
              </a>
            </div>
            <p>
              I'm passionate about creating elegant and efficient solutions to
              complex problems, and I'm always looking to learn new things and
              take on new challenges.
            </p>
            <a
              href={ process.env.PUBLIC_URL + "/resume.pdf"}
              target="_blank"
              download=''
              // href={CV}
              rel="noopener noreferrer"
            >
              <Button className="resume-btn" variant="outline-info">Resume</Button>

            </a>
           
          </div>
        </Col>
        <Col md={6} className="image-column">
          <img className="hero-image" alt="hero" src= "./Images/mypic.jpg" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
