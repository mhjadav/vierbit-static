import React, {Component } from "react";
import Mission from "../components/mission";
import Team from "../components/team";
import Reviews from "../components/reviews";

import Banner from "../components/banner";
class About extends Component {
    componentDidMount(){
        const $ = window.$;
        $(".timeline-wrapper .row").hover(function () {
            $(".timeline-item").find(".timeline-badge").removeClass("active");
            $(this).find(".timeline-badge").addClass("active");
         });
         $(".timeline-wrapper .row").hover(function () {
            $(".timeline-item").find(".timeline-date").removeClass("active");
            $(this).find(".timeline-date").addClass("active");
         });
    }
    render () {
        return (
            <div>
                <Banner title="About Us"/>
                <section id="main-container" className="main-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tw-about-bin">
                                    <h2 className="column-title">About Vierbit</h2>
                                    <span className="animate-border tw-mb-40 tw-mt-20"></span>
                                    <p>
                                        We provide value to hundreds of businesses and organisations through affordable, high-quality IT services. Whatever industry
                                        sector your business is in, our friendly and highly-skilled staff of IT professionals will deliver
                                        a seamless and secure productivity environment for your company. Vierbit Solutions provides a
                                        range of Managed Information Technology Services designed to accelerate business productivity,
                                        from expert installation and implementation to remote and on-site system management and offer
                                        a proven service portfolio to customers for complete managed IT solutions and implementation
                                        services. Vierbit – We work with new IT technology & creativity.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 align-self-md-center">
                                <img src="images/about/about_page_img1.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

               <section id="tw-mission" className="tw-mission testimonial-default-bg">
                    <div className="container">
                        <div className="row">
                                <div className="col-md-12">
                                    <div className="mission-carousel owl-carousel carousel-black-dots">
                                            <div className="row">
                                                <div className="col-md-6 mr-auto align-self-md-center">
                                                        <img src="images/about/our_mission.png" alt="" className="img-fluid" />
                                                </div> 
                                                <div className="col-md-6">
                                                        <div className="mission-body">
                                                            <div className="mission-title tw-mb-40">
                                                                    <h2 className="column-title text-black">Why Vierbit?</h2>
                                                                    <span className="animate-border bg-white border-yellow tw-mt-20"></span>
                                                            </div>
                                                            <p>
                                                            Technology changes daily and at Vierbit team has helped use the latest technology to ensure maximum network uptime. By using their proactive managed IT services, we have ensured that our network is secure and our employees have access to a team of technical support team in a prompt and effective manner.
                                                            </p>
                                                        </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </section>
                <section id="tw-timeline" className="tw-timeline">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 timeline-item left-part">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <p className="details">Our promising journey started on 01 March 2018
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 timeline-item ">
                                            <div className="timeline-date left-part">
                                                <p className="title">2018</p>
                                                <p className="tagline">Started Vierbit</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 timeline-item">
                                            <div className="timeline-date">
                                                <p className="title">2018</p>
                                                <p className="tagline">Got First Client</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 timeline-item">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <p className="details">Got first client on 15 March 2018
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 timeline-item">
                                            <div className="timeline-date">
                                                <p className="title">Future</p>
                                                <p className="tagline">Build It Better</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Mission />
                <Team />
                <Reviews />
            </div>
        );
    }
}

export default About;