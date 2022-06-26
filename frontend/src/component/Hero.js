import React from "react";
import { Row, Col, Button, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";
import { HiArrowSmRight } from "react-icons/hi";
const Hero = () => {
  return (
    <>
    <div className="p-5" style={{backgroundColor:"#F1F2FB", width:"100%"}}>
      <Row>
        <Col className="ms-5">
          <h1 className="" style={{ fontWeight: "700", marginTop: "50px", fontSize: "50px" }}>
            Volunteer
            <span className="text-primary">Edu</span>
          </h1>
          <p className="text-start fs-4" style={{fontWeight: "400"}}>
            VolunteerEdu adalah sebuah platform pendidikan yang mengadakan kelas
            pembelajaran secara offline kepada anak-anak maupun orang tua di
            daerah-daerah Indonesia.
          </p>
          <div className="mt-5 ">
          {!localStorage ?
          <Link to="/Signup"><Button className="button fs-6 p-3 rounded-pill col-6 mx-auto" type="submit" size="md" style={{fontWeight: "400" ,backgroundColor:"#3236FD"}}>
              JOIN US TODAY <HiArrowSmRight className="fs-4"/>
            </Button>
          </Link>
          :
          <Link to="/Event"><Button className="button fs-6 p-3 rounded-pill col-6 mx-auto" type="submit" size="md" style={{fontWeight: "400" ,backgroundColor:"#3236FD"}}>
          JOIN US TODAY <HiArrowSmRight className="fs-4"/>
          </Button>
          </Link>
          }
          </div>
        </Col>
        <Col>
          <img src="https://i.ibb.co/Y8ZQDY2/image-9.png" alt="Hero" className="ms-5" />
        </Col>
      </Row>
    </div>
    </>
  );
};

export default Hero;
