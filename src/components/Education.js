import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";

class Education extends React.Component {
  render() {
    return (
      <Container>
        <h2>Education</h2>
        <Row>
          <Col>
            <Form.Group controlId="formBasicSchool">
              <Form.Label>School Name</Form.Label>
              <Form.Control type="text" placeholder="Enter school name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicStudyTitle">
              <Form.Label>Study Title</Form.Label>
              <Form.Control type="text" placeholder="Enter study title" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicStudyDate">
              <Form.Label>Start of study</Form.Label>
              <Form.Control type="date" placeholder="Enter study date" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicStudyDate">
              <Form.Label>End of study</Form.Label>
              <Form.Control type="date" placeholder="Enter study date" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Education;
