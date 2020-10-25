import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import BasicInfo from "./Basic-info";
import { Container, Button } from "react-bootstrap";

class MyForm extends React.Component {
  render() {
    const { toggleEdit, handleChange, state } = this.props;
    return (
      <Container>
        <BasicInfo handleChange={handleChange} state={state} />
        <Education handleChange={handleChange} state={state} />
        <Experience handleChange={handleChange} state={state} />
        <Button onClick={toggleEdit} type="primary">
          Close
        </Button>
      </Container>
    );
  }
}

export default MyForm;
