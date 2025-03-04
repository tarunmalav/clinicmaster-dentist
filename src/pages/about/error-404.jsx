import { Link } from "react-router-dom";
import Pagebanner from "../../component/pagebanner";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

function Error404() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Error 404' />
                <section className="error-page style-2 overflow-hidden content-inner-1">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="dz-error-media">
                                    <img src={IMAGES.error} alt="" />
                                </div>
                            </div>
                            <div className="col-md-5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="inner-content">
                                    <h2 className="dz-error">Oops!</h2>
                                    <p className="text">We couldn’t find the page you were looking for</p>
                                    <Link to="/" className="btn btn-primary btn-hover1">Go back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Error404;