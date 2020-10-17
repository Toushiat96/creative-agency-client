import React, { useState } from 'react';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../Sidebar/Sidebar';
import { Form ,Button } from "react-bootstrap";
import { UserContext , serviceContext } from '../../../App';
import { useContext  } from 'react';
import { useHistory } from 'react-router-dom';
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceDetails, setServiceDetails] = useContext(serviceContext)
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState({});
    const history = useHistory()
const handleFileChange = (e) =>{
    const newFile = e.target.files[0];
    setFile(newFile);
}
const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
}

const handleSubmit = () =>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', loggedInUser.name);
    formData.append('email', loggedInUser.email);
    formData.append('service', serviceDetails.service);
    formData.append('description', serviceDetails.description);
    formData.append('price', serviceDetails.price);
   
    fetch('http://localhost:5000/addOrder', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert('Your order is submitted...!');
            }
        })
        .catch(error => {
            console.error(error)
        })
     history.push('/service')
}

    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-3 mt-3">
            <div className="mb-5">
            <img src={logo} className="img-fluid w-50" alt="" />
            
            </div>
            <Sidebar></Sidebar>
            </div>
           <div className="col-md-8 mt-5">
           <h1>Order Your Course</h1>
           <Form onSubmit={handleSubmit}>
           <div className="form-group">
                                <input onBlur={handleBlur}  className="form-control  form-control-lg" type="text"  name="name" placeholder="Your name / company's name" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur}  className="form-control  form-control-lg" type="email"  name="email" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur}  className="form-control  form-control-lg" type="text" name="service" placeholder="Course name" />
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur}  name="description" cols="15" rows="5" className="form-control  form-control-lg" name="description" placeholder="Project Details"></textarea>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <input onBlur={handleBlur}  className=" form-control-lg" type="text" name="price" placeholder="Price" />
                                </div>
                                <div className="ml-2 col-sm-4">
                                    <input onChange={handleFileChange} className="form-control-lg" type="file" name="" id="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn-black"/>
                            </div>
           
           </Form>
           </div>
           
            </div>
        </div>
    );
};

export default Order;