import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";




const Register = () => {

  return (
    <div>
      <h1 className="mt-5 text-center">Please Register </h1>
      <Form className="col-4 mx-auto ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            id="name"
            type="text"
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            id="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>
            Alladdy have an account ? <Link to="/login"> Sing in</Link>
          </p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register Now
        </Button>
      </Form>
    </div>
  );
}

export default Register;
