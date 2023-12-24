import Feature from "./precomponents/Feature";
import data from "../data/data";
import image from "../../assets/img/features.svg"

export default function Features() {

    const features = data.features.map((item) => {
        return <Feature key={item.id} icon={item.icon} head={item.head} body={item.body} />
    });

    return (

        <div className="features" id="features">
            <div className="container aos-init" data-aos="fade-up">
                <div className="row text-center features--header">
                    <h1 className="display-3">Features</h1>
                    <div className="header-line"></div>
                    <p className="lead">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row features--body">

                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-lg-center justify-content-md-between">
                        {features}
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}
