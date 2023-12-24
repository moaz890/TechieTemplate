export default function SwriperSlide(props) {

    return (
        <div className="swiper-slide slide">

            <div className="slide--info">
                <p><i className="fa-solid fa-quote-left"></i>{props.bio}<i className="fa-solid fa-quote-right"></i></p>
            </div>

            <div className="slide--image">
                <img src={"./src/assets/img/testimonials/"+props.img} alt="" className="img-fluid" />
                <h3 className="display-3">{props.name}</h3>
                <p className="fw-bold">{props.job}</p>
            </div>

        </div>
    )
}