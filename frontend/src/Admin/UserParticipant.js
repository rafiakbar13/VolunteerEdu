import React, { useEffect, useState } from "react";
import {
  Container,
  Table
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import Userlist from "../Admin/Userlist";

export default function UserParticipant() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const {data: response} = await axios.get('http://localhost:8080/api/v1/participate');
            setData(response.data);
            console.log(response.data)
          } catch (error) {
            console.error(error.message);
          }
        };
        fetchData();
      }, []);

    return (
        <Container>
           <Userlist/>
        <h3 className="mt-5 mb-5 fw-bold">List User Participant</h3>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Name</th>
            <th>Detail</th>
            <th>Title</th>
            </tr>
        </thead>
        <tbody>
        {
        Array.isArray(data) ?
        data.map((item) => (
            <tr>
            <td>{item.full_name}</td>
            <td>{item.detail}</td>
            <td>{item.title}</td>
            </tr>
        )): null}
        </tbody>
        </Table>
        </Container>
    )
}