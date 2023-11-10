import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rps from '../../Assets/Projects/rps.png'
import attender from '../../Assets/Projects/attender.png'
import hexashop from '../../Assets/Projects/hexashop.png'
import fportfolio from '../../Assets/Projects/fportfolio.png'
import todolist from '../../Assets/Projects/todolist.png'
import bmi from '../../Assets/Projects/bmi.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rps}
              isBlog={false}
              title="Rock-Paper-Scissors"
              description="Rock Paper Scissors build with react.js, Vite. It's a game for fun on your free time."
              ghLink="https://github.com/Joydip2002/Rock-Paper-Scissors"
              demoLink=""
              medium = 'Easy'
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attender}
              isBlog={false}
              title="Attender"
              description="This project useful for Attendence Management. This project have three section (i)Admin Panel (ii)Student Panel  and (iii)Teacher Panel. It's Build with Laravel and jQuery."
              ghLink="https://github.com/Joydip2002/Attender"
              demoLink=""
              medium = 'Hard'
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hexashop}
              isBlog={false}
              title="HEXASHOP"
              description="This is a shooping app build on Laravel for backend and ReactJs for Frontend"
              ghLink="https://github.com/Joydip2002/HexShopApp"
              demoLink=""
              medium = 'Hard'
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fportfolio}
              isBlog={false}
              title="Portfolio"
              description="This is First Portfolio build on HTML,CSS,JS"
              ghLink="https://github.com/Joydip2002/portfolio"
              demoLink="https://joydipportfolio.netlify.app/html/"
              medium = 'Medium'
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="TodoList"
              description="TodoList build on ReactJs,Vite"
              ghLink="https://github.com/Joydip2002/React-Vite-TodoList"
              demoLink="https://todolistjoydip.netlify.app/"
              medium = 'Easy'
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmi}
              isBlog={false}
              title="BMI CALCULATOR"
              description="Free Body Mass Index calculator gives out the BMI value and categorizes BMI based on provided information from WHO and CDC for both adults and children."
              ghLink="https://github.com/Joydip2002/BMI_CALCULATOR"
              demoLink=""
              medium = 'Easy'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
