import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../constant/theme";

function Pagebanner({ title }) {
    return (
        <>
            <div className="dz-bnr-inr style-2 dz-bnr-inr-md">
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <div className="dz-bnr-inr-flex">
                            <div className="bnr-info">
                                <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{title}</h1>
                                <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"> Home</Link></li>
                                        <li className="breadcrumb-item">{title}</li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="bnr-media" data-bottom-top="transform: translateY(-100px)" data-top-bottom="transform: translateY(100px)">
                                <img src={IMAGES.bnr1} alt="" className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item1" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(0px)"><img className="move-1" src={IMAGES.herobanner2} alt="" /></div>
                <div className="item2" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)"><img className="move-2" src={IMAGES.herobanner4} alt="" /></div>
                <div className="item3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)"><img className="move-3" src={IMAGES.herobanner3} alt="" /></div>
                {SVGICONS.bannershape}
                <div className="banner-shape4"></div>
                <div className="banner-shape5"></div>
            </div>
        </>
    )
}
export default Pagebanner;