import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
    return (
      <div>
        <Form  className="col-4 mx-auto ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="name" id="name" type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control  name="email" id="email"  type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control  name="password" id="password" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <p>
              Alladdy have an account ? <Link to="/login"> Sing in</Link>
            </p>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <div className="mt-3 mb-5">
            <Button variant="dark" className="me-3">
              Google siign in
            </Button>

            <Button variant="dark"> GitHub</Button>
          </div>
        </Form>
      </div>
    );
}

export default Register;
