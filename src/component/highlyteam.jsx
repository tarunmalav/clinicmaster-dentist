import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { swiperteamdata } from "../constant/alldata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, FreeMode, Grid, Navigation, Pagination, Thumbs } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';

function HighlyTeam() {
    const [hover, setHover] = useState(1);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [swiperInstance, setSwiperInstance] = useState(null);
    const teamSwiperRef = useRef(null);
    const currentSlideRef = useRef(null);
    const totalSlidesRef = useRef(null);
    const updatePagination = () => {
        const swiperTotalSlides = teamSwiperRef.current?.swiper?.slides.length;
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
            <div className="row align-items-center">
                <div className="col-xl-6 order-xl-1 m-b30">
                    <div className="section-head style-3">
                        <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Highly Qualified Team</h2>
                        <p className="m-b0 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <Swiper
                        className="swiper dz-team-swiper1-thumb wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s"
                        onSwiper={setThumbsSwiper}
                        slidesPerView={2}
                        grid={{ rows: 2 }}
                        freeMode={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.2,
                                grid: {
                                    rows: 1,
                                },
                            },
                            591: {
                                slidesPerView: 2,
                            },
                            991: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 2,
                            },
                        }}
                        modules={[Grid, Thumbs, FreeMode, Autoplay]}
                    >
                        {swiperteamdata.map((data, i) => {
                            return (
                                <SwiperSlide key={i} >
                                    <div className={`dz-team style-3 ${hover === data.id ? 'active' : ''}`} onMouseEnter={() => setHover(data.id)}>
                                        <div className="dz-body">
                                            <div className="dz-media">
                                                <img src={data.image} alt="/" />
                                            </div>
                                            <div className="dz-content">
                                                <h3 className="dz-name"><Link to={"#"}>Nashid Martines</Link></h3>
                                                <span className="dz-position">Cardiac Surgery</span>
                                            </div>
                                        </div>
                                        <div className="dz-footer">
                                            <ul className="dz-social">
                                                <li><Link to="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin" /></Link></li>
                                                <li><Link to="https://www.instagram.com/dexignzone" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link to="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link to="https://www.x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /></Link></li>
                                                <li><Link to="https://www.linkedin.com/@dexignzone" target="_blank"><i className="fa-brands fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="col-xl-6">
                    <Swiper
                        className="swiper dz-team-swiper1 me-md-4 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s"
                        slidesPerView={1}
                        effect="fade"
                        thumbs={{ swiper: thumbsSwiper }}
                        pagination={{
                            el: '.team-progressbar-swiper',
                            type: 'progressbar',
                        }}
                        navigation={{
                            nextEl: '.team-swiper-next',
                            prevEl: '.team-swiper-prev',
                        }}
                        autoplay={{
                            delay: 3000,
                        }}
                        modules={[Pagination, Navigation, FreeMode, Thumbs, EffectFade,Autoplay]}
                        ref={teamSwiperRef}
                        onSwiper={setSwiperInstance}
                    >
                        {swiperteamdata.map((data, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="dz-team style-4">
                                        <div className="dz-media">
                                            <img src={data.image2} alt="/" />
                                        </div>
                                        <ul className="dz-social">
                                            <li><Link to="https://www.linkedin.com/showcase/dexignzone" target="_blank" className="linkedin"><i className="fa-brands fa-linkedin" /></Link></li>
                                            <li><Link to="https://www.instagram.com/dexignzone" target="_blank" className="instagram"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link to="https://www.facebook.com/dexignzone" target="_blank" className="facebook"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link to="https://www.x.com/dexignzone" target="_blank" className="x-twitter"><i className="fa-brands fa-x-twitter" /></Link></li>
                                        </ul>
                                        <div className="item1">
                                            <ul className="list-check-try fw-medium text-secondary">
                                                <li>Teeth Whitening</li>
                                                <li>Root Canal</li>
                                            </ul>
                                        </div>
                                        <div className="item2">
                                            <div className="info-widget style-3">
                                                <div className="widget-head">
                                                    <div className="widget-media">
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <div className="widget-content">
                                                        <h6 className="title">Dr. Natali jackson</h6>
                                                        <span className="sub-title text-primary">Dental Experts</span>
                                                    </div>
                                                </div>
                                                <p>“It is a long established fact that a reader will be distracted by the readable content”</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className="slider__pagination team-pagination-swiper team-pagination-wrapper m-t5">
                        <div className="swiper-button team-swiper-prev btn btn-light btn-square radius-sm">
                            <i className="feather icon-arrow-left" />
                        </div>
                        <div className="slider__current team-slider__current" ref={currentSlideRef}>01</div>
                        <div className="swiper-progress team-progressbar-swiper"></div>
                        <div className="slider__total team-slider__total" ref={totalSlidesRef}>08</div>
                        <div className="swiper-button team-swiper-next btn btn-light btn-square radius-sm">
                            <i className="feather icon-arrow-right" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
} export default HighlyTeam;