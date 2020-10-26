import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

function Education(props) {
  return (
    <div
      className="component"
      style={{
        background: "rgb(148 218 202)",
        color: "white",
        padding: "20px",
        marginBottom: " 10px",
      }}
    >
      {props.state.map((item) => {
        return (
          <Container className="ed-container" id={item.id} key={item.id}>
            <Row>
              <Col
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <h2>Education {item.id}</h2>
                <Button variant="success" onClick={props.removeEd}>
                  x
                </Button>
              </Col>
            </Row>

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
