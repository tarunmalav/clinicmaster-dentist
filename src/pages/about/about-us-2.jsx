import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import ClientSwiper from "../../component/clientswiper";
import Pagebanner from "../../component/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import HighlyTeam from "../../component/highlyteam";
import CompareSwiper from "../../component/compareswiper";
import WantApponiment from "../../component/wantapponiment";
import TestiSwiper from "../../component/testimonialswiper";
import Twentytwenty2 from "../../component/twenty-twenty-2";
import { useState } from "react";
import { aboutus2data } from "../../constant/alldata";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import ScrollTopButton from "../../component/scrolltotop";

function AboutUs2() {
    const [hover, setHover] = useState(1);
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='About Us 2' />
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 row align-items-end justify-content-between m-b30">
                            <div className="col-xl-4 col-lg-6 m-b10 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <h2 className="title m-b0">Learn More About Our Practice</h2>
                            </div>
                            <div className="col-xl-7 col-lg-6 m-b10 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <p className="font-20">Welcome to our practice! We are dedicated to restoring and enhancing the natural beauty of your smile using conservative, state-of-the-art procedures for beautiful, long-lasting results.</p>
                            </div>
                        </div>
                        <LightGallery
                            zoom={true}
                            thumbnail={true}
                            thumbnailHeight={80}
                            thumbnailWidth={80}
                            plugins={[lgThumbnail, lgZoom]}
                            selector='.lightimg'
                        >
                            <div className="row" id="lightgallery">
                                <div className="col-lg-6">
                                    <div className="dz-media height-md radius-xl m-b20 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                        <Link to={IMAGES.about12} data-src={IMAGES.about12} className="lg-item lightimg">
                                            <img src={IMAGES.about12} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="dz-media height-xs radius-xl m-b20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                        <Link to={IMAGES.about13} data-src={IMAGES.about13} className="lg-item lightimg">
                                            <img src={IMAGES.about13} alt="" />
                                        </Link>
                                    </div>
                                    <div className="dz-media height-xs radius-xl m-b20 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                        <Link to={IMAGES.about14} data-src={IMAGES.about14} className="lg-item lightimg">
                                            <img src={IMAGES.about14} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </LightGallery>
                    </div>
                </section>
                <section className="content-inner-2 overlay-secondary-dark background-blend-luminosity bg-img-fix bg-half-bottom bg-half-light bg-half-sm" style={{ backgroundImage: `url(${IMAGES.bg9})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="section-head style-3 m-b30 text-white me-xl-4 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title text-white">We Care About Your Dental Health</h2>
                                    <div className="widget-rating3 m-b30">
                                        <ul className="star-list">
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                        </ul>
                                        <span className="rating text-white me-2">(4.8)</span>
                                        <span className="text text-white">12k+ ratings on google</span>
                                    </div>
                                    <p className="fw-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="dz-media height-sm radius-xl">
                                    <img src={IMAGES.about18} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center content-inner-3">
                            <ClientSwiper columnstand1='text-white' columnstand2='light' />
                        </div>
                        <div className="row">
                            {aboutus2data.map((data, i) => (
                                <div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                    <div className={`content-bx style-8 shadow-sm box-hover ${hover === data.id ? 'active' : ''}`} onMouseEnter={() => setHover(data.id)}>
                                        <h3 className="title">{data.title}</h3>
                                        <p className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 m-b30 pe-xl-5">
                                <div className="section-head style-1 m-b30">
                                    <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Meet the Doctor</h2>
                                    <h3 className="text-primary font-24 m-b20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Dr. Nashid Martines</h3>
                                    <p className="fw-normal wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">As a dentist, I strive to make my office a comfortable and welcoming place where patients feel completely at home. I am passionate about helping my patients achieve and maintain beautiful, healthy smiles that they are proud to show off. My patients are an integral part of my community, and I am committed to providing them with the most gentle and effective dental care possible. Our team understands that dental anxiety can prevent patients from scheduling appointments, so we aim to ensure that your visit to Brenner Dental Care is unlike any other.</p>
                                </div>
                                <div className="row align-items-center g-4">
                                    <div className="col-sm-6 d-flex wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                        <div className="text-center">
                                            <img src={IMAGES.sign} alt="" />
                                            <span className="font-14 d-block">Dr. Nashid Martines</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                        <Link to="/appointment" className="btn btn-lg btn-icon btn-primary">
                                            Appointment
                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                <div className="dz-media height-md radius-xl">
                                    <img src={IMAGES.about5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg2})`, backgroundPosition: 'right top', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
                    <div className="container">
                        <HighlyTeam />
                    </div>
                </section>
                <CompareSwiper />
                <Twentytwenty2 />
                <section className="content-inner gradient-primary overflow-hidden">
                    <TestiSwiper />
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <ClientSwiper />
                        </div>
                    </div>
                </section>
                <WantApponiment />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default AboutUs2;