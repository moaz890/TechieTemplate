import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from './components/Navbar'
import Landing from './components/Landing';
import AboutSection from './components/AboutElement';


// Local Stylesheet Files
import "../css/style.css"


ReactDOM.createRoot(document.getElementById("aboutRoot")).render(
    <React.StrictMode>
        <Navbar />
        <Landing />
        <AboutSection />
    </React.StrictMode>,
);



