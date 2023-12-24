import "../../css/style.css";

import landingImage from "../../assets/img/hero-img.png"
import landingBg from "../../assets/img/hero-bg.jpg"


export default function Landing () {
    return (
        <section id="landing" className="landing">
            <div className="landing--overlay">
                <img src={landingBg} alt="LandingBg" className="img-fluid" />
            </div> 
            <div className="container position-relative h-100 aos-init" data-aos="fade-up">
                <div className="row align-items-center landing--body">
                    <div className="col-12 col-lg-8 landing--info">
                        <h1 className="display-2 text-white">Bettter Digital Experience With Techie</h1>
                        <p className="fw-light">We are team of talented designers making websites with Bootstrap</p>
                        <a href="#" className="btn btn-light border-white light-button">Get Started</a>
                    </div>
                    <div className="col-12 col-lg-4 landing--image">
                        <img src={landingImage} alt="LandingImage" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
}


