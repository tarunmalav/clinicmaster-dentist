import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import { footerdata } from "../constant/alldata";    
import { useRef } from "react";
import emailjs from '@emailjs/browser';
function Footer() {
    const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        emailjs.sendForm('service_61hny88', 'template_vvlidif', e.target, 'd9b2e0f5fc72cb94792110e8ff2028f3-us16')
		  .then((result) => {
			  console.log('SUCCESS!',result.text);
		  }, (error) => {
			  console.log('FAILED...',error.text);
		  });
		  e.target.reset()
	};	
    return (
        <>
            <footer className="site-footer style-1 footer-dark" style={{ backgroundImage: `url(${IMAGES.bg5})` }}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-sm-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="widget widget_about me-2">
                                    <div className="footer-logo logo-white">
                                        <Link to="/"><img src={IMAGES.logowhite} alt="" /></Link>
                                    </div>
                                    <p><span className="text-white">ClinicMaster</span> Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh.</p>
                                    <div className="widget-rating2">
                                        <img src={IMAGES.google} alt="" />
                                        <div className="clearfix">
                                            <div className="d-flex">
                                                <ul className="star-list">
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                </ul>
                                                <span className="rating ms-1">(4.8)</span>
                                            </div>
                                            <span className="text">12k+ ratings on google</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {footerdata.map((data, i) => (
                                <div className="col-xl-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" key={i}>
                                    <div className="widget widget_services">
                                        <h2 className="footer-title">{data.title} </h2>
                                        <ul className="list-hover1">
                                            <li><Link to={data.link1}><span>{data.span1}</span></Link></li>
                                            <li><Link to={data.link2}><span>{data.span2}</span></Link></li>
                                            <li><Link to={data.link3}><span>{data.span3}</span></Link></li>
                                            <li><Link to={data.link4}><span>{data.span4}</span></Link></li>
                                            <li><Link to={data.link5}><span>{data.span5}</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="container">
                        <div className="fm-inner">
                            <div className="row align-items-center g-lg-5 g-4">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title">Important Updates Waiting for you</h2>
                                    <p>Get our latest and best contents right into your inbox</p>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <form className="dzSubscribe style-1"  ref={form} onSubmit={sendEmail}>
                                        <div className="dzSubscribeMsg"></div>
                                        <div className="form-group">
                                            <div className="input-group mb-0">
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email Address" />
                                                <div className="input-group-addon">
                                                    <button name="submit" value="Submit" type="submit" className="btn btn-secondary btn-hover1">
                                                        <span className="btn-text">Subscribe Now</span>
                                                        <span className="btn-icon">
                                                            <i className="fa-solid fa-paper-plane" />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="fb-inner">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 text-start">
                                    <p className="copyright-text">© <span className="current-year">2025</span> <Link to="https://themeforest.net/user/dexignzone" target="_blank">DexignZone</Link> Theme. All Rights Reserved.</p>
                                </div>
                                <div className="col-lg-6 col-md-12 text-end">
                                    <ul className="nav-inline">
                                        <li> <Link to="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin" /> </Link> </li>
                                        <li> <Link to="https://www.instagram.com/dexignzone" target="_blank"><i className="fa-brands fa-instagram" /> </Link> </li>
                                        <li> <Link to="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /> </Link> </li>
                                        <li> <Link to="https://www.x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /> </Link> </li>
                                        <li> <Link to="https://www.linkedin.com/@dexignzone" target="_blank"><i className="fa-brands fa-youtube" /> </Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;