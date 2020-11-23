import React from 'react';

const RegService = ({order}) => {
    return (
        <div className="col-md-4 text-center service">
        <img className="img-fluid mb-3" src={`data:image/png;base64,${order.image.img}`} style={{width:'90px'}} alt=""/>
<h5>{order.service}</h5>
<p> {order.description}</p>
    </div>
    );
};

export default RegService;