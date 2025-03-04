import AppointmentData from "../../component/apponimentdata";
import Pagebanner from "../../component/pagebanner";
import Wecare2 from "../../component/wecare2";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import ContactMap from "../../component/contactmap";
import ScrollTopButton from "../../component/scrolltotop";

function Appointment() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Appointment' />
                <section className="content-inner overlay-primary-gradient-light overlay-opacity-10" style={{ backgroundImage: `url(${IMAGES.bg4})` }}>
                    <div className="container">
                        <Wecare2 />
                    </div>
                </section>
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
                <ContactMap />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default Appointment;