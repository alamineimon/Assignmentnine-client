import React, { useContext }  from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";




const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn, setUser } = useContext(AuthContext);
  const {error, setError} = useState()


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        setUser(user)
        setError("")
        console.log(user);
      })
      .catch((error) => {
        console.log("error:", error);
        setError(error.message)
        console.log(error);
      });
  };

  return (
    <div className="col-4 mx-auto ">
      <h1 className="mt-5 text-center">Please Login </h1>

      <Form onSubmit={handleSubmit} className="mt-5 ">
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
        <Form.Text className="text-danger mb-5">{error}</Form.Text>
      </Form>
    </div>
  );
};;

export default Login;
