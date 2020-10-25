import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";

class Experience extends React.Component {
  render() {
    return (
      <Container>
        <h2>Professional experience</h2>
        <Row>
          <Col>
            <Form.Group controlId="formBasicCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Enter company name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicPositionTitle">
              <Form.Label>Position Title</Form.Label>
              <Form.Control type="text" placeholder="Enter position title" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicJobTasks">
              <Form.Label>Main Tasks</Form.Label>
              <Form.Control type="text" placeholder="main tasks of your jobs" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="formBasicJobDate">
              <Form.Label>Start date</Form.Label>
              <Form.Control type="date" placeholder="Start of your job" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicJobDate">
              <Form.Label>End date</Form.Label>
              <Form.Control type="date" placeholder="End of your job" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Experience;
