import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/home";
import AboutUs from "../pages/about/about-us";
import AboutUs2 from "../pages/about/about-us-2";
import Appointment from "../pages/about/appointment";
import PricingTable from "../pages/about/pricing-table";
import Testimonial from "../pages/about/testimonial";
import Faqs from "../pages/about/faqs";
import Error404 from "../pages/about/error-404";
import Team from "../pages/team/team";
import TeamDetail from "../pages/team/team-detail";
import Services from "../pages/services/services";
import Services2 from "../pages/services/services-2";
import ServiceDetail from "../pages/services/service-detail";
import ServicesDetail2 from "../pages/services/service-detail-2";
import BlogGrid from "../pages/blog/blog-grid";
import BlogListSidebar from "../pages/blog/blog-list-sidebar";
import BlogDetail from "../pages/blog/blog-details";
import Contactus from "../pages/contactus/contact-us";

function Root() {
    return (
        <>
            <div className="page-wraper">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="about-us-2" element={<AboutUs2 />} />
                        <Route path="appointment" element={<Appointment />} />
                        <Route path="pricing-table" element={<PricingTable />} />
                        <Route path="testimonial" element={<Testimonial />} />
                        <Route path="faqs" element={<Faqs />} />
                        <Route path="error-404" element={<Error404 />} />
                        <Route path="team" element={<Team />} />
                        <Route path="team-detail" element={<TeamDetail />} />
                        <Route path="services" element={<Services />} />
                        <Route path="services-2" element={<Services2 />} />
                        <Route path="service-detail" element={<ServiceDetail />} />
                        <Route path="service-detail-2" element={<ServicesDetail2 />} />
                        <Route path="blog-grid" element={<BlogGrid />} />
                        <Route path="blog-list-sidebar" element={<BlogListSidebar />} />
                        <Route path="blog-details" element={<BlogDetail />} />
                        <Route path="contact-us" element={<Contactus />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}
export default Root;