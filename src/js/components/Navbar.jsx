import { useEffect } from "react";
import "../../css/style.css";


export default function Navbar () {

    useEffect(() => {

      let navbarLinks = document.querySelectorAll("nav .scrollto");
      const navLinksActive = () => {

        let position = window.scrollY + 200;
        navbarLinks.forEach((link) => {

          if (!link.hash) return
          let section = document.querySelector(link.hash);
          if(!section) return
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)){
            link.classList.add("active");
          }else{
            link.classList.remove("active");
          }

        });

      }

      window.addEventListener('load', navLinksActive)
      document.addEventListener("scroll", navLinksActive)
    })

    return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3 menu">
        <div className="container">
          <a className="navbar-brand text-uppercase menu--navbar-brand-logo" href="#">techie</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-end" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 menu--navbar-nav">
              <li className="nav-item">
                <a className="nav-link scrollto" aria-current="page" href="../../index.html#landing">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../../about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto" href="#testimonial">Team</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li className="dropend"><a href="#" className="dropdown-item dropdown-toggle innerDropdown-link" id="innerDropdown" role="button" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false">innerDropdown</a>
                    <ul className="dropdown-menu" aria-labelledby="innerDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto" href="#contact" tabIndex="-1" aria-disabled="true">Contact</a>
              </li>  
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-light" type="button">Get Started</button>
            </form>
          </div>
        </div>
      </nav>
    );

}