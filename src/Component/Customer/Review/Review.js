import React, { useContext, useState } from "react";
import logo from "../../../images/logos/logo.png";
import Sidebar from "../Sidebar/Sidebar";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import { Link, useHistory } from "react-router-dom";

const Review = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const [data, setData] = useState({});
  console.log(data)
  const handleBlur = (e) => {
    const newInfo = { ...data };
    newInfo[e.target.name] = e.target.value;
    setData(newInfo);
  };
  console.log(loggedInUser);
  const handleRegister = () => {
    const reviewDetails = { ...loggedInUser, ...data };
    fetch("http://localhost:10000/addreview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewDetails),
    });
    console.log(reviewDetails);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-3 mb-5">
          <div className="mb-5">
          <Link to="/home">
            <img src={logo} className="img-fluid w-50" alt="" />
            </Link>
          </div>
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 mt-5">
          <h1>Review Your Course</h1>
          <Form>
            <div className="form-group">
              <input
                className="form-control  form-control-lg"
                value={loggedInUser.name}
                type="text"
                name="name"
                placeholder="Your name / company's name"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control  form-control-lg"
                value={loggedInUser.email}
                type="email"
                name="email"
                placeholder="Your email address"
              />
            </div>

            <div className="form-group">
              <input
                className="form-control  form-control-lg"
                onBlur={handleBlur}
                type="designation"
                name="designation"
                placeholder="Designation"
              />
            </div>

            <div className="form-group">
              <textarea
                name="description"
                cols="15"
                rows="5"
                onBlur={handleBlur}
                className="form-control  form-control-lg"
                name="description"
                placeholder="Description"
              ></textarea>
            </div>
            <Button onClick={handleRegister} variant="primary">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Review;
