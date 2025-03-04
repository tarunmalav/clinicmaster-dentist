import { Link } from "react-router-dom";
import ContactMap from "../../component/contactmap";
import WantApponiment from "../../component/wantapponiment";
import { IMAGES, SVGICONS } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import ScrollTopButton from "../../component/scrolltotop";
import emailjs from '@emailjs/browser';
import { useRef } from "react";


function Contactus() {
    const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        emailjs.sendForm('service_61hny88', '__ejs-test-mail-service__', e.target, 'd9b2e0f5fc72cb94792110e8ff2028f3-us16')
		  .then((result) => {
			  console.log('SUCCESS!',result.text);
		  }, (error) => {
			  console.log('FAILED...',error.text);
		  });
		  e.target.reset()
	};	
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <div className="dz-bnr-inr style-2 dz-bnr-inr-md dz-bnr-content">
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <div className="dz-bnr-inr-flex">
                                <div className="bnr-info">
                                    <h1 className="fw-semibold wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Contact Information</h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Thank you for visiting our website. We are here to assist you with any inquiries you may have.</p>
                                    <div className="info-widget style-16 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                        <div className="row g-xl-5 g-4">
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="icon-bx-wraper style-1 align-items-center">
                                                    <div className="icon-bx bg-primary">
                                                        <span className="icon-cell">
                                                            <i className="feather icon-clock" />
                                                        </span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dz-title fw-semibold">Working Hours:</h5>
                                                        <p>Mon-Thu: 8:00am-5:00pm<br /> Fri: 8:00am-1:00pm</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="icon-bx-wraper style-1 align-items-center">
                                                    <div className="icon-bx bg-secondary">
                                                        <span className="icon-cell">
                                                            <i className="feather icon-mail" />
                                                        </span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dz-title fw-semibold">Office Address:</h5>
                                                        <p>764 15768 Delmer Shoals, <br /> Eliasport, FL 04331-6195</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="tel:+11234567890" className="btn btn-xl btn-icon btn-primary btn-rounded btn-shadow mb-3 mb-sm-0 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                        <span className="left-icon"> <i className="feather icon-phone-call" /> </span> +1 123 456 7890
                                    </Link>
                                </div>
                                <div className="form-wrapper style-1 m-l40 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                    <div className="form-body bg-white">
                                        <div className="section-head style-1 m-b30">
                                            <h2 className="title">Ask a Question</h2>
                                            <p>If you have any questions, you can contact us. Please, fill out the form below.</p>
                                        </div>
                                        <form  ref={form} onSubmit={sendEmail} className="dzForm row" method="POST">
                                            <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                            <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                            <div className="dzFormMsg"></div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline">
                                                    <input name="dzFirstName" type="text" className="form-control" id="inputYourName2" placeholder="First Name" />
                                                    <label htmlFor="inputYourName2">First Name</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline">
                                                    <input name="dzLastName" type="text" className="form-control" id="inputLastName2" placeholder="Last Name" />
                                                    <label htmlFor="inputLastName2">Last Name</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline">
                                                    <input name="dzPhoneNumber" type="number" className="form-control dz-number" id="inputPhoneNumber2" placeholder="Phone Number" />
                                                    <label htmlFor="inputPhoneNumber2">Phone Number</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline">
                                                    <input name="dzEmail" type="email" className="form-control" id="inputYourEmail2" placeholder="Phone Number" />
                                                    <label htmlFor="inputYourEmail2">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 m-b30">
                                                <div className="form-floating floating-underline">
                                                    <textarea name="dzMessage" className="form-control" id="inputMessage" rows="6" placeholder="Select Service"></textarea>
                                                    <label htmlFor="inputMessage">Message</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" name="submit" value="submit" className="btn btn-lg btn-icon btn-primary btn-shadow">
                                                    Submit Now <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item1"><img className="move-1" src={IMAGES.herobanner2} alt="" /></div>
                    <div className="item2"><img className="move-2" src={IMAGES.herobanner4} alt="" /></div>
                    <div className="item3"><img className="move-3" src={IMAGES.herobanner3} alt="" /></div>
                    {SVGICONS.bannershape}
                    <div className="banner-shape4"></div>
                    <div className="banner-shape5"></div>
                </div>
                <ContactMap />
                <WantApponiment />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default Contactus;