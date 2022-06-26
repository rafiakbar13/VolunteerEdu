import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Row,
  Container,
  Col,
  Card,
  Button,
  Stack,
  Modal,
} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from 'sweetalert';

export default function MyActivity() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userid = localStorage.getItem("userId");
        const response = await axios.get(
          "http://localhost:8080/api/v1/myactivity/" + userid
        );
        setData(response.data.data);
      } catch (error) {
        swal({
          title: "Info",
          text: "Anda belum mempunyai aktivitas",
          icon: "info",
          buttons: false,
          timer: 3000,
        });
        navigate('/Event');
      }
    };
    fetchData();
  }, []);

  return (
    <Container style={{ marginTop: "80px" }}>
      <h3
        className="text-uppercase fw-bold our-class-schedules"
        style={{ marginBottom: "50px" }}
      >
        <span style={{ color: "#22343D" }}>MY </span>
        <span style={{ color: "#408FC2" }}>Activities</span>
      </h3>
      <Row>
        {data.map((item) => (
          <>
            <Col xs={4} md={4}>
              <Card className="mb-3" style={{ border: "transparent" }}>
                <img
                  src={require("../assets/" + item.image)}
                  className="card-img-top"
                />
                <h5 className="mt-3" style={{ fontWeight: "bold" }}>
                  {item.title}
                  <span style={{ float: "right" }}>{item.detail}</span>
                </h5>
                <Card.Text
                  className="mt-1 mb-5"
                  style={{ border: "transparent" }}
                >
                  <FaCalendarAlt />
                  <span style={{ verticalAlign: "middle" }}>
                    {" "}
                    {moment.utc(item.date).format("MMMM DD, YYYY")}
                  </span>
                  <FaClock className="ms-3" />
                  <span style={{ verticalAlign: "bottom" }}>
                    {" "}
                    {item.time} WIB
                  </span>
                  <FaMapMarkerAlt className="ms-3" />
                  <span style={{ verticalAlign: "bottom" }}> {item.place}</span>
                </Card.Text>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}
