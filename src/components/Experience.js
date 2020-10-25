import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";

class Experience extends React.Component {
  render() {
    const {
      companyName,
      positionTitle,
      mainTasks,
      jobStartDate,
      jobEndDate,
    } = this.props.state;
    const { handleChange } = this.props;
    return (
      <Container>
        <h2>Professional experience</h2>
        <Row>
          <Col>
            <Form.Group controlId="formBasicCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="companyName"
                value={companyName}
                type="text"
                placeholder="Enter company name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicPositionTitle">
              <Form.Label>Position Title</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="positionTitle"
                value={positionTitle}
                type="text"
                placeholder="Enter position title"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicJobTasks">
              <Form.Label>Main Tasks</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="mainTasks"
                value={mainTasks}
                type="text"
                placeholder="main tasks of your jobs"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="formBasicJobDate">
              <Form.Label>Start date</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="jobStartDate"
                value={jobStartDate}
                type="date"
                placeholder="Start of your job"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicJobDate">
              <Form.Label>End date</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="jobEndDate"
                value={jobEndDate}
                type="date"
                placeholder="End of your job"
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Experience;
