import { Link } from "react-router-dom";
import Pagebanner from "../../component/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import WantApponiment from "../../component/wantapponiment";
import CompareSwiper from "../../component/compareswiper";
import { service2data } from "../../constant/alldata";
import Faqdata from "../../component/faqdata";
import ScrollTopButton from "../../component/scrolltotop";

function Services2() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Services 2' />
                <section className="content-inner p-b20">
                    <div className="container">
                        {service2data.map((data, i) => (
                            <div className={`dz-img-box style-3 ${data.columnstand}`} key={i}>
                                <div className="dz-media wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="dz-content wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <div className="dz-number">{data.number}</div>
                                    <h2 className="title">{data.title}</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <Link to="/service-detail-2" className="btn btn-primary icon-link-hover-end radius-sm">View All Details <i className="feather icon-arrow-right-circle" /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <CompareSwiper />
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-2 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">Flexible Pricing Plans</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <Faqdata />
                    </div>
                </section>
                <WantApponiment />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default Services2;