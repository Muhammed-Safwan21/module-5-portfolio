import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useFormSignIn, InputField } from "../FormUtils";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

function SignIn() {
  const { values, handleInput, validate, errors } = useFormSignIn();
  const [cookies, setCookie] = useCookies([]);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    if (validate()) {
      try {
        // Send data to backend API endpoint
        const { data } = await axios.post(
          "http://localhost:4000/auth/login",    // Use your actual backend URL
          {
            username: values.username,
            password: values.password,
          }
        );

        // Set the token in cookies
        setCookie("token", data.token, { path: "/" });

        // Redirect to home page
        navigate('/');
      }  catch (error) {
        if (error.response && error.response.status === 401) {
          setLoginError("Incorrect username or password."); // Set the login error message
        } else {
          console.error("Error logging data:", error);
        }
      }
    }
  };

  return (
    <Form className="form-container1" onSubmit={submitForm}>
      <h3 className="main-title">SIGN IN</h3>
      {loginError && <div className="error-message">{loginError}</div>}
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
      <Button type="submit" variant="info" className="signIn-button">
          SIGN IN
      </Button>
      <div className="links-container">
        <a className="forgot-password-link" href="#">Forgot Password ?</a>
        <Link to="/register" className="forgot-password-link">
          Sign Up
        </Link>
      </div>
      </Form>
    
    
  );
}

export default SignIn;
