import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Wecare from "../../component/wecare";
import Wecare2 from "../../component/wecare2";
import HighlyTeam from "../../component/highlyteam";
import Servicesdata from "../../component/servicesdata";
import Twentytwenty from "../../component/twenty-twenty";
import WhyChoose from "../../component/whychoose";
import BestDentist from "../../component/bestdentist";
import PricingPlan from "../../component/pricingplan";
import NewsUpdate from "../../component/newsupdate";
import TestiSwiper from "../../component/testimonialswiper";
import MapForm from "../../component/mapform";
import AppointmentData from "../../component/apponimentdata";
import ScrollTopButton from "../../component/scrolltotop";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function Index() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <div className="hero-banner style-2">
                    <div className="container">
                        <div className="inner-wrapper">
                            <div className="row align-items-center h-100">
                                <div className="col-lg-6">
                                    <div className="hero-content">
                                        <h1 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">  Get Beautiful Straight
                                            <span className="smile"> Smile {SVGICONS.smile} </span> Quickly
                                        </h1>
                                        <div className="content-bx style-2 m-b40 primary wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                            Experienced staff is dedicated to improving our patients’ dental health and enhancing
                                        </div>
                                        <div className="d-flex align-items-center m-b15 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            <div className="info-widget style-12 m-r40 shadow-sm">
                                                <div className="avatar-group">
                                                    <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar1} alt="" />
                                                    <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar2} alt="" />
                                                    <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar3} alt="" />
                                                    <img className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar4} alt="" />
                                                </div>
                                                <div className="clearfix"> <span>Talk to over 215 doctor</span> </div>
                                            </div>
                                            <Link to="/about-us" className="btn btn-square btn-xl btn-white shadow-sm btn-rounded"> {SVGICONS.uparrow} </Link>
                                        </div>
                                        <div className="widget-rating3 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                            <ul className="star-list">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                            <span className="rating">(4.8)</span>
                                            <span className="text">12k+ ratings on google</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                    <div className="hero-thumbnail" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                        <img className="thumbnail" src={IMAGES.herobanner1} alt="" />
                                        <div className="circle-wrapper"></div>
                                        <div className="item3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                            <img className="move-3" src={IMAGES.herobanner3} alt="" />
                                        </div>
                                        <div className="item4" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                            <img className="move-4" src={IMAGES.herobanner5} alt="" />
                                        </div>
                                        <div className="item5" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                            <img className="move-4" src={IMAGES.herobanner6} alt="" />
                                        </div>
                                        <div className="item6" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                            <div className="info-widget style-13 move-4">
                                                <div className="m-b15">
                                                    <h5 className="fw-medium m-b0">Available Doctors</h5>
                                                    <span className="font-13">Select Doctor</span>
                                                </div>
                                                <div className="d-flex align-items-center m-b15">
                                                    <img className="rounded-circle avatar-md" src={IMAGES.smallavatar7} alt="" />
                                                    <div className="clearfix m-l10">
                                                        <h6 className="name">Olivia Davis</h6>
                                                        <span className="position">Dentist</span>
                                                    </div>
                                                    <input className="form-check-input form-check1 ms-auto form-check-secondary" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                </div>
                                                <div className="d-flex align-items-center m-b15">
                                                    <img className="rounded-circle avatar-md" src={IMAGES.smallavatar8} alt="" />
                                                    <div className="clearfix m-l10">
                                                        <h6 className="name">William Martinez</h6>
                                                        <span className="position">Dentist</span>
                                                    </div>
                                                    <input className="form-check-input form-check1 ms-auto form-check-secondary" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                </div>
                                                <Link to="/appointment" className="btn btn-secondary btn-hover1 w-100 m-t10"> Book appointment </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item1">
                                <img className="move-1" src={IMAGES.herobanner2} alt="" />
                            </div>
                            <div className="item2">
                                <img className="move-2" src={IMAGES.herobanner4} alt="" />
                            </div>
                        </div>
                    </div>
                    {SVGICONS.bannershape}
                    <div className="banner-shape4"></div>
                    <div className="banner-shape5"></div>
                    <div className="banner-shape6"></div>
                </div>
                <section className="content-inner overlay-primary-gradient-light overlay-opacity-10 pt-sm-0" style={{ backgroundImage: `url(${IMAGES.bg4})` }}>
                    <div className="container">
                        <Wecare />
                        <Wecare2 />
                    </div>
                </section>
                <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg2})`, backgroundPosition: 'right top', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
                    <div className="container">
                        <HighlyTeam />
                    </div>
                </section>
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
                <section className="content-inner bg-light twentytwenty-bottom-spacing overlay-primary-light" style={{ backgroundImage: `url(${IMAGES.bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="section-head style-3 row align-items-end mb-0 mb-lg-4">
                            <div className="col-xl-7 col-lg-7 m-b30">
                                <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">The Best Quality Service You Can Get</h2>
                                <p className="m-b0 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Simple, transparent pricing that grows with you. Try and plan free for 30 days.</p>
                            </div>
                            <div className="col-xl-5 col-lg-5 d-lg-block d-none m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                <div className="info-widget style-15 overlay-secondary-middle d-flex align-items-center" style={{ backgroundImage: `url(${IMAGES.about3})` }}>
                                    <div className="video-bx2">
                                        <Link to={"#"} onClick={handleShow} className="video-btn popup-youtube">
                                            <i className="fa fa-play" />
                                        </Link>
                                        <span className="text-white">Play Video</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Servicesdata />
                        </div>
                        <div className="dz-separator style-4 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                            <h6 className="title">We help you live your life in full motion.</h6>
                            <Link to="/services-2" className="btn btn-secondary separator-badge btn-rounded shadow-md fw-medium">View All Services</Link>
                        </div>
                    </div>
                    <Twentytwenty />
                </section>
                <section className="content-inner twentytwenty-top-spacing overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg4})`, backgroundSize: 'cover', }}>
                    <div className="container">
                        <WhyChoose />
                    </div>
                </section>
                <section className="content-inner p-t50 bg-light">
                    <div className="container">
                        <BestDentist />
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">Flexible Pricing Plans</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <PricingPlan />
                    </div>
                </section>
                <section className="content-inner bg-light overlay-primary-light" style={{ backgroundImage: `url(${IMAGES.bg6})` }}>
                    <div className="container">
                        <NewsUpdate />
                    </div>
                </section>
                <section className="content-inner gradient-primary overflow-hidden">
                    <TestiSwiper />
                </section>
                <section className="content-inner">
                    <div className="container">
                        <MapForm />
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollTopButton />
            <Modal show={show} onHide={handleClose} centered >
                <iframe width="560" height="315" src="https://www.linkedin.com/@dexignzone/embed/o8OgzQdA70c?si=Kgb2auDFo3tH4oRZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Modal>
        </>
    )
}
export default Index;