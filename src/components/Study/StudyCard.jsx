import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import { Link } from "react-router-dom";

const StudyCard = () => {
  return (
    <>
        <Container>
          <Container className="home-content">
            <div className="container d-flex justify-content-around flex-wrap">
              <div className="col-md-4 p-2 m-2 bg-secondary rounded-3 d-flex flex-column justify-content-center align-items-center">
                <img src={homeLogo} className="col-md-6 img-fluid" alt="" />
                <div className=" ">
                  <h5 className="">Web Development (Frontend)</h5>
                  <p className="text-center">
                    Price : <b>299/month (8 month)</b>
                  </p>
                </div>
                <Link to='/admission-form'>
                  <button className="btn btn-success">Take Admission</button>
                </Link>
              </div>
              <div className="col-md-4 p-2 m-2 bg-secondary rounded-3 d-flex flex-column justify-content-center align-items-center">
                <img src={homeLogo} className="col-md-6 img-fluid" alt="" />
                <div className=" ">
                  <h5 className="">Web Development (ReactJs + Laravel)</h5>
                  <p className="text-center">
                    Price : <b>399/month (8 month)</b>
                  </p>
                </div>
                <button className="btn btn-success">Take Admission</button>
              </div>
            </div>
          </Container>
        </Container>
    </>
  );
};

export default StudyCard;
