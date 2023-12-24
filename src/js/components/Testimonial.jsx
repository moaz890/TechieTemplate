import { useEffect } from 'react';
import Swiper from 'swiper';
import data from '../data/data';
import SwriperSlide from './precomponents/Swiper';

// import styles bundle
import "../../css/style.css"

export default function Testimonial() {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 40
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        });

        return () => {
            // Cleanup Swiper instance when the component is unmounted
            swiper.destroy();
        };
    }, []);

    const slides = data.testimonials.map((item) => {
        return (
            <SwriperSlide
                key={item.id}
                job={item.job}
                name={item.name}
                bio={item.bio}
                img={item.img}
            />
        );
    });

    return (
        <div className="testimonial" id="testimonial">
            <div className="container aos-init" data-aos="fade-up">
                <div className="row text-center">
                    <h1 className="display-3">Testimonials</h1>
                    <div className="header-line"></div>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos neque expedita non quidem dolorum animi mollitia dicta, nulla, quasi officiis exercitationem esse, dignissimos praesentium tempore deleniti accusamus facere assumenda in?</p>
                </div>
                <div className="row position-relative">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {slides}
                        </div>
                    </div>
                    <div className="swiper-pagination testimonial--pagination"></div>
                </div>
            </div>
        </div>
    );
}