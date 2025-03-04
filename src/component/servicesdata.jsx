import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import { useState } from "react";
import { servicedata } from "../constant/alldata";

function Servicesdata() {
    const [hover, setHover] = useState(2);
    return (
        <>
            {servicedata.map((data, i) => {
                return (
                    <div className="col-xl-3 col-md-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                        <div className={`icon-bx-wraper style-7 box-hover ${hover === data.id ? 'active' : ''}`} onMouseEnter={() => setHover(data.id)}>
                            <div className="bg" style={{ backgroundImage: `url(${IMAGES.bg7})` }}></div>
                            <div className="icon-bx">
                                <span className="icon-cell">
                                    {data.svg}
                                </span>
                            </div>
                            <div className="icon-content">
                                <h3 className="dz-title">{data.title}</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            </div>
                            <div className="dz-media">
                                <img src={data.image} alt="" />
                            </div>
                            <div className="icon-footer">
                                <Link to="/service-detail-2" className="icon-link-hover-end">View All Details <i className="feather icon-arrow-right-circle" /></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default Servicesdata;