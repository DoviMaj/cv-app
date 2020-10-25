import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";

function Education(props) {
  return (
    <div>
      {props.state.map((item) => {
        return (
          <Container className="ed-container" id={item.id} key={item.id}>
            <h2>Education {item.id}</h2>
            <Row>
              <Col>
                <Form.Label>School Name</Form.Label>
                <Form.Control
                  onChange={props.handleEdChange}
                  value={item.schoolName}
                  name="schoolName"
                  type="text"
                  placeholder="Enter school name"
                />
              </Col>
              <Col>
                <Form.Label>Study Type</Form.Label>
                <Form.Control
                  onChange={props.handleEdChange}
                  value={item.studyType}
                  name="studyType"
                  type="text"
                  placeholder="Enter study type"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Start of study</Form.Label>
                <Form.Control
                  onChange={props.handleEdChange}
                  value={item.studyStartDate}
                  name="studyStartDate"
                  type="date"
                />
              </Col>
              <Col>
                <Form.Label>End of study</Form.Label>
                <Form.Control
                  onChange={props.handleEdChange}
                  name="studyEndDate"
                  value={item.studyEndDate}
                  type="date"
                />
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
}

export default Education;
