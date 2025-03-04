import BestDentist from "../../component/bestdentist";
import ClientSwiper from "../../component/clientswiper";
import MapForm from "../../component/mapform";
import Pagebanner from "../../component/pagebanner";
import ScrollTopButton from "../../component/scrolltotop";
import TestiSwiper from "../../component/testimonialswiper";
import WantApponiment from "../../component/wantapponiment";
import Wecare from "../../component/wecare";
import Wecare2 from "../../component/wecare2";
import WhyChoose from "../../component/whychoose";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

function AboutUs() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='About Us' />
                <section className="content-inner overlay-primary-gradient-light overlay-opacity-10" style={{ backgroundImage: `url(${IMAGES.bg4})` }}>
                    <div className="container">
                        <Wecare />
                        <Wecare2 />
                    </div>
                </section>
                <section className="content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg4})`, backgroundSize: 'cover', }}>
                    <div className="container">
                        <WhyChoose />
                    </div>
                </section>
                <section className="content-inner p-t50 bg-light">
                    <div className="container">
                        <BestDentist />
                    </div>
                </section>
                <section className="content-inner gradient-primary overflow-hidden">
                    <TestiSwiper />
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <MapForm />
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <ClientSwiper />
                        </div>
                    </div>
                </section>
                <WantApponiment />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default AboutUs;