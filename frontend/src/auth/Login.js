import React, {useState, useEffect} from "react";
import axios from "axios";
import { Row, Container, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';
import swal from 'sweetalert';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://go-volunteeredu.herokuapp.com/api/v1/users/login', {
                email: email,
                password: password
            }).then(res => {
                window.location.href = "/"
                navigate('/');
        })
        } catch (error) {
            swal({
                title: "Error",
                text: "Email / Password is incorrect!",
                icon: "error",
                buttons: false,
                timer: 1000,
              });
        }
    }
    
    return (
    <Container className="mt-5" style={{
        background: "linear-gradient(#e66465, #9198e5);",
        background: "Linear-gradient(to right, #78ffd6, #a8ff78);" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
         }}>
        <Row>
            <Col xs={6} md={6}>
                <img src="https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?b=1&k=20&m=1281150061&s=612x612&w=0&h=Wlus0AvwwVksa9X5w1RUyp1pu8_vbpVOdw25FLBEG_s="/>
            </Col>
            <Col xs={1} md={1}></Col>
            <Col xs={5} md={5}>
            <Form style={{marginTop: "100px"}} onSubmit={Auth}>
                <h1 className="fw-bold mb-5">Login</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control className="p-3" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mt-4" controlId="formBasicPassword">
                    <Form.Control className="p-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <div className="d-grid gap-2 mt-5">
                <Button className="login-btn p-3" type="submit" size="lg">
                    LOGIN
                </Button>
                </div>
            </Form>
            <h6 className="text-center mt-3">don't have an account yet ? <Link to="/Signup">Sign up</Link></h6>
            </Col>
        </Row>
    </Container>
    )
}