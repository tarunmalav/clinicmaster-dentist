import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import CountUp from "react-countup";

function BestDentist() {
    return (
        <>
            <div className="row content-wrapper style-9 align-items-end">
                <div className="col-xl-6 col-lg-6 m-b30">
                    <div className="section-head style-2 m-b30">
                        <div className="sub-title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Best Dentist</div>
                        <h2 className="title wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">About Dr. Nashid Martines</h2>
                        <p className="fw-normal wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s"><strong className="text-secondary fw-semibold">Dr. Nashid Martines</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                    <h3 className="text-primary title-dashed-separator wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">About Skills</h3>
                    <ul className="list-check text-secondary fw-medium grid-2 m-b35 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                        <li>Root Canal Therapy</li>
                        <li>Dental Examinations</li>
                        <li>Endodontic Surgery</li>
                        <li>X-Rays and Imaging</li>
                        <li>Cracked Tooth Treatment</li>
                        <li>Oral Cancer Screenings</li>
                    </ul>
                    <div className="row align-items-center g-4">
                        <div className="col-sm-6 d-flex wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">
                            <div className="text-center">
                                <img src={IMAGES.sign} alt="" />
                                <span className="font-14 d-block">Dr. Nashid Martines</span>
                            </div>
                        </div>
                        <div className="col-sm-6 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                            <Link to="/appointment" className="btn btn-lg btn-icon btn-primary"> Appointment
                                <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 m-b30">
                    <div className="content-media">
                        <div className="dz-media" data-bottom-top="transform: translateY(30px)" data-top-bottom="transform: translateY(-30px)">
                            <img src={IMAGES.about2} alt="" />
                        </div>
                        <div className="item1" data-bottom-top="transform: translateY(-20px)" data-top-bottom="transform: translateY(10px)">
                            <div className="info-widget style-10 move-3">
                                <span className="content-text text-primary"><span className="counter"><CountUp end={20} duration={5} /></span>+</span>
                                <h3 className="title m-b0">Years <br /> Experienced</h3>
                            </div>
                        </div>
                        <div className="item2" data-bottom-top="transform: translateY(-20px)" data-top-bottom="transform: translateY(10px)">
                            <div className="dz-img-box style-1 move-4">
                                <div className="dz-media">
                                    <img src={IMAGES.logo1} alt="" />
                                </div>
                                <div className="dz-content">
                                    <h3 className="title">ClinicMaster 2025</h3>
                                    <p>Quality and Accreditation Institute</p>
                                    <Link to={"#"} className="btn-link">Best Dermatologists</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestDentist;