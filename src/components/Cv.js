import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

function Cv(props) {
  const { name, email, phoneNumber } = props.state;
  return (
    <Container>
      <h2>Basic Information</h2>
      <Row>
        <Col>
          <p>Name</p>
          <h4>{name}</h4>
        </Col>
        <Col>
          <p>Email address</p>
          <p>{email}</p>
        </Col>
        <Col>
          <p>Phone Number</p>
          <p>{phoneNumber}</p>
        </Col>
      </Row>
      <Button onClick={props.toggleEdit}>Edit</Button>
    </Container>
  );
}

export default Cv;
