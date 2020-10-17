import React from 'react';
import './Services.css'
const Services = ({services}) => {
    return (
        <div className="col-md-4 text-center service">
            <img className="img-fluid mb-3" src={services.icon} style={{width:'90px'}} alt=""/>
    <h5>{services.title}</h5>
    <p> {services.description}</p>
        </div>
    );
};

export default Services;