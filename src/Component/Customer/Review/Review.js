import React, { useContext } from 'react';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../Sidebar/Sidebar';
import { Form ,Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const { register, handleSubmit,errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    const onSubmit = (data) =>{
        const reviewDetails = { ...loggedInUser, ...data};
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewDetails)
            
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                
                 alert(' successfully review add.');
            }
        })
        
        history.push('/home');
        
    };
    
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-3 mt-3 mb-5">
            <div className="mb-5">
            <img src={logo} className="img-fluid w-50" alt="" />
            
            </div>
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5">
            <h1>Review Your Course</h1>
            <Form  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                                <input   className="form-control  form-control-lg" value={loggedInUser.name} ref={register({ required: true })} type="text"  name="name" placeholder="Your name / company's name" />
                            </div>
                            <div className="form-group">
                                <input  className="form-control  form-control-lg" value={loggedInUser.email} ref={register({ required: true })} type="email"  name="email" placeholder="Your email address" />
                            </div>
                            
                            <div className="form-group">
                                <input  className="form-control  form-control-lg"  ref={register({ required: true })} type="designation"  name="designation" placeholder="Designation" />
                            </div>
                            
                            
                            
                            <div className="form-group">
                                <textarea  name="description" cols="15" rows="5" ref={register({ required: true })} className="form-control  form-control-lg" name="description" placeholder="Description"></textarea>
                            </div>
                            <div className="form-group">
                            <input type="submit" className="btn-black" value="Submit" />
                            </div>
            </Form>
            
            </div>
            
            </div>
        </div>
    );
};

export default Review;