import { useEffect } from "react";
import "../../css/style.css";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Footer () {
    useEffect(() => {
        let preloader = document.getElementById("preloader");
        let backToTop = document.querySelector(".back-to-top");

        function activeBackToTop(e) {
            if (window.scrollY >= 200) {
                backToTop.classList.add("active");
            }else {
                backToTop.classList.remove("active");
            }
        }
        if (preloader) {
            window.addEventListener('load', () => {
                preloader.remove();
            })
        }
        window.addEventListener("load", activeBackToTop);
        document.addEventListener("scroll", activeBackToTop);
        /**
         * Animation on scroll
        */
        window.addEventListener('load', () => {
            Aos.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            })
        });
    }); 

    return (
        <div className="footer">
            <div className="container aos-init" data-aos="fade-up">
                <div className="row text-white">
                    <div className="col-lg-3 mb-5">
                        <h3 className="fw-bold text-uppercase mb-4">techie</h3>
                        <p className="m-0 mb-4">A108 Adam Street <br />New York, NY 535022 <br />United States</p>

                        <div className="footer--contact-info">
                            <p className="m-0"><span className="fw-bold">Phone:</span> +1 5589 55488 55</p>
                            <p className="m-0"><span className="fw-bold">Email:</span> info@example.com</p>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-5">
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <ul className="footer--links">
                                    <h5 className="fw-bold">Useful Links</h5>
                                    <li><a href="#"><i className="fas fa-angle-right"></i>Home</a></li>
                                    <li><a href="#"><i className="fas fa-angle-right"></i>About us</a></li>
                                    <li><a href="#"><i className="fas fa-angle-right"></i>Services</a></li>
                                    <li><a href="#"><i className="fas fa-angle-right"></i>Terms of Services</a></li>
                                    <li><a href="#"><i className="fas fa-angle-right"></i>Privacy & policu</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="footer--links">
                                    <h5 className="fw-bold">Our Services</h5>
                                    <li><a href="#"><i className="fas fa-angle-right"></i>Web Design</a></li>
                                    <li><a href="#"><i className="fas fa-angle-right"></i>Web Developement</a></li>
                                    <li><a href="#"><i className="fas fa-angle-right"></i>Product Management</a></li>
                                    <li><a href="#"><i className="fas fa-angle-right"></i>Marketting</a></li>
                                    <li><a href="#"><i className="fas fa-angle-right"></i>Graphic Design</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="fw-bold">Join Our Newsletter</h5>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <div className="footer--form">
                        <form action="#" className="d-flex">
                            <input type="text"/>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
                <hr className="bg-white"/>
                <div className="row justify-content-between text-white footer--end">
                    <div className="col-md-6">
                        <p className="m-0">&copy; Copyright <span className="fw-bold">Techie</span>. All Rights Reserved</p>
                        <a href="#">Designed by BootstrapMade</a>
                    </div>
                    <div className="col-md-6">
                        <ul className="d-flex">
                            <li><a href=""><i className="fab fa-facebook"></i></a></li>
                            <li><a href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                            <li><a href=""><i className="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}