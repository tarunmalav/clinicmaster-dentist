import Pagebanner from "../../component/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { IMAGES } from "../../constant/theme";
import AppointmentData from "../../component/apponimentdata";
import Question from "../../component/questions";
import Faqdata from "../../component/faqdata";
import ScrollTopButton from "../../component/scrolltotop";

function Faqs() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title="Faq's" />
                <Question />
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-2 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">Flexible Pricing Plans</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <Faqdata />
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default Faqs;