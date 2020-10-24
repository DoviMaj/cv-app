import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import BasicInfo from "./Basic-info";
import { Form, Container, Button } from "react-bootstrap";

class MyForm extends React.Component {
  render() {
    const { name, email, phoneNumber, toggleEdit, handleChange } = this.props;
    return (
      <Container>
        <Form>
          <BasicInfo
            handleChange={handleChange}
            name={name}
            email={email}
            phoneNumber={phoneNumber}
          />
          <Education />
          <Experience />
          <Button onClick={toggleEdit} type="primary">
            Close
          </Button>
        </Form>
      </Container>
    );
  }
}

export default MyForm;
