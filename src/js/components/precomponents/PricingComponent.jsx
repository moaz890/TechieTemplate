


export default function PricingPackage(props) {

    let packageFeatureText;

    if (props.category === "Business"){
        packageFeatureText = "business";
    }else if (props.category === "Ultimate"){
        packageFeatureText = "ultimate";
    }
    
    return (

        <div className="pricing--package position-relative">

            {props.category === "Ultimate" && <span className="advanced">Advanced</span>}
            <div className={!`${packageFeatureText}` ? 'pricing--package--header' : `pricing--package--header ${packageFeatureText}`}>
                <h3 className="display-3">{props.category}</h3>
            </div>
            <div className="pricing--package--body">
                <div className="pricing--package--body--price">
                    <span className="fly-item"><i className="fas fa-dollar"></i>{props.price} </span>/Month
                </div>
                <ul className="pricing--package--body--features">
                    <li className={!props.features[0].allowed ? "not-allowed" : ""}>{props.features[0].tag}</li>
                    <li className={!props.features[1].allowed ? "not-allowed" : ""}>{props.features[1].tag}</li>
                    <li className={!props.features[2].allowed ? "not-allowed" : ""}>{props.features[2].tag}</li>
                    <li className={!props.features[3].allowed ? "not-allowed" : ""}>{props.features[3].tag}</li>
                    <li className={!props.features[4].allowed ? "not-allowed" : ""}>{props.features[4].tag}</li>
                </ul>
            </div>
            <div className="pricing--package--header">
                <button type="button" className="btn text-white">Buy Now</button>
            </div>
        </div>

    ) 
}