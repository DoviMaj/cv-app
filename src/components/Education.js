import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";

class Education extends React.Component {
  render() {
    const {
      handleChange,
      schoolName,
      studyType,
      studyStartDate,
      studyEndDate,
    } = this.props;
    return (
      <Container>
        <h2>Education</h2>
        <Row>
          <Col>
            <Form.Label>School Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={schoolName}
              name="schoolName"
              type="text"
              placeholder="Enter school name"
            />
          </Col>
          <Col>
            <Form.Label>Study Title</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={studyType}
              name="studyType"
              type="text"
              placeholder="Enter study title"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Start of study</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={studyStartDate}
              name="studyStartDate"
              type="date"
              placeholder="Enter study date"
            />
          </Col>
          <Col>
            <Form.Label>End of study</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="studyEndDate"
              value={studyEndDate}
              type="date"
              placeholder="Enter study date"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Education;
