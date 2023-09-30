import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Card_outside(props) {
  let mystyle={
      img:{
        height:"200px",
        width:"200px",
        borderRadius:125,
      }
  }
  return (
    <div>
      <Card className="bg-light text-dark align-items-center" style={{ width: "18rem" }}>
        <Card.Img className="mt-3" variant="top" src={props.img} style={mystyle.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum
            fugit sequi. 
          </Card.Text>
          <Button variant="success">Search More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card_outside;
