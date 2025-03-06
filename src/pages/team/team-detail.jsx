import { Link } from "react-router-dom";
import Pagebanner from "../../component/pagebanner";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import AppointmentData from "../../component/apponimentdata";
import ScrollTopButton from "../../component/scrolltotop";
import CountUp from "react-countup";

function TeamDetail() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Team Details' />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-b30">
                                <aside className="side-bar sticky-top">
                                    <div className="widget wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                        <div className="dz-team style-6">
                                            <div className="dz-media">
                                                <img src={IMAGES.about2} alt="/" />
                                            </div>
                                            <ul className="dz-social">
                                                <li><Link to="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin" /></Link></li>
                                                <li><Link to="https://www.instagram.com/dexignzone" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link to="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link to="https://www.x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /></Link></li>
                                                <li><Link to="https://www.linkedin.com/@dexignzone" target="_blank"><i className="fa-brands fa-youtube" /></Link></li>
                                            </ul>
                                            <div className="item1">
                                                <div className="info-widget style-10 move-3">
                                                    <span className="content-text text-primary"><span className="counter"><CountUp end={20} duration={5} /></span>+</span>
                                                    <h3 className="title m-b0">Years <br /> Experienced</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-6">
                                <div className="section-head style-1 mb-30">
                                    <h2 className="titlev fw-semibold m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Dr. Nashid Martines</h2>
                                    <p className="text-primary m-b20 fw-normal small wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">MBBS (Village Town), USA (Cardiac Surgery)</p>
                                    <p className="fw-normal small wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                    <p className="fw-normal small wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                </div>
                                <table className="table table-border-bottom m-b40 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                    <tbody>
                                        <tr>
                                            <th>Specialty</th>
                                            <td>Orthodontist Surgeon Specialize</td>
                                        </tr>
                                        <tr>
                                            <th>Degrees</th>
                                            <td><Link to={"#"}>MBBS University of California</Link></td>
                                        </tr>
                                        <tr>
                                            <th>Experience</th>
                                            <td>20+ years, New York Urgent Medical Care Serving California</td>
                                        </tr>
                                        <tr>
                                            <th>Time</th>
                                            <td> Monday - Friday 08:00 - 20:00<br />
                                                Saturday 09:00 - 18:00<br />
                                                Sunday 09:00 - 18:00
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Awards</th>
                                            <td>2018 - 2019 : William Allan Award</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 className="font-20 m-b25 wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">Professional Skills</h3>
                                <div className="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                                    <div className="progress-info">
                                        <span className="title">Radiant Skin Dermatology</span>
                                        <span className="progress-value">90%</span>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Radiant Skin Dermatology" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.6s" data-wow-duration="0.8s">
                                    <div className="progress-info">
                                        <span className="title">Flawless Dermatology</span>
                                        <span className="progress-value">78%</span>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Flawless Dermatology" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{ width: '78%' }}></div>
                                    </div>
                                </div>
                                <div className="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.8s" data-wow-duration="0.8s">
                                    <div className="progress-info">
                                        <span className="title">Luminous Dermatology</span>
                                        <span className="progress-value">95%</span>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Luminous Dermatology" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-map-pin" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Address</h5>
                                        <p>1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-phone" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Call Us</h5>
                                        <p>
                                            <Link to="tel:+01234567890" className="text-body">+0 123-456-7890</Link><br />
                                            <Link to="tel:+09876543210" className="text-body">+0 987-654-3210</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-mail" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Send us a Mail</h5>
                                        <p>
                                            <Link to="mailto:info@example.com" className="text-body">info@example.com</Link><br />
                                            <Link to="mailto:clinicmaster@example.com" className="text-body">clinicmaster@example.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-clock" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Opening Time</h5>
                                        <p>Mon-Thu: 8:00am-5:00pm <br /> Fri: 8:00am-1:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default TeamDetail;