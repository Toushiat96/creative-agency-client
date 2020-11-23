import React from "react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../../App";
import ReviewInformation from "../ReviewInformation/ReviewInformation";
import { Link } from 'react-router-dom';
const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:10000/getfeedback" )
      .then((response) => response.json())
      .then((data) => setReview(data));
  }, []);
  return (
  
    <div className="review mt-5">
  
      <div className="container">
        <h3 className="text-center font-weight-bold">
          {" "}
          Clients <span style={{ color: "#7AB259" }}> Feedback</span>{" "}
        </h3>
      </div>
      
      <div className="row mt-5">
        {
        review.map((reviews) => (
          <ReviewInformation reviews={reviews}></ReviewInformation>
        ))
        
        }
      </div>
      
    </div>
  
  );
};

export default Review;
