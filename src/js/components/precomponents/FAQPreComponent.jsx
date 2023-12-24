export default function AccordianItem (props) {

    return (
        <div key={props.id} className="accordion-item mb-3">
            <h2 className="accordion-header" id={props.id}>
                <button className={props.collapsed==="true" ? "accordion-button collapsed faq--button" : "accordion-button faq--button"} type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.ariaControls} aria-expanded="true" aria-controls={props.ariaControls}>
                    <i className="fas fa-question"></i> {props.faqHeader}
                </button>
            </h2>
            <div id={props.ariaControls} className={props.show ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={props.id}>
                <div className="accordion-body">
                    <p>{props.faqBody}</p>
                </div>
            </div>
        </div>
    );

}