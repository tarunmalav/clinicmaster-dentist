import { Link } from "react-router-dom";
import Pagebanner from "../../component/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Sidebar from "../../component/sidebar";
import { blogdata } from "../../constant/alldata";
import ScrollTopButton from "../../component/scrolltotop";

function BlogListSidebar() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Blog List Sidebar' />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-12 m-b30">
                                <div className="row loadmore-content">
                                    {blogdata.map((data, i) => (
                                        <div className="col-12 m-b30 wow fadeInUp" data-wow-delay={data.dealy} data-wow-duration="0.8s" key={i}>
                                            <div className="dz-card style-1 blog-half blog-half-2">
                                                <div className="dz-media">
                                                    <img src={data.image} alt="" />
                                                </div>
                                                <div className="dz-info">
                                                    <h3 className="dz-title"><Link to="/blog-details">The Art of Managing Business and Patient Care</Link></h3>
                                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                                    <div className="info-bottom">
                                                        <div className="dz-meta">
                                                            <ul>
                                                                <li className="post-date">17 May 2025</li>
                                                                <li className="post-author">By <Link to={"#"}>Nashid Martines</Link></li>
                                                            </ul>
                                                        </div>
                                                        <Link to="/blog-details" className="btn btn-square btn-secondary rounded-circle">
                                                            <i className="feather icon-arrow-up-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="text-center m-t30 m-lg-t0 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                                        <Link to={"#"} className="btn btn-lg btn-icon btn-secondary dz-load-more" rel="ajax/blog-grid ">
                                            Load More <span className="right-icon"><i className="feather icon-refresh-ccw" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 m-b30">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default BlogListSidebar;