import React, {useEffect, useState} from "react";
import { Row, Container, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function Gallerys() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])  
  
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('https://go-volunteeredu.herokuapp.com/api/v1/gallery/limit');
          setData(response.data);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
  
      fetchData();
    }, []);
      

    return (
        <div>
        {loading && <div>...</div>}
        {!loading && (
        <Container className="mt-5">
        <Row>
        {Array.isArray(data) ?     data.map((item) => (
          <Col key={item.id} xs={4} md={4}>
              <Card className="mt-5" style={{border: "transparent"}}>
                  <img src={require('../assets/gallery/' + item.image)}/>
              </Card>
          </Col>
        )) : null}
        </Row>
        </Container>
        )}
        </div>
    )
}