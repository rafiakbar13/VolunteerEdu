import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";


const ListGallery = () => {
  const [images, setImage] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const res = await axios.get("https://go-volunteeredu.herokuapp.com/api/v1/gallery");
    console.log(res.data.data);
    setImage(res.data.data);
  };

  const deleteImage = async (id) => {
    try {
      await axios.delete(`https://go-volunteeredu.herokuapp.com/api/v1/gallery/delete/${id}`);
      getImage();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
        <Link to="add"
          variant="primary"
          className="btn btn-primary"
          style={{ marginTop: 20, alignSelf: "flex-end" }}
        >
          + Add Gallery
        </Link>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Images</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(images) ? images.map((img, index) => (
            <tr key={img.gallery_id}>
              <td>{index + 1}</td>
              <td>{img.image}</td>
              <td>{img.description}</td>
              <td>
                <Link to={`update/${img.gallery_id}`} className="btn btn-info">
                  Update
                </Link>
                <button onClick={() => deleteImage(img.gallery_id)} className="btn btn-danger ms-2">Delete</button>
              </td>
            </tr>
          )) : null}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListGallery;
