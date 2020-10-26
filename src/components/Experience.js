import React from "react";
import { Form, Container, Button, Col, Row } from "react-bootstrap";

function Experience(props) {
  const { handleExChange } = props;
  return (
    <div
      className="component"
      style={{ background: "#82add4", color: "white", marginTop: "20px" }}
    >
      {props.state.map((item) => {
        return (
          <Container className="ex-container" id={item.id} key={item.id}>
            <Row>
              <Col
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px",
                  gap: "20px",
                }}
              >
                <h2>Work experience {item.id}</h2>
                <Button variant="success" onClick={props.removeEx}>
                  x
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formBasicCompanyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    onChange={handleExChange}
                    name="companyName"
                    value={item.companyName}
                    type="text"
                    placeholder="Enter company name"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicPositionTitle">
                  <Form.Label>Position Title</Form.Label>
                  <Form.Control
                    onChange={handleExChange}
                    name="positionTitle"
                    value={item.positionTitle}
                    type="text"
                    placeholder="Enter position title"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicJobTasks">
                  <Form.Label>Main Tasks</Form.Label>
                  <Form.Control
                    onChange={handleExChange}
                    name="mainTasks"
                    value={item.mainTasks}
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
                    onChange={handleExChange}
                    name="jobStartDate"
                    value={item.jobStartDate}
                    type="date"
                    placeholder="Start of your job"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicJobDate">
                  <Form.Label>End date</Form.Label>
                  <Form.Control
                    onChange={handleExChange}
                    name="jobEndDate"
                    value={item.jobEndDate}
                    type="date"
                    placeholder="End of your job"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
}
export default Experience;
