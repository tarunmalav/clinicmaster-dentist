import AppointmentData from "../../component/apponimentdata";
import CompareSwiper from "../../component/compareswiper";
import Pagebanner from "../../component/pagebanner";
import PricingPlan from "../../component/pricingplan";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Question from "../../component/questions";
import Twentytwenty2 from "../../component/twenty-twenty-2";
import ScrollTopButton from "../../component/scrolltotop";

function PricingTable() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Pricing Table' />
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-2 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">Flexible Pricing Plans</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <PricingPlan />
                    </div>
                </section>
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
                <CompareSwiper />
                <Twentytwenty2 />
                <Question />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default PricingTable;