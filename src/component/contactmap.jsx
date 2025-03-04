import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { IMAGES, SVGICONS } from "../constant/theme";
import { Link } from "react-router-dom";
import { mapdata } from "../constant/alldata";

function ContactMap() {
    const [show, setShow] = useState(true);
    return (
        <>
            <section className="content-inner">
                <div className="container">
                    <div className="row content-wrapper">
                        <div className="col-xl-7 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="map-wrapper style-3 me-xl-4">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin&zoomcontrol=false" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <div className="item1 position-absolute">
                                    {show && (
                                        <Alert className="content-bx style-5 alert alert-dismissible fade show" role="alert">
                                            <div className="content-logo">
                                                <img src={IMAGES.logo} alt="" />
                                            </div>
                                            <div className="content-text m-b20">
                                                <h6 className="m-b5">Office Address: </h6>
                                                <p className="m-b0">234 Oak Drive, Villagetown, USA</p>
                                            </div>
                                            <div className="content-text">
                                                <h6 className="m-b5">Working Hours: </h6>
                                                <p className="m-b0">Mon-Thu: 8:00am-5:00pm <br /> Fri: 8:00am-1:00pm</p>
                                            </div>
                                            <button onClick={() => setShow(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                                {SVGICONS.crossicon}
                                            </button>
                                        </Alert>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <h2 className="title m-b5">All Locations</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="row">
                                {mapdata.map((data, i) => (
                                    <div className="col-xl-12 col-lg-6 m-b15 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                        <div className="dz-img-box style-2">
                                            <div className="dz-content">
                                                <div className="inner-content clearfix">
                                                    <h3 className="title m-b10"><img src={data.flag} alt="" /> {data.title}</h3>
                                                    <p className="m-b10">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                                                    <Link to="tel:+0123-456-7890" className="text-body">+0 123-456-7890</Link>
                                                </div>
                                                <div className="dz-footer">
                                                    <Link to="https://www.google.com/maps/" target="_blank" className="icon-link-hover-end">Get Directions <i className="feather icon-arrow-up-right" /></Link>
                                                </div>
                                            </div>
                                            <div className="dz-media">
                                                <img src={IMAGES.map} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactMap;