import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Img_Place from "./Img_Place";

function Intro(prop) {
  return (
    <div>
      <div>
        <div className="fs-1 fw-bolder"> {prop.area}</div>
        <div>{prop.definition}</div>
        <Container>
          <Row>
            <Col>{prop.img1}</Col>
            <Col>{prop.img2}</Col>
            <Col>{prop.img3}</Col>
            <Col>{prop.img4}</Col>
            <Col>{prop.img5}</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Intro;
