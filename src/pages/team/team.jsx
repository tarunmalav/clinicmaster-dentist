import BestDentist from "../../component/bestdentist";
import HighlyTeam from "../../component/highlyteam";
import MapForm from "../../component/mapform";
import Pagebanner from "../../component/pagebanner";
import ScrollTopButton from "../../component/scrolltotop";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

function Team() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Team' />
                <section className="content-inner">
                    <div className="container">
                        <HighlyTeam />
                    </div>
                </section>
                <section className="content-inner p-t50 bg-light">
                    <div className="container">
                        <BestDentist />
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <MapForm />
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default Team;