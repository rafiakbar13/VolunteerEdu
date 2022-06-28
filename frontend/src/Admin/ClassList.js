import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import moment from 'moment';
const ListClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getClass();
  }, []);

  const getClass = async () => {
    const res = await axios.get("https://go-volunteeredu.herokuapp.com/api/v1/classes");
    setClasses(res.data.data);
  };

  const deleteClass = async (id) => {
    try {
      await axios.delete(`https://go-volunteeredu.herokuapp.com/api/v1/class/delete/${id}`);
      getClass();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Container>
        <Link
          to="add"
          variant="primary"
          className="btn btn-primary"
          style={{ marginTop: 20, marginLeft: 10, alignSelf: "flex-end" }}
        >
          + Add Class
        </Link>
      </Container>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Place</th>
            <th>Image</th>
            <th>Detail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
          Array.isArray(classes) ?
          classes.map((cls, index) => (
            <tr key={cls.class_id}>
              <td>{index + 1}</td>
              <td>{cls.title}</td>
              <td>{moment.utc(cls.date).format("MMMM-DD-YYYY")}</td>
              <td>{cls.time}</td>
              <td>{cls.place}</td>
              <td>{cls.image}</td>
              <td>{cls.detail}</td>
              <td>
                <Link to={`update/${cls.class_id}`} className="btn btn-info">
                  Update
                </Link>
                <button onClick={() => deleteClass(cls.class_id)}
                  className="btn btn-danger ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          )) : null}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListClass;