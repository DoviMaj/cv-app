import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

function Cv(props) {
  const {
    name,
    email,
    adress,
    phoneNumber,
    companyName,
    positionTitle,
    mainTasks,
    jobStartDate,
    jobEndDate,
  } = props.state;

  return (
    <Container>
      <Row>
        <h5>{name}</h5>
      </Row>
      <Row>
        <p>{adress}</p>
      </Row>
      <Row>
        <p>{email}</p>
      </Row>
      <Row>
        <p>{phoneNumber}</p>
      </Row>
      <Row>
        <h4>Education</h4>
      </Row>
      {props.state.education.map((item) => {
        return (
          <div key={item.id}>
            <Row>
              <p>
                {item.studyType} ({item.schoolName}), {item.studyStartDate} -{" "}
                {item.studyEndDate}
              </p>
            </Row>
          </div>
        );
      })}

      <Row>
        <h4 style={{ textAlign: "left", paddingLeft: 0 }}>Work Experience</h4>
      </Row>

      <Row>
        <h6>
          {companyName} - {jobStartDate} - {jobEndDate}
        </h6>
      </Row>
      <Row>
        <p>{positionTitle}</p>
      </Row>
      <Row>
        <p style={{ maxWidth: "400px", textAlign: "left" }}>{mainTasks}</p>
      </Row>

      <Row>
        <Col>
          <Button variant="success" onClick={props.toggleEdit}>
            Edit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cv;
