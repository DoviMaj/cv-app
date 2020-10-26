import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

function Cv(props) {
  const { name, email, adress, phoneNumber } = props.state;

  return (
    <Container>
      <div className="cv">
        <Row>
          <h3>{name}</h3>
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
              <Row style={{ marginBottom: "20px" }}>
                <li>
                  {item.studyType} ({item.schoolName}), {item.studyStartDate} -{" "}
                  {item.studyEndDate}
                </li>
              </Row>
            </div>
          );
        })}
        <Row>
          <h4 style={{ textAlign: "left", paddingLeft: 0 }}>Work Experience</h4>
        </Row>
        {props.state.experience.map((item) => {
          return (
            <div key={item.id}>
              <Row>
                <li>
                  {item.companyName} - {item.jobStartDate} - {item.jobEndDate}
                </li>
              </Row>
              <Row>
                <p>{item.positionTitle}</p>
              </Row>
              <Row>
                <p style={{ maxWidth: "400px", textAlign: "left" }}>
                  {item.mainTasks}
                </p>
              </Row>
            </div>
          );
        })}
      </div>
      <Row>
        <Col>
          <Button
            className="edit-button"
            variant="success"
            onClick={props.toggleEdit}
          >
            Edit
          </Button>
        </Col>
        <Col>
          <Button
            className="print-button"
            variant="primary"
            onClick={() => {
              var divContents = document.querySelector(".cv").innerHTML;
              var printWindow = window.open("", "", "height=1200,width=1400");
              printWindow.document.write(
                "<html><head><title>Print DIV Content</title>"
              );
              printWindow.document.write(
                "</head><body style='padding: 60px;font-size: 18px; font-family: system-ui;'}>"
              );
              printWindow.document.write(divContents);
              printWindow.document.write("</body></html>");
              printWindow.document.close();
              printWindow.print();
            }}
          >
            Print
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cv;
