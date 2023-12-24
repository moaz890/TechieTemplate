import glightboxMin from "glightbox";

export default function PortfolioComponent(props) {
    const portfolioLightbox = new glightboxMin({
        selector: '.portfolio-lightbox'
    });
    return (
        <div className={`col-lg-4 col-md-6 portfolio--item filter-${props.type.toLowerCase()}`}>
            <div className="portfolio--image">
                <div className="portfolio--image--overlay">
                    <div className="portfolio--image--overlay--info text-center row position-relative">
                        <h3 >{props.title}</h3>
                        <h4 className="fw-light">{props.type}</h4>
                        <div className="portfolio--image--icons d-flex">
                            <a href={"./src/assets/img/portfolio/"+props.img} className="portfolio-lightbox" title={props.title}><i className="fas fa-plus"></i></a>

                            <a href="#"><i className="fas fa-link"></i></a>
                        </div>

                    </div>
                </div>
                <img src={"./src/assets/img/portfolio/"+props.img} alt="PortfolioImage" className="img-fluid" />
            </div>
        </div>
    );

}