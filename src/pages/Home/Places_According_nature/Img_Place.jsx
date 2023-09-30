import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function Img_Place(props) {
  const now = 60;

  // if(now <= 40){
  //    const Variant="danger"
  // }
  // else if(now>40 && now<=70){
  //    const Variant="Warning"
  // }
  // else{
  //    const Variant="success"
  // }

  return (
    <div>
      <a href={props.link} className="text-decoration-none align-items-center text-center">
        <img
          src={props.image}
          alt="Picture Not Uploaded"
          className="mt-3"
          style={{
            height: "100px",
            width: "100px",
            borderRadius: 50,
          }}
        />
        <h5 className="ms-0 text-center text-dark">{props.name}</h5>
      </a>
      {/* <h6>Reviews</h6>
      
    <ProgressBar variant={Variant} now={now}
      
     label={`${now}%`} />; */}
    </div>
  );
}

export default Img_Place;
