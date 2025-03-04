import { Link } from "react-router-dom";
import ClientSwiper from "../../component/clientswiper";
import CompareSwiper from "../../component/compareswiper";
import HighlyTeam from "../../component/highlyteam";
import Question from "../../component/questions";
import { IMAGES, SVGICONS } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import { accordiondata3 } from "../../constant/alldata";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import ScrollTopButton from "../../component/scrolltotop";

function ServicesDetail2() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <div className="dz-bnr-inr style-2 dz-bnr-inr-md dz-bnr-detail">
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <div className="dz-bnr-inr-flex">
                                <div className="bnr-info">
                                    <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Dental Implants</h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">For more than 30 years, dental implants have enhanced the lives of countless individuals. These implants create a strong foundation for replacement teeth that mimic the appearance, feel, and functionality of natural teeth. As a result, patients can laugh, speak, and smile with renewed confidence.</p>
                                    <LightGallery
                                        zoom={true}
                                        thumbnail={true}
                                        thumbnailHeight={80}
                                        thumbnailWidth={80}
                                        plugins={[lgThumbnail, lgZoom]}
                                        selector='.lightimg'
                                    >
                                        <div className="row media-wrapper" id="lightgallery">
                                            <div className="col-6">
                                                <div className="dz-media radius-md wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                                    <Link to={IMAGES.servicesmall1} data-src={IMAGES.servicesmall1} className="lg-item lightimg">
                                                        <img src={IMAGES.servicesmall1} alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="dz-media radius-md wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                                    <Link to={IMAGES.servicesmall2} data-src={IMAGES.servicesmall2} className="lg-item lightimg">
                                                        <img src={IMAGES.servicesmall2} alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </LightGallery>
                                </div>
                                <div className="detail-media wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                    <div className="dz-media height-lg">
                                        <img src={IMAGES.servicelarge2} alt="" />
                                    </div>
                                    <div className="media-info">
                                        <div className="info-widget style-5">
                                            <div className="widget-media text-primary">
                                                <i className="feather icon-phone-call" />
                                            </div>
                                            <div className="widget-content">
                                                <h6 className="title">Contact us?</h6>
                                                <Link to="tel:+11234567890" className="text-secondary">+1 123 456 7890</Link>
                                            </div>
                                        </div>
                                        <Link to="/appointment" className="btn btn-lg btn-icon btn-primary btn-shadow">
                                            <span className="w-100">Appointment</span> <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item1"><img className="move-1" src={IMAGES.herobanner2} alt="" /></div>
                    <div className="item2"><img className="move-2" src={IMAGES.banner1} alt="" /></div>
                    <div className="item3"><img className="move-3" src={IMAGES.banner2} alt="" /></div>
                    {SVGICONS.bannershape}
                    <div className="banner-shape4"></div>
                    <div className="banner-shape5"></div>
                </div>
                <section className="content-inner-2 clearfix">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="dz-media m-b30 me-xl-5">
                                    <img src={IMAGES.servicesmall3} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="section-head style-1 m-b30">
                                    <h2 className="title fw-semibold">What is Dental Implants Restoration?</h2>
                                    <p className="m-b30">A dental implant is designed to replace one or more teeth in your mouth. Typically made of titanium, implants are surgically inserted into the jawbone. Over several months, the implant fuses with the bone, becoming a solid and stable part of your smile. After the implant heals, we can place single crowns, bridges, or even full dentures over them.</p>
                                    <h3 className="font-28 m-b10">Why is Dental Implants Restoration needed?</h3>
                                    <p>Dental implant restoration is often necessary if you're missing one or more of your natural teeth. Missing teeth can be more than just a cosmetic issue; it can make eating, chewing, and even speaking difficult. Fortunately, dental implants can replace what you're missing, improving both your smile and your quality of life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-2 clearfix">
                    <div className="container">
                        <div className="row content-bx style-9 g-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s" style={{ backgroundImage: `url(${IMAGES.about15})` }}>
                            <div className="col-xl-7 col-lg-9">
                                <h2 className="title m-b15">Benefits of Dental Implants</h2>
                                <p>Dental implants work best for patients with solid, healthy bone in the area where the titanium posts will be placed. X-rays help us assess these areas and detect any signs of bone loss. If you have bone loss or low-lying sinuses, we may recommend bone grafting or a sinus lift to ensure successful implant placement. Implants can last for decades without showing signs of wear or damage.</p>
                                <Link to="/appointment" className="btn btn-lg btn-icon btn-primary m-t40">
                                    Appointment
                                    <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-head style-1 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title m-b10 fw-semibold">Dental Implant Process</h2>
                                    <p>The dental implant process involves several stages to ensure successful placement and integration of the implant:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-wrapper style-1">
                        <div className="container">
                            <div className="timeline-inner">
                                <div className="timeline-left">
                                    <div className="timeline-wrap">
                                        <div className="timeline-head">
                                            <div className="timeline-number">1</div>
                                            <span className="step">Step</span>
                                        </div>
                                        <div className="timeline-info wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                            <h3 className="title">Initial Consultation and Planning</h3>
                                            <p>A comprehensive examination, including X-rays and scans, is conducted to assess dental health and create a detailed treatment plan.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-wrap">
                                        <div className="timeline-head">
                                            <div className="timeline-number">2</div>
                                            <span className="step">Step</span>
                                        </div>
                                        <div className="timeline-info wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                            <h3 className="title">Implant And Placement</h3>
                                            <p>The dental implant, a titanium post, is surgically placed into the jawbone to serve as an artificial root for the replacement tooth.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-right">
                                    <div className="timeline-wrap bottom">
                                        <div className="timeline-head">
                                            <div className="timeline-number">3</div>
                                            <span className="step">Step</span>
                                        </div>
                                        <div className="timeline-info wow fadeInDown" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            <h3 className="title">Healing and Osseointegration</h3>
                                            <p>Over several months, the implant fuses with the jawbone, providing a stable foundation for the replacement tooth.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-wrap bottom">
                                        <div className="timeline-head">
                                            <div className="timeline-number">4</div>
                                            <span className="step">Step</span>
                                        </div>
                                        <div className="timeline-info wow fadeInDown" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                            <h3 className="title">Abutment and Crown Placement</h3>
                                            <p>An abutment is attached to the implant, and a custom-made crown is placed on the abutment, completing the restoration with a natural-looking and functional tooth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CompareSwiper />
                <section className="content-inner pt-50">
                    <div className="container">
                        <HighlyTeam />
                    </div>
                </section>
                <section className="content-wrapper style-22">
                    <div className="container">
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-5">
                                <div className="section-head style-3 m-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title fw-semibold m-b20">The pros of implant dentures</h2>
                                    <p className="m-b30">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                    <Link to="/appointment" className="btn btn-lg btn-icon btn-primary">
                                        Appointment
                                        <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="content-info">
                                    <Accordion className="accordion dz-accordion style-4 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" defaultActiveKey="0">
                                        {accordiondata3.map((data, i) => (
                                            <AccordionItem eventKey={data.key} key={i}>
                                                <AccordionHeader> {data.title}</AccordionHeader>
                                                <AccordionBody>
                                                    <p>Implant dentures are securely anchored to the jawbone, reducing the risk of slipping or shifting, which enhances comfort and stability compared to traditional dentures.</p>
                                                </AccordionBody>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clearfix content-inner-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <ClientSwiper />
                        </div>
                    </div>
                </section>
                <Question />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default ServicesDetail2;