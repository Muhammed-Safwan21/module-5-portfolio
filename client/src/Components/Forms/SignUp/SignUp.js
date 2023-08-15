import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { InputField, useForm } from "../FormUtils";
import axios from "axios";
import "./SingnUp.css";

function SignUp() {
  const { values, handleInput, validate, errors } = useForm();
  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      if (validate()) {
        const response = await axios.post(
          "http://localhost:4000/auth/register",
          {
            username: values.username,
            email: values.email,
            password: values.password,
          },
          { withCredentials: true }
        );
        console.log(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (

    <Form className="form-container" onSubmit={submitForm} >
      <h3 className="main-title">SIGN UP</h3>
      <InputField
        controlId="floatingUsername"
        label="Username"
        type="text"
        name="username"
        placeholder="username"
        required
        value={values.username}
        onChange={handleInput}
        error={errors.username}
      />

      <InputField
        controlId="floatingEmail"
        label="Email address"
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={values.email}
        onChange={handleInput}
        error={errors.email}
      />

      <InputField
        controlId="floatingPassword"
        label="Password"
        type="password"
        name="password"
        placeholder="Password"
        required
        value={values.password}
        onChange={handleInput}
        error={errors.password}
      />

      <InputField
        controlId="floatingConfirmPassword"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        value={values.confirmPassword}
        onChange={handleInput}
        error={errors.confirmPassword}
      />

      <Button type="submit" variant="info" className="sign-up-button">
        SIGN UP
      </Button>
      <div className="login-link">
       Already have an account? <Link to="/login">Sign In</Link>
      </div>
    </Form>
  
  );
}

export default SignUp;
