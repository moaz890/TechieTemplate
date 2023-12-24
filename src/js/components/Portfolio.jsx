import { useEffect } from "react";
import "../../css/style.css";
import data from "../data/data";
import PortfolioComponent from "./precomponents/PortfolioComponent";
import Isotope from "isotope-layout";
import Aos from "aos";

export default function Portfolio(){

    const portfolioData = data.portfolio.map((item) => {
        return <PortfolioComponent key={item.id} {...item} />
    });
    
    useEffect(() => {
        
        function handlePortfolioFilters () {
            const portfolioContainer = document.querySelector(".portfolio--container");
            
            if (portfolioContainer) {
                let portfolioIsotope = new Isotope(portfolioContainer, {
                    itemSelector: ".portfolio--item"
                });
                
                const portfolioFilters = document.querySelectorAll(".portfolio--filter-buttons button");
                portfolioFilters.forEach((btn) => {
                    btn.addEventListener("click", function () {
                        
                        portfolioFilters.forEach((el) => {
                            el.classList.remove("active");
                        });
                        this.classList.add("active");

                        portfolioIsotope.arrange({
                            filter: this.getAttribute('data-filter')
                        });
                        portfolioIsotope.on('arrangeComplete', function() {
                            Aos.refresh()
                        });
                    });
                });
            }
        }

        window.addEventListener("load", handlePortfolioFilters)

    })
    return (
        <div className="portfolio" id="portfolio">
            <div className="container aos-init" data-aos="fade-up">
                <div className="row text-center">
                    <h1 className="display-3">Portfolio</h1>
                    <div className="header-line"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi ipsum delectus sunt illum voluptatum optio nulla accusamus at adipisci, ullam sapiente assumenda rem suscipit itaque quaerat nam laudantium reiciendis aperiam corporis maxime possimus minima dolorum.</p>
                    <div className="mt-5 mb-3">
                        <div className="btn-group portfolio--filter-buttons" role="group" aria-label="Basic example">
                            <button type="button" data-filter="*" className="btn btn-primary active mx-1">All</button>
                            <button type="button" data-filter=".filter-card" className="btn btn-primary mx-1">Card</button>
                            <button type="button" data-filter=".filter-web" className="btn btn-primary mx-1">Web</button>
                            <button type="button" data-filter=".filter-app" className="btn btn-primary mx-1">App</button>
                        </div>
                    </div>
                </div>

                <div className="row portfolio--container">
                    {portfolioData}
                </div>
                
            </div>
        </div>
    )
}