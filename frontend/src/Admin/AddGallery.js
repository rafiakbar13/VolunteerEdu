import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {Link} from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";



function AddGallery() {
  const [description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  const navigate = useNavigate();

  const saveGallery = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", Image);
    formData.append("description", description);
   try {
    const response = await axios.post(
      "https://go-volunteeredu.herokuapp.com/api/v1/gallery/add",formData,
      {
        
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    navigate("/gallery");
   } catch (error) {
    console.log(error);
   }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  return (
    <>
      <Container className="col-md-5 mx-auto mt-5">
       <Form onSubmit={saveGallery}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Description</Form.Label>
          <Form.Control 
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description" 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Images</Form.Label>
          <Form.Control
          type="file"
          name="image"
          id="imagefile"
          onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={saveGallery}>
          Save
        </Button>
        <Link to="/gallery" className="btn btn-warning ms-2" type="submit">
          Cancel
        </Link>
      </Form>
      </Container>
    </>
  );
}

export default AddGallery;