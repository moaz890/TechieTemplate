import "../../css/style.css"
import data from "../data/data"
import PricingPackage from "./precomponents/PricingComponent"

export default function Pricing () {

    const packages = data.pricing.map((category) => {
        return <PricingPackage key={category.id} {...category}/>
    });

    return (
        <div className="pricing" id="pricing">
            <div className="container aos-init" data-aos="fade-up">
                <div className="row text-center">
                    <h1 className="display-3">Pricing</h1>
                    <div className="header-line"></div>
                    <p className="lead">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="pricing--content d-grid">
                    {packages}
                </div>
            </div>
        </div>
    );
}