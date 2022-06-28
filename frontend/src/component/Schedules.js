import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate} from 'react-router-dom';
import axios from "axios";
import moment from 'moment';
import swal from 'sweetalert';

export default function Schedules() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://go-volunteeredu.herokuapp.com/api/v1/class/limit"
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  async function handleSubmitParticipant(class_id) {
    const chooseRole = {
      user_id: parseInt(localStorage.getItem('userId')),
      class_id: class_id,
      role_act_id: 1
    };
    axios.post("https://go-volunteeredu.herokuapp.com/api/v1/chooserole", chooseRole)
    .then(res => {
    if(res.status === 200) {
      swal({
        title: "Berhasil",
        text: "Berhasil Mendaftar Sebagai Participant",
        icon: "success",
        buttons: false,
        timer: 2000,
      });
      navigate('/MyActivity')
    }
    }).catch(error => {
      if(error.response.status === 400) {
        swal({
          title: "Gagal",
          text: "Anda sudah terdaftar",
          icon: "error",
          buttons: false,
          timer: 2000,
        });
      } else {
      navigate('/Event')
      }
    })
  }

  async function handleSubmitVolunteer(class_id){
      const chooseRole = {
        user_id: parseInt(localStorage.getItem('userId')),
        class_id: class_id,
        role_act_id: 2
      };
      axios.post("https://go-volunteeredu.herokuapp.com/api/v1/chooserole", chooseRole)
      .then(res => {
        swal({
          title: "Berhasil",
          text: "Berhasil Mendaftar Sebagai Volunteer",
          icon: "success",
          buttons: false,
          timer: 2000,
        });
        navigate('/MyActivity')
      }).catch(error => {
        if(error.response.status === 400) {
          swal({
            title: "Gagal",
            text: "Anda sudah terdaftar",
            icon: "error",
            buttons: false,
            timer: 2000,
          });
        } else {
        navigate('/Login')
        }
      })
    }
  
  return (
    <div className="container mt-5">
      <div className="row">
        {
        Array.isArray(data) ?
        data.map((item) => (
          <>
            <div className="col-md-4">
              <div
                key={item.class_id}
                className="card"
                style={{ marginBottom: "40px", border: "transparent" }}
                data-bs-toggle="modal"
                data-bs-target={"#modal" + item.class_id}
              >
                <img
                  src={require("../assets/" + item.image)}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "700" }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text className="mt-3">
                    <FaCalendarAlt />
                    <span style={{ verticalAlign: "middle" }}>
                      {" "}
                      {moment.utc(item.date).format("MMMM DD YYYY")}
                    </span>
                  </Card.Text>
                  <Card.Text>
                    <FaClock />
                    <span style={{ verticalAlign: "bottom" }}>
                      {" "}
                      {item.time} WIB
                    </span>
                  </Card.Text>
                  <Card.Text>
                    <FaMapMarkerAlt />
                    <span style={{ verticalAlign: "bottom" }}>
                      {" "}
                      {item.place}
                    </span>
                  </Card.Text>
                </Card.Body>
                <Stack gap={2}>
                  <Button
                    size="lg"
                    style={{
                      marginTop: "20px",
                      fontWeight: "700",
                      backgroundColor: "#408FC2!important",
                    }}
                  >
                    JOIN
                  </Button>
                </Stack>
              </div>
            </div>
            <div
              className="modal fade"
              id={"modal" + item.class_id}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <Card style={{ border: "transparent" }}>
                      <img
                        src={require("../assets/" + item.image)}
                        className="card-img-top"
                      />
                      <Card.Body>
                        <h3 className="mt-3" style={{ fontWeight: "bold" }}>
                          {item.title}
                        </h3>
                        <Card.Text
                          className="mt-3"
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
                          <span style={{ verticalAlign: "bottom" }}>
                            {" "}
                            {item.place}
                          </span>
                        </Card.Text>
                        <Card.Text
                          style={{ textAlign: "justify", marginBottom: "40px" }}
                        >
                          {item.detail}
                        </Card.Text>
                        <Row>
                          <Col xs={6} md={6}>
                            <div className="d-grid gap-2">
                              <Button
                               type="submit"
                               variant="primary" size="lg" value={item.class_id}
                               id="participant"
                               data-bs-toggle="modal"
                               data-bs-target={"#modal" + item.class_id}
                               onClick={ () => handleSubmitParticipant(item.class_id)}
                                >
                                PARTICIPANT
                              </Button>
                            </div>
                          </Col>
                          <Col xs={6} md={6}>
                            <div className="d-grid gap-2">
                              <Button
                                type="submit"
                                variant="outline-primary" size="lg" value={item.class_id}
                                id="volunteer"
                                style={{ float: "right" }}
                                data-bs-toggle="modal"
                                data-bs-target={"#modal" + item.class_id}
                                onClick={ () => handleSubmitVolunteer(item.class_id)}
                              >
                                VOLUNTEER
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </>
        )) : null}
      </div>
    </div>
  );
}
