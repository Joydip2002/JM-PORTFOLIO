import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import 'aos/dist/aos.css'


function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <Tilt>
                <img src={laptopImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </div>
        <div data-aos="zoom-in-down" data-aos-delay="400">
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="400">
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </div>

        <Github />
      </Container>
    </Container >
  );
}

export default About;
