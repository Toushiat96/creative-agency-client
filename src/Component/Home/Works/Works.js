import React from 'react';
import './Works.css'
import img1 from '../../../images/carousel-1.png';
import img2 from '../../../images/carousel-2.png';
import img3 from '../../../images/carousel-4.png';
import img4 from '../../../images/carousel-5.png';

import {Carousel} from '3d-react-carousal';



const Works = () => {

    let slides = [
        <img  src={img1} alt="1" />,
        <img  src={img2} alt="2" />  ,
        <img  src={img3} alt="3" />  ,
        <img  src={img4} alt="4" />  ,
        <img src={img1} alt="5" />   ];
    
    return (
        <div className="work">
            <h3 className="text-center mb-5 text-white font-weight-bold">Here are some of <span style={{color:"#7AB259"}}>our works</span></h3>
            <div className="container">
       


               <Carousel slides={slides} autoplay={true} interval={1000}/>
            
            </div>
        </div>
    );
};

export default Works;