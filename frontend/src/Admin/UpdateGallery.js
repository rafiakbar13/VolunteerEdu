import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {Link} from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";

function UpdateGallery() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();



useEffect(() => {
  getGalleryById();
}, []);

  const updateGallery = async (e) => {
    e.preventDefault();
   const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);
    try {
      await axios.patch(`http://localhost:8080/api/v1/gallery/update/${id}`, formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/gallery");
    }catch(err){
      console.log(err);
    }
  };

  const getGalleryById = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/v1/gallery/${id}`)
      setImage(response.data.data.image);
      setDescription(response.data.data.description)
      // console.log(response.data.data.description);
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  return (
    <>
      <Container className="col-md-5 mx-auto mt-5">
       <Form  onSubmit={updateGallery}>
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
          // formEncType="multipart/form-data" 
          type="file"
          id="imagefile"  
          onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={updateGallery}>
          Update
        </Button>
        <Link to="/gallery" className="btn btn-warning ms-2" type="submit">
          Cancel
        </Link>
      </Form>
      </Container>
    </>
  );
}

export default UpdateGallery;