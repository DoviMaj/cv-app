import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import BasicInfo from "./Basic-info";
import { Container, Button, Row, Col } from "react-bootstrap";

class MyForm extends React.Component {
  render() {
    const {
      toggleEdit,
      handleChange,
      addEducation,
      handleEdChange,
      handleExChange,
      removeEx,
      addExperience,
      removeEd,
      state,
    } = this.props;
    return (
      <Container>
        <BasicInfo handleChange={handleChange} state={state} />
        <Education
          removeEd={removeEd}
          handleEdChange={handleEdChange}
          state={state.education}
        />
        <Row>
          <Col lg={2}>
            <Button onClick={addEducation}>Add Education</Button>
          </Col>
        </Row>
        <Experience
          removeEx={removeEx}
          handleExChange={handleExChange}
          state={state.experience}
        />
        <Row>
          <Col lg={2}>
            <Button onClick={addExperience}>Add Experience</Button>
          </Col>
        </Row>
        <Button
          style={{ marginTop: "20px" }}
          onClick={toggleEdit}
          type="primary"
        >
          Close
        </Button>
      </Container>
    );
  }
}

export default MyForm;
