import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../constant/theme";
import { counterdata } from "../constant/alldata";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function Wecare() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="row content-wrapper style-11 m-b30 justify-content-center">
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7">
                    <div className="content-media m-b30">
                        <div className="dz-media" data-bottom-top="transform: translateY(30px)" data-top-bottom="transform: translateY(0px)">
                            <img src={IMAGES.about5} alt="" />
                        </div>
                        <div className="item1" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(0px)">
                            <div className="info-widget style-1 move-3">
                                <div className="avatar-group">
                                    <img className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar1} alt="" />
                                    <img className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar2} alt="" />
                                    <img className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar3} alt="" />
                                    <img className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar4} alt="" />
                                </div>
                                <div className="clearfix ms-2">
                                    <span className="number text-primary">150k</span>
                                    <span>Patient recovers</span>
                                </div>
                            </div>
                        </div>
                        <div className="item2" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(0px)">
                            <div className="media1 move-4">
                                <img src={IMAGES.herobanner4} alt="" />
                            </div>
                        </div>
                        <div className="item3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(0px)">
                            {SVGICONS.item3}
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-7">
                    <div className="content-info pt-md-5 m-b30">
                        <div className="section-head style-3 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">We Care About Your Dental Health</h2>
                            <div className="widget-rating3 m-b20">
                                <ul className="star-list">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                </ul>
                                <span className="rating">(4.8)</span>
                                <span className="text ms-2">12k+ ratings on google</span>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                        </div>
                        <div className="info-widget style-15 overlay-secondary-dark wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" style={{ backgroundImage: `url(${IMAGES.about6})` }}>
                            <div className="row">
                                <div className="col-sm-6 d-flex align-items-center mb-4 mb-sm-0">
                                    <div className="video-bx2">
                                        <Link to={"#"} onClick={handleShow} className="video-btn popup-youtube">
                                            <i className="fa fa-play" />
                                        </Link>
                                        <span className="text-white">Play Video</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 ps-sm-4">
                                    <ul className="list-check-try text-white light-green fw-medium">
                                        <li>Teeth Whitening</li>
                                        <li>Modern Anesthetic</li>
                                        <li>Quality Brackets</li>
                                        <li>Root Canal </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-2">
                    <div className="row counter-item">
                        {counterdata.map((data, i) => (
                            <div key={i} className="col-xxl-12 col-sm-4 col-6 wow fadeInRight" data-wow-delay={data.delay} data-wow-duration="0.8s">
                                <div className={`content-bx style-3 m-b30 text-center ${data.columnstand1}`}>
                                    <span className="content-text text-secondary"><span className="counter">{data.count}</span>{data.span}</span>
                                    <h3 className={`title m-b0 ${data.columnstand2}`}>{data.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} centered >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/o8OgzQdA70c?si=Kgb2auDFo3tH4oRZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Modal>
        </>
    )
}
export default Wecare;