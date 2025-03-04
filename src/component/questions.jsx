import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import { accordiondata2, accordionnavdata } from '../constant/alldata';

function Question() {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <>
            <section className="content-inner-1">
                <div className="container">
                    <div className="section-head style-1 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <h2 className="title">Have any questions?</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 m-b40 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="search_widget">
                                <form className="dzSearch">
                                    <div className="form-group">
                                        <div className="input-group mb-0">
                                            <input name="dzSearch" type="search" className="form-control" placeholder="Type your question here" />
                                            <div className="input-group-addon">
                                                <button name="dzSearch" value="search" className="btn">
                                                    <i className="icon feather icon-search" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-10">
                            <ul className="nav nav-pills nav-pills-outline m-b50 justify-content-center wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s" id="pills-tab" role="tablist">
                                {accordionnavdata.map((data, ii) => (
                                    <li className="nav-item" role="presentation" key={ii}>
                                        <button id={data.id} data-bs-toggle="pill" data-bs-target={data.target} type="button" role="tab" aria-controls={data.id}
                                            className={`nav-link ${activeTab === data.i ? 'active' : ''}`}
                                            aria-selected={activeTab === data.i ? 'true' : 'false'}
                                            onClick={() => handleTabClick(data.i)}
                                        > {data.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="tab-content wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s" id="pills-tabContent">
                                <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="pills-target-tabs1" role="tabpanel" aria-labelledby="pills-tab1" tabIndex="0">
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata2.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="pills-target-tabs2" role="tabpanel" aria-labelledby="pills-tab2" tabIndex="0">
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata2.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`} id="pills-target-tabs3" role="tabpanel" aria-labelledby="pills-tab3" tabIndex="0">
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata2.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 4 ? 'show active' : ''}`} id="pills-target-tabs4" role="tabpanel" aria-labelledby="pills-tab4" tabIndex="0">
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata2.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 5 ? 'show active' : ''}`} id="pills-target-tabs5" role="tabpanel" aria-labelledby="pills-tab5" tabIndex="0">
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata2.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-inner-1 p-t0">
                <div className="container">
                    <div className="content-bx style-7 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <div className="clearfix">
                            <h2 className="dz-title">Still have questions?</h2>
                            <p className="m-b0">Can’t find the answer you’re looking for. Please chat to our friendly team.</p>
                        </div>
                        <div className="flex-btn">
                            <Link to="/contact-us" className="btn btn-primary btn-hover1">Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Question;