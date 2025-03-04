import { Link } from "react-router-dom";
import CompareSwiper from "../../component/compareswiper";
import Pagebanner from "../../component/pagebanner";
import TestiSwiper from "../../component/testimonialswiper";
import Twentytwenty2 from "../../component/twenty-twenty-2";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { testidata } from "../../constant/alldata";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ScrollTopButton from "../../component/scrolltotop";

function Testimonial() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Testimonial' />
                <section className="content-inner-1">
                    <div className="container">
                        <div className="row m-b10 loadmore-content">
                            {testidata.map((data, i) => {
                                let menuClass = data.classChange;
                                if (menuClass === 'testimonial-media') {
                                    return (
                                        <div className="col-xl-4 col-md-6 m-b20 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s" key={data.id || i}>
                                            <div className="testimonial-2">
                                                <div className={data.classChange}>
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
                                            </div>
                                        </div>
                                    )
                                } else if (menuClass === 'testimonial-detail') {
                                    return (
                                        <div className="col-xl-4 col-md-6 m-b20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" key={data.id || i}>
                                            <div className="testimonial-2">
                                                <div className={data.classChange}>
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
                                                            <img src={data.image} alt="" />
                                                        </div>
                                                        <div className="clearfix">
                                                            <h5 className="testimonial-name">Kenneth Fong</h5>
                                                            <span className="testimonial-position">Postgraduate Student</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <div className="dz-separator style-3">
                            <Link to={"#"} className="btn separator-badge dz-load-more wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s" rel="ajax/testimonial">Load More</Link>
                        </div>
                    </div>
                </section>
                <CompareSwiper />
                <Twentytwenty2 />
                <section className="content-inner gradient-primary overflow-hidden">
                    <TestiSwiper />
                </section>
            </main>
            <Footer />
            <ScrollTopButton />
            <Modal show={show} onHide={handleClose} centered >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/o8OgzQdA70c?si=Kgb2auDFo3tH4oRZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Modal>
        </>
    )
}
export default Testimonial;