import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";

class BasicInfo extends React.Component {
  render() {
    const { name, email, phoneNumber, handleChange } = this.props;
    return (
      <Container>
        <h2>Basic Information</h2>
        <Row>
          <Col>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={name}
                onChange={handleChange}
                type="text"
                placeholder="Enter full name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                onChange={handleChange}
                value={email}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phoneNumber"
                onChange={handleChange}
                value={phoneNumber}
                type="text"
                pattern="^[0-9]+$"
                placeholder="Enter phone number"
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BasicInfo;
