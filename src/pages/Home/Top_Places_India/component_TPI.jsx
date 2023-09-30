import React from "react";
import Button from "react-bootstrap/Button";
import './TP_India.css'
function Component_TPI(props) {
  return (
    <div>
    <div className="Place-item text-center">
      <img src={props.img} alt="loading"/>
      <div className="PName" >{props.text}</div>
      <h6  className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicinetur quidem.</h6>
      <Button variant="success ">Search More</Button>
      </div>
    </div>
  );
}
export default Component_TPI;
