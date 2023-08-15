import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";


export const InputField = ({ label, controlId, error, ...props }) => {
    return (
      <FloatingLabel className="input-field" controlId={controlId} label={label}>
        <Form.Control {...props} className={error ? "is-invalid" : ""} />
        <div className="text-danger">{error}</div>
      </FloatingLabel>
    );
  };
  
 export const useForm = () => {
    const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleInput = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
  
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value),
      }));
    };
  
    const validateField = (name, value) => {
      switch (name) {
        case "username":
          return value.length < 4 ? "Username must have at least 4 characters" : "";
        case "email":
          return !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
            ? "Not a valid email"
            : "";
        case "password":
          return value.length < 8 ? "Password must have at least 8 characters" : "";
        case "confirmPassword":
          return values.password !== value ? "Password mismatch" : "";
        default:
          return "";
      }
    };
  
    const validate = () => {
      const newErrors = {};
      Object.keys(values).forEach((name) => {
        const value = values[name];
        newErrors[name] = validateField(name, value);
      });
  
      setErrors(newErrors);
      return Object.values(newErrors).every((error) => error === "");
    };
  
    return { values, handleInput, validate, errors };
  };
  

  
  export const useFormSignIn = () => {
    const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleInput = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
  
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value),
      }));
    };
  
    const validateField = (name, value) => {
      switch (name) {
        case "username":
          return value.length < 4 ? "Username must have at least 4 characters" : "";
        case "email":
          return !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
            ? "Not a valid email"
            : "";
        case "password":
          return value.length < 8 ? "Password must have at least 8 characters" : "";
        default:
          return "";
      }
    };
  
    const validate = () => {
      const newErrors = {};
      Object.keys(values).forEach((name) => {
        const value = values[name];
        newErrors[name] = validateField(name, value);
      });
  
      setErrors(newErrors);
      return Object.values(newErrors).every((error) => error === "");
    };
  
    return { values, handleInput, validate, errors };
  };
  