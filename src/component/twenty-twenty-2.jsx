import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { IMAGES } from '../constant/theme';
import { Link } from 'react-router-dom';

const FIRST_IMAGE = {
    imageUrl: IMAGES.beforecomapare1,
};
const SECOND_IMAGE = {
    imageUrl: IMAGES.aftercomapare1,
};
function Twentytwenty2() {
    return (
        <>
            <div className="bg-light bg-half-bottom">
                <div className="container">
                    <div className="twentytwenty-box shadow wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <div className="twentytwenty-container">
                            <ReactBeforeSliderComponent firstImage={FIRST_IMAGE} secondImage={SECOND_IMAGE} />
                        </div>
                        <Link to="/about-us-2" className="btn btn-white rounded btn-sm position-absolute end-0 bottom-0 me-md-4 mb-md-4 me-2 mb-2">View All</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Twentytwenty2;