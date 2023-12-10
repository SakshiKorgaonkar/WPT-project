import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LoginForm.css"; // Import your custom CSS file for additional styling
import server from "../server";
import {useNavigate} from 'react-router-dom';

const LoginForm = ({setIsAuthenticated}) => {
  const navigate = useNavigate();         //hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform authentication or any other logic here
    const formData = {email, password};
    server.post("/api/login",formData)
    .then((response) => {
      console.log(response.data);
      if(response.data.token !== undefined) {
        localStorage.setItem("token",response.data.token);
        setIsAuthenticated(true);
        navigate("/bookings");
      }else{
        alert("Incorrect email or password");
      }
      
    })
    .catch((error)=>{
      alert("Something went wrong! Please try again later.");
    })
  };

  return (
    <Container className="mt-5 ">
      <Form className="login-form ">
        <Form.Group controlId="formUsername">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="outline-danger" type="button" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
