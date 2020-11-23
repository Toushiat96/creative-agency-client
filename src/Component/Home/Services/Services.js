import React from 'react';
import './Services.css'
const Services = ({services}) => {
    return (
        <div className="col-md-4 text-center service">
            <img className="img-fluid mb-3" src={`data:image/png;base64,${services.image.img}`} style={{width:'90px'}} alt=""/>
    <h5>{services.service}</h5>
    <p> {services.description}</p>
        </div>
    );
};

export default Services;