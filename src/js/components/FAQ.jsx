import "../../css/style.css";
import AccordianItem from "./precomponents/FAQPreComponent";
import data from '../data/data';



export default function FaqSection() {
  const faqElements = data.faq.map((faqItem) => {
    return <AccordianItem key={faqItem.id} faqHeader={faqItem.faqHeader} faqBody={faqItem.faqBody} id={faqItem.id} ariaControls={faqItem.ariaControls} show={faqItem.show} collapsed={faqItem.collapsed}/>
  });
  return (
    <section className="faq" id="faq">
      <div className="container aos-init" data-aos="fade-up">
        <div className="row text-white text-center faq--header">
          <h1 className="display-3 fw-bold">Frequently Asked Questions</h1>
          <div className="header-line faq--header-line"></div>
          <p>Magnam dolores commodi suscipit...</p>
        </div>
        <div className="row">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            {faqElements}
          </div>
        </div>
      </div>
    </section>
  );
}
