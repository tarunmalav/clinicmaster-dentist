import AppointmentData from "../../component/apponimentdata";
import Pagebanner from "../../component/pagebanner";
import Question from "../../component/questions";
import ScrollTopButton from "../../component/scrolltotop";
import Servicesdata from "../../component/servicesdata";
import WhyChoose from "../../component/whychoose";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

function Services() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Services' />
                <section className="content-inner gradient-primary">
                    <div className="container">
                        <div className="row">
                            <Servicesdata />
                        </div>
                    </div>
                </section>
                <section className="content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg4})`, backgroundSize: 'cover', }}>
                    <div className="container">
                        <WhyChoose />
                    </div>
                </section>
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
                <Question />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default Services;