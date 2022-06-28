import { Container, Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RiAlertFill } from "react-icons/ri";
import swal from "sweetalert";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ setFullname] = useState("");
  const [setemail] = useState("");
  const [ setlahir] = useState("");
  const [ setpassword] = useState("");
  const [ setphone] = useState("");
  const [ setaddress] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  const onSubmit = data => {
    axios.post("https://go-volunteeredu.herokuapp.com/api/v1/users/regist", data)
      .then(res => {
        if(res.status === 200){
          console.log(res.data);
          swal({
            title: "Success",
            text: "Register Success",
            icon: "success",
            buttons: false,
            timer: 5000,
          });
          navigate("/Login");
        }
      })
      .catch(err => {
        if(err.response.status === 400){
          setAlert(err.response.data.message);
        }
        setTimeout(() => {
          setAlert("");
        } , 5000);
      });
    }
  
  return (
    <>
      <Container className="col-md-4 mx-auto" style={{marginTop:"90px"}}>
        <Card className="shadow align-middle">
          <Card.Body className="text-start">
            <Form onSubmit={handleSubmit(onSubmit)}>
            {alert && <div className="alert alert-danger">{alert}</div>}
              <h4 className="mb-4 text-center" style={{color:"#646FD4"}}>Create Account</h4>
              <Form.Group className="mb-4">
                <input 
                type="text" 
                className="form-control mb-2"
               
                placeholder="Full Name"
                {...register("full_name", { 
                  required: true,
                  pattern: /^[a-zA-Z ]+$/,
                  })}
                />
                {errors.full_name?.type === "pattern" && <span className="text-danger"><RiAlertFill/> This field required only a-zA-Z</span>}
                {errors.full_name?.type === "required" && <span className="text-danger"><RiAlertFill/> This field required</span>}
                
              </Form.Group>

              <Form.Group className="mb-4">
                <input
                type="email"
                className="form-control mb-2"
                placeholder="Email address" 
                {...register("email", {
                  required: true,
                  pattern:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                })}
                />
                {errors.email?.type === "pattern" && <span className="text-danger"><RiAlertFill/> Email missing @</span>}
                {errors.email?.type === "required" && <span className="text-danger"><RiAlertFill/> This field required</span>}
                
              </Form.Group>
              <Form.Group className="mb-4">
                <input 
                type="date"
                className="form-control mb-2"
                {...register("date_birth", {
                  required: true,
                })} 
                />
                {errors.date_birth?.type === "required" && <span className="text-danger"><RiAlertFill/> This field required</span>}
              </Form.Group>

              <Form.Group className="mb-4">
                <input 
                type="password"
                className="form-control mb-2" 
                placeholder="Password" 
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
                />
                {errors.password?.type === "required" && <span className="text-danger"><RiAlertFill/> This field required</span>}
                {errors.password?.type === "minLength" && <span className="text-danger"><RiAlertFill/> This field required 8 character</span>}
                {errors.password?.type === "maxLength" && <span className="text-danger"><RiAlertFill/> This field required 20 character</span>}
              </Form.Group>



              <Form.Group className="mb-4">
                <input 
                type="text" 
                className="form-control mb-2"
                placeholder="Phone Number" 
                {...register("phone", {
                  required: true,
                  // pattern:/^(\+62|62|0)8[1-9][0-9]{6,9}$/,
                  minLength: 10,
                  maxLength: 13,
                })}
                />
                {/* {errors.phone?.type === "pattern" && <span className="text-danger"><RiAlertFill/> Phone Number must be at least 10 digits</span>} */}
                {errors.phone?.type === "minLength" && <span className="text-danger"><RiAlertFill/> Phone Number must be at least 10 digits</span>}
                {errors.phone?.type === "maxLength" && <span className="text-danger"><RiAlertFill/> Phone Number must be at least 13 digits</span>}
                {errors.phone?.type === "required" && <span className="text-danger"><RiAlertFill/> This field required</span>}
              </Form.Group>

              

              <Form.Group className="mb-4 mb-2">
                <input 
                type="text"
                className="form-control" 
                placeholder="Enter Address" 
                {...register("address", {
                  required: true,
                })}
                />
                {errors.address?.type === "required" && <span className="text-danger"><RiAlertFill/> This field required</span>}
              </Form.Group>
              <div className="d-grid" >
              <Button style={{background: "linear-gradient(30deg,#00FFAB,#B8F1B0)",borderStyle:"none"}} className="text-white shadow"size="lg" type="submit">
                Create Account
              </Button>
              </div>
            </Form>
          </Card.Body>
              <p className="text-end me-2">
                Already have an account? <Link to="/Login">Sign In</Link>
              </p>
        </Card>
      </Container>
    </>
  );
};

export default Signup;
