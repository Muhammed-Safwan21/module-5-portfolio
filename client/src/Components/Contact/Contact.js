import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "./contact.css";
import { ContextValue } from "../../App";


const ContactPage = () => {
  const { theme } = useContext(ContextValue);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container
      className={theme === false ? "contact-dark" : "contact-light"}
      id="contact"
    >
      <Row className="title">
        <h1><span>Get</span> in <span>touch</span></h1>
        <p>Feel free to connect with me!</p>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <div className="mt-5 content-section">
            <h3>Address</h3>
            <p> Kerala, India</p>
            <h3>Phone</h3>
            <p> +91 9645232115</p>
            <h3>Email</h3>
            <p id="email">muhammedksafwan@gmail.com</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="mt-2">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  value={message}
                  onChange={handleMessageChange}
                  rows={4}
                  required
                />
              </Form.Group>
              <Button variant="outline-info" type="submit" className="submit-button">
                Submit
              </Button>
            </Form>
            {showAlert && (
              <Alert
                variant="success"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                Message sent successfully!
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
