import "../../css/style.css";
import aboutImage from "../../assets/img/about.jpg";

export default function AboutSection(){

    return (

        <section className="about" id="about">
            <div className="container aos-init" data-aos="fade-up">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                        <h3 className="display-3">Voluptatem dignissimos provident quasi corporis</h3>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                        <ul className="about--features">
                            <li><i className="fas fa-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            <li><i className="fas fa-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="fas fa-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>
                        <a href="#" className="btn gradient-bg">Read More</a>
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                        <img src={aboutImage} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>

    );

}