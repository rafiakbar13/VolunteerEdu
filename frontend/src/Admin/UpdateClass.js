import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {Link} from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate,useParams } from "react-router-dom";



function UpdateClass() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState("");
  const [detail, setDetail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();



  useEffect(() => {
    getClassById();
  }, []);

  const updateClass = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("place", place);
    formData.append("image", image);
    formData.append("detail", detail);

    try {
      await axios.patch(`http://localhost:8080/api/v1/class/update/${id}`, formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/class");
    } catch (err) {
      console.log(err);
    }
  }

  const getClassById = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/classes/${id}`);
      setTitle(res.data.data.title);
      setDate(res.data.data.date);
      setTime(res.data.data.time);
      setPlace(res.data.data.place);
      setImage(res.data.data.image);
      setDetail(res.data.data.detail);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }
  return (
    <>
      <Container className="col-md-5 mx-auto mt-4 mb-4">
       <Form onSubmit={updateClass}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Title</Form.Label>
          <Form.Control 
          type="text"
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title" 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Date</Form.Label>
          <Form.Control 
          type="date"
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          placeholder="Enter Date" 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Time</Form.Label>
          <Form.Control 
          type="time"
          value={time} 
           onChange={(e) => setTime(e.target.value)}
          placeholder="Enter Time" 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Place</Form.Label>
          <Form.Control 
          type="text"
          value={place} 
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter Place" 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Images</Form.Label>
          <Form.Control 
          type="file" 
          id="imagefile"
          onChange={handleImageChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Detail</Form.Label>
          <Form.Control 
          type="text"
          value={detail} 
          onChange={(e) => setDetail(e.target.value)}
          placeholder="Enter Detail" 
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={updateClass}>
          Save
        </Button>
        <Link to="/class" className="btn btn-warning ms-2" type="submit">
          Cancel
        </Link>
      </Form>
      </Container>
    </>
  );
}

export default UpdateClass;