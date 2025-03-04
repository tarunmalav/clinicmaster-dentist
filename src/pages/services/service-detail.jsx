import { Link } from "react-router-dom";
import Pagebanner from "../../component/pagebanner";
import WantApponiment from "../../component/wantapponiment";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import ScrollTopButton from "../../component/scrolltotop";

function ServiceDetail() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Service Detail' />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="dz-media radius-lg height-md m-b70 m-lg-b50 m-md-b30">
                                    <img src={IMAGES.servicelarge1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <h2 className="title fw-semibold m-b15">Dental Implant Restorations</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
                                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="d-sm-flex align-items-center m-t30">
                                        <Link to="/contact-us" className="btn btn-lg btn-icon btn-secondary btn-shadow m-r30 mb-3 mb-sm-0"> Appointment
                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                        <div className="info-widget style-5">
                                            <div className="widget-media text-primary">
                                                <i className="feather icon-phone-call" />
                                            </div>
                                            <div className="widget-content">
                                                <h6 className="title">Contact us?</h6>
                                                <Link to="tel:+11234567890" className="text-secondary">+1 123 456 7890</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                <div className="dz-media radius-lg height-sm">
                                    <img src={IMAGES.about16} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-2 clearfix">
                    <div className="container">
                        <div className="row content-bx style-9 g-0 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s" style={{ backgroundImage: `url(${IMAGES.about15})` }}>
                            <div className="col-xl-7 col-lg-9">
                                <h2 className="title m-b15">Who is a candidate for Dental Implants Restoration?</h2>
                                <p>Dental implants work best for patients with solid, healthy bone in the area where the titanium posts will be placed. X-rays help us assess these areas and detect any signs of bone loss. If you have bone loss or low-lying sinuses, we may recommend bone grafting or a sinus lift to ensure successful implant placement. Implants can last for decades without showing signs of wear or damage.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="dz-media radius-lg height-md me-xl-5 m-b30">
                                    <img src={IMAGES.about16} alt="" />
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
                <WantApponiment />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default ServiceDetail;