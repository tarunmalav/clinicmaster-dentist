import { useState } from "react";
import { IMAGES } from "../constant/theme";
import { Link } from "react-router-dom";
import { wecaredata2 } from "../constant/alldata";

function Wecare2() {
    const [hover, setHover] = useState(2);
    return (
        <>
            <div className="row counter-reset">
                {wecaredata2.map((data, i) => (
                    <div className="col-xl-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                        <div className={`icon-bx-wraper style-6 counter-increment box-hover ${hover === data.id ? 'active' : ''}`} onMouseEnter={() => setHover(data.id)}>
                            <div className="bg" style={{ backgroundImage: `url(${IMAGES.bg7})` }}></div>
                            <div className="icon-bx">
                                <span className="icon-cell">
                                    {data.icon}
                                </span>
                            </div>
                            <div className="icon-content">
                                <h3 className="dz-title">{data.title}</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                <Link to="/service-detail" className="icon-link-hover-end m-t30 d-block">Read More <i className="feather icon-arrow-right-circle" /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Wecare2;