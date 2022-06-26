import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "../component/Hero";
import Schedules from "../component/Schedules";
import Gallerys from "../component/Gallerys";
import Founder from "../component/Founder";

export default function Home() {
  return (
    <>
        <Hero />
      <Container>
        <Row>
          <Col xs={6} md={6}>
            <h3
              style={{
                marginTop: "150px",
                fontWeight: "700",
                marginBottom: "50px",
              }}
            >
        <span style={{ color: "#408FC2" }}>OUR</span>
        <span style={{ color: "#22343D" }}>CLASS SCHEDULES</span>
            </h3>
          </Col>
          <Col xs={6} md={6}>
            <Link to="/Event">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{
                  fontWeight: "700",
                  marginTop: "140px",
                  float: "right",
                }}
              >
                LOAD MORE
              </button>
            </Link>
          </Col>
        </Row>
        <Schedules />
        <Row>
          <Col xs={6} md={6}>
            <h3 style={{ marginTop: "100px", fontWeight: "600" }}>
              <span style={{ color: "#22343D" }}>FROM OUR</span>
            <span style={{ color: "#408FC2" }}>GALLERY</span>
            </h3>
          </Col>
          <Col xs={6} md={6}>
            <Link to="/Gallery">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ fontWeight: "700", marginTop: "90px", float: "right" }}
              >
                LOAD MORE
              </button>
            </Link>
          </Col>
        </Row>
        <Gallerys />
        <h3
          style={{
            marginTop: "100px",
            fontWeight: "600",
            marginBottom: "50px",
          }}
        >
          FOUNDER
        </h3>
        <Founder />
      </Container>
    </>
  );
}
