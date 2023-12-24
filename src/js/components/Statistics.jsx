import "../../css/style.css"
import CountImage from '../../assets/img/counts-bg.png';

export default function StatisticsSection() {
    
    return (

        <section className="statistics" id="statistics">
            <div className="statistics--overlay">
                <img src={CountImage} alt="CountImage" className="img-fluid" />
            </div>
            <div className="container aos-init position-relative" data-aos="fade-up">
                <div className="row text-center">
                    <div className="col-12 col-md-6 col-lg-3">
                        <h1 className="display-2 text-white">232</h1>
                        <p className="lead text-capitalize">clients</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h1 className="display-2 text-white">521</h1>
                        <p className="lead text-capitalize">Projects</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h1 className="display-2 text-white">1463</h1>
                        <p className="lead text-capitalize">ours of support</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h1 className="display-2 text-white">15</h1>
                        <p className="lead text-capitalize">head workers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}



