import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="mx-auto">
      <h1 className="mt-5">Please Login </h1>

      <Form className="mt-5 " style={{ width: "50%" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>
            Don't have any account. Go to <Link to="/register">Sing up</Link>
          </p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div className="mt-3 mb-5">
          <Button variant="dark" className="me-3">
            {" "}
            Google
          </Button>

          <Button variant="dark">GitHub</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;