import React from 'react';

const RegService = ({order}) => {
    return (
        <div className="col-md-4 text-center service">
        <img className="img-fluid mb-3" src={order.icon} style={{width:'90px'}} alt=""/>
<h5>{order.title}</h5>
<p> {order.description}</p>
    </div>
    );
};

export default RegService;