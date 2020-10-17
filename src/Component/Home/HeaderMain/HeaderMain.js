import React from 'react';
import img from '../../../images/logos/Frame.png'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div className="row my-5">
            <div className="col-md-4 mt-5">
            <h1 className="font-weight-bold">Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dicta molestiae a, maiores dolorem esse</p>
            <button className="btn-black">Hire Us</button>
            </div>
            <div className="col-md-8">
            
            <img src={img} className="img-fluid w-75"  alt="" />
            </div>
        </div>
    );
};

export default HeaderMain;