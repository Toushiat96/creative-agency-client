import React, { useEffect, useState } from 'react';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../../Customer/Sidebar/Sidebar';
import { Link} from "react-router-dom";
const Admin = () => {
const [admindata , setadmin] = useState([])
useEffect( () =>{
fetch("http://localhost:10000/servicegetadmin")
.then(res =>res.json())
.then(data =>setadmin(data))
},[])
console.log(admindata);
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
                <div className="col-md-9 mt-5">
                    <h1 className="font-weight-bold">Service List</h1>
                    <div className="bg-light p-5 rounded">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Project Details</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {admindata.filter(inf => inf.length=!0).map(filteredPerson => (
                            <tbody>
                                <td>{filteredPerson.name}</td>
                                <td>{filteredPerson.email}</td>
                                <td>{filteredPerson.service}</td>
                                <td>{filteredPerson.description}</td>
                                <td>{}</td>

                            </tbody>
                             ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default Admin;