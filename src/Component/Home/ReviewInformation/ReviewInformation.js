import React from "react";
import photo from "../../../images/customer-2.png";
import { Col } from 'reactstrap';
const ReviewInformation = (props) => {
  const { name, designation, description } = props.reviews;
  return (
    // <div className="col-md-4 text-center service">
<Col md="4" className="text-center service" >
      <img
        className="img-fluid mb-3"
        src={photo}
        style={{ width: "90px" }}
        alt=""
      />
      <h5>{name}</h5>
      <h6>{designation}</h6>
      <p> {description}</p>
      </Col>
    // </div>
  );
};

export default ReviewInformation;

