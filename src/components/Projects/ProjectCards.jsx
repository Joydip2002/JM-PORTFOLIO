import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import 'aos/dist/aos.css'

function ProjectCards(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Tilt>
      <Card className="project-card-view">
        <div data-aos="fade-up" data-aos-duration={1500}>
          <div className="left"><span>{props.medium}</span></div>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
            <Button variant="primary" href={props.ghLink}>
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {"\n"}
            {"\n"}

            {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </Card.Body>
        </div>
      </Card >
    </Tilt>
  );
}
export default ProjectCards;
