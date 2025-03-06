import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES, SVGICONS } from "../constant/theme";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { testiswiperdata } from "../constant/alldata";
import { Modal } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

function TestiSwiper() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [swiperInstance, setSwiperInstance] = useState(null);
    const testimonialSwiperRef = useRef(null);
    const currentSlideRef = useRef(null);
    const totalSlidesRef = useRef(null);
    const updatePagination = () => {
        const swiperTotalSlides = testimonialSwiperRef.current?.swiper?.slides.length;
        const currentSlide = swiperInstance?.realIndex + 1;
        const current = currentSlide < 10 ? `0${currentSlide}` : currentSlide;
        const total = swiperTotalSlides < 10 ? `0${swiperTotalSlides}` : swiperTotalSlides;
        if (currentSlideRef.current && totalSlidesRef.current) {
            totalSlidesRef.current.innerHTML = total;
            currentSlideRef.current.innerHTML = current;
        }
    };
    useEffect(() => {
        if (swiperInstance) {
            updatePagination();
            swiperInstance.on('slideChange', updatePagination);
            return () => {
                if (swiperInstance) {
                    swiperInstance.off('slideChange', updatePagination);
                }
            };
        }
    }, [swiperInstance]);
    return (
        <>
            <div className="container">
                <div className="section-head style-3 row align-items-end justify-content-between m-b30">
                    <div className="col-xl-5 col-lg-6 m-b10 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <h2 className="title m-b0">What our patient say about us</h2>
                    </div>
                    <div className="col-xl-6 col-lg-6 m-b10 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <div className="float-xl-end">
                            <div className="d-flex align-items-center m-b15">
                                <div className="info-widget style-12 m-r10 bg-light">
                                    <div className="avatar-group">
                                        <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar1} alt="" />
                                        <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar2} alt="" />
                                        <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar3} alt="" />
                                        <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar4} alt="" />
                                    </div>
                                    <div className="clearfix">
                                        <span className="font-20">Talk to over 215 doctor</span>
                                    </div>
                                </div>
                                <Link to="/testimonial" className="btn btn-square btn-xl btn-light btn-rounded">
                                    {SVGICONS.uparrow}
                                </Link>
                            </div>
                            <div className="widget-rating3 large">
                                <ul className="star-list">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                </ul>
                                <span className="rating me-2">(4.8)</span>
                                <span className="text text-body fw-normal">12k+ ratings on google</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-left">
                <Swiper
                    className="swiper testimonial-swiper2 testimonial-wrapper2"
                    slidesPerView={2}
                    loop={true}
                    pagination={{
                        type: 'progressbar',
                        el: ".testimonial-pagination-swiper2",
                        clickable: true
                    }}
                    autoplay={{
                        delay:3000
                    }}
                    breakpoints={{
                        1481: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 1.6,
                        },
                        991: {
                            slidesPerView: 1.2,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    ref={testimonialSwiperRef}
                    onSwiper={setSwiperInstance}
                >
                    {testiswiperdata.map((data, i) => {
                        return (
                            <SwiperSlide data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                <div className="testimonial-2">
                                    <div className="testimonial-media">
                                        <img src={data.image} alt="" />
                                        <div className="video-bx1 video-lg">
                                            <Link to={"#"} onClick={handleShow} className="popup-youtube video-btn bg-primary">
                                                <i className="fa fa-play" />
                                            </Link>
                                            <span className="text-black">Watch The Video</span>
                                            <Link to={"#"} className="btn-link">
                                                <i className="feather icon-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="testimonial-detail">
                                        <div className="testimonial-head">
                                            <ul className="star-list">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                            <h3 className="title">Best Treatment</h3>
                                        </div>
                                        <div className="testimonial-contant">
                                            <div className="testimonial-text">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-info">
                                            <div className="dz-media">
                                                <img src={IMAGES.smallavatar3} alt="" />
                                            </div>
                                            <div className="clearfix">
                                                <h5 className="testimonial-name">Kenneth Fong</h5>
                                                <span className="testimonial-position">Postgraduate Student</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div className="slider__pagination testimonial-slider__pagination2 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                        <div className="slider__current testimonial-slider__current" ref={currentSlideRef}>01</div>
                        <div className="swiper-progress testimonial-pagination-swiper2"></div>
                        <div className="slider__total testimonial-slider__total" ref={totalSlidesRef}>03</div>
                    </div>
                </Swiper>
            </div >
            <Modal show={show} onHide={handleClose} centered >
                <iframe width="560" height="315" src="https://www.linkedin.com/@dexignzone/embed/o8OgzQdA70c?si=Kgb2auDFo3tH4oRZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Modal>
        </>
    )
}
export default TestiSwiper;