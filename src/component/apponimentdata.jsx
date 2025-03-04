import { IMAGES } from "../constant/theme";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown } from "react-bootstrap";

function AppointmentData() {
    const [startDate, setStartDate] = useState(new Date());
    const [selectCat, setSelectCat] = useState("Department");
    const [selectCatt, setSelectCatt] = useState("Doctor Name");
    return (
        <>
            <div className="row">
                <div className="col-lg-8">
                    <div className="content-info">
                        <div className="section-head style-3 m-b40">
                            <h2 className="title text-white m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Make An <span className="text-yellow">Appointment</span></h2>
                        </div>
                        <div className="form-wrapper">
                            <div className="form-body">
                                <form action="../assets/script/contact_smtp.php" className="dzForm" method="POST">
                                    <input type="hidden" className="form-control" name="dzToDo" value="Appointment" />
                                    <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                    <div className="dzFormMsg"></div>
                                    <div className="row g-3">
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.8s">
                                            <div className="form-floating floating-outline input-light">
                                                <input name="dzName" type="text" className="form-control" id="inputYourName" placeholder="Your Name" />
                                                <label htmlFor="inputYourName">Your Name</label>
                                                <span className="input-group-text"><i className="feather icon-user" /></span>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                            <div className="form-floating floating-outline input-light">
                                                <input name="dzEmail" type="email" className="form-control" id="inputYourEmail" placeholder="Your Email" />
                                                <label htmlFor="inputYourEmail">Your Email</label>
                                                <span className="input-group-text"><i className="feather icon-mail" /></span>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.8s">
                                            <div className="form-floating floating-outline input-light">
                                                <div className="input-group">
                                                    <DatePicker className="form-control" selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        placeholderText="Date Time"
                                                        dateFormat="Pp"
                                                    >
                                                        <label htmlFor="dateTimePickerOnly">Date Time</label>
                                                        <span className="input-group-text">
                                                            <i className="feather icon-calendar" />
                                                        </span>
                                                    </DatePicker>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            <div className="form-floating floating-outline input-light">
                                                <Dropdown className="bs-select form-control">
                                                    <Dropdown.Toggle as="div" className="p-1"> {selectCat} </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => setSelectCat("Department")}>Department</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCat("Angioplasty")}>Angioplasty</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCat("Cardiology")}>Cardiology</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCat("Dental")}>Dental</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCat("Eye Care")}>Eye Care</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="0.8s">
                                            <div className="form-floating floating-outline input-light">
                                                <Dropdown className="form-control bs-select">
                                                    <Dropdown.Toggle as="div" className="p-1"> {selectCatt} </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => setSelectCatt("Doctor Name")}>Doctor Name</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCatt("Nashid Martines")}>Nashid Martines</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCatt("Kenneth Fong")}>Kenneth Fong</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                            <button type="submit" name="submit" value="submit" className="btn btn-lg btn-icon btn-white shadow-sm w-100">
                                                <span className="w-100">Appointment</span>
                                                <span className="right-icon bg-primary"><i className="feather icon-arrow-right" /></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="col-lg-4 align-self-end">
                    <div className="content-media wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                        <img src={IMAGES.about1} alt="" />
                    </div>
                </div>
            </div >
        </>
    )
}
export default AppointmentData;