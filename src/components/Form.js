import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import BasicInfo from "./Basic-info";
import { Container, Button } from "react-bootstrap";

class MyForm extends React.Component {
  render() {
    const {
      name,
      email,
      phoneNumber,
      toggleEdit,
      handleChange,
      schoolName,
      studyType,
      studyStartDate,
      studyEndDate,
    } = this.props;
    return (
      <Container>
        <BasicInfo
          handleChange={handleChange}
          name={name}
          email={email}
          phoneNumber={phoneNumber}
        />
        <Education
          handleChange={handleChange}
          schoolName={schoolName}
          studyType={studyType}
          studyStartDate={studyStartDate}
          studyEndDate={studyEndDate}
        />
        <Experience />
        <Button onClick={toggleEdit} type="primary">
          Close
        </Button>
      </Container>
    );
  }
}

export default MyForm;
