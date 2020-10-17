import React from 'react';
import CompanyLogos from '../CompanyLogos/CompanyLogos';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyLogos></CompanyLogos>
            <Service></Service>
            <Works></Works>
            <Review></Review>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;