import { useRef } from "react";
import { IMAGES } from "../constant/theme";
import emailjs from '@emailjs/browser';

function MapForm() { 
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
            <div className="row">
                <div className="col-xl-7 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                    <div className="map-wrapper style-1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin&zoomcontrol=false" width="600" height="450" style={{ border: '0', }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="item1">
                            <div className="info-widget style-16">
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
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                    <div className="form-wrapper style-1 m-l40">
                        <div className="form-body bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg2png})`, backgroundSize: 'cover', backgroundPosition: 'bottom right', }}>
                            <div className="section-head style-1 m-b30">
                                <h2 className="title text-white">Get in Touch <br /> With us</h2>
                            </div>
                            <form  ref={form} onSubmit={sendEmail}className="dzForm row" method="POST">
                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                <div className="dzFormMsg"></div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzFirstName" type="text" className="form-control" id="inputYourName2" placeholder="First Name" />
                                        <label htmlFor="inputYourName2">First Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzLastName" type="text" className="form-control" id="inputLastName2" placeholder="Last Name" />
                                        <label htmlFor="inputLastName2">Last Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzPhoneNumber" type="number" className="form-control dz-number" id="inputPhoneNumber2" placeholder="Phone Number" />
                                        <label htmlFor="inputPhoneNumber2">Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <input name="dzEmail" type="email" className="form-control" id="inputYourEmail2" placeholder="Your Email" />
                                        <label htmlFor="inputYourEmail2">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b30">
                                    <div className="form-floating floating-underline input-light">
                                        <textarea name="dzMessage" className="form-control" id="inputMessage" rows="6" placeholder="Select Service"></textarea>
                                        <label htmlFor="inputMessage">Message</label>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button type="submit" name="submit" value="submit" className="btn btn-lg btn-icon btn-white btn-shadow">
                                        Appointment <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MapForm;