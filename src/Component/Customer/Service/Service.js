import React, { useEffect } from 'react';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../Sidebar/Sidebar';
import { Link} from "react-router-dom";
// import webDesign from '../../../images/icons/service1.png';
// import graphicDesign from '../../../images/icons/service2.png';
import RegService from '../RegService/RegService';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
// const services = [
//     {
//         icon : webDesign,
//         title : 'Web & Mobile design',
//         description : 'We Craft stunning and amazing web UI, using a well drafted UX to fit your product',
//     },
//     {
//         icon : graphicDesign,
//         title : 'Graphic design',
//         description : 'Amazing flyers, social media posts and brand representations that would make your brand stand out',
//     },
// ]
const Service = () => {
const[loggedInUser, setLoggedInUser] = useContext(UserContext);
const[ servicelist , getservicelist] = useState([])
console.log(servicelist);
useEffect( () =>{
fetch("http://localhost:10000/readorder?email="+loggedInUser.email)
  .then(response => response.json())
  .then(data => getservicelist(data))
},[])
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 mt-5">
                <div className="mb-5">
                    <Link to="/home">
                        <img className="img-fluid w-50" src={logo} alt="" />
                    </Link>
                </div>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5">
                <h1 className="font-weight-bold">Service List</h1>
                <div className="bg-light p-5 rounded">
                    <div className="row">
                        {
                            servicelist.map(order => <RegService order={order}></RegService>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
);
    
};

export default Service;