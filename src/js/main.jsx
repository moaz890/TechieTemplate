import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from './components/Navbar'
import Landing from './components/Landing';
import AboutSection from './components/AboutElement';
import StatisticsSection from './components/Statistics';
import ServicesSection from './components/Services';
import FaqSection from './components/FAQ';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Local Stylesheet Files
import "../css/style.css"





ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar />
        <Landing />
        <AboutSection />
        <StatisticsSection />
        <ServicesSection />
        <Features />
        <Testimonial />
        <Portfolio />
        <Pricing />
        <FaqSection />
        <Contact />
        <Footer />
    </React.StrictMode>,
);



