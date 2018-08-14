import React, {Component } from "react";
import {sendSubscriptionEmail} from '../utils';
import Reviews from "../components/reviews";

class Home extends Component {
    constructor(props){
        super();
        this.state = {
            contactButtonText: "Contact Us"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        window.$(".tw-hero-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            mouseDrag: false,
            smartSpeed: 1100,
            navText: ['<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">'],
         });
    }
    handleSubmit (event) {
        event.preventDefault();
        event.stopPropagation();
        var data = {
            email: event.target.email.value,
            emailto: event.target.emailto.value,
            subject: "Thanks from Vierbit",
            message: "Thanks you for connecting with us, we will get back to you soon.",
            phone: '+91-9898226919',
            name:"Vierbit"
        }
        sendSubscriptionEmail(data);
        event.target.email.value = '';
        this.setState({
            contactButtonText: "Message Sent"
        })
    }
    render () {
        return (
            <div>
                <div className="tw-hero-slider owl-carousel slider-bg-dark owl-loaded">
                        <div className="slider-3 tw-slider-bg-dark">
                            <div className="slider-arrow">
                                    <img src="/images/slider/pattern_arrow2.png" alt="sliderArrow1" />
                                    <img src="/images/slider/pattern_arrow1.png" alt="sliderArrow2" />
                                    <img src="/images/slider/pattern_arrow3.png" alt="sliderArrow3" />
                            </div>
                            <div className="slider-wrapper d-table">
                                    <div className="slider-inner d-table-cell">
                                        <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-6">
                                                            <img src="/images/slider/slider3.png" alt="" className="img-fluid slider-img" />
                                                    </div>

                                                    <div className="col-md-6">
                                                            <div className="slider-content slider-content-dark">
                                                                <h1>At Vierbit
                                                                        <span> We work with new technology & creativity.</span>
                                                                </h1>
                                                                <h4 className="text-white">Start working with vierbit, we provide everything you need to generate
                                                                        awareness, we offer you IT consulting, Software outsourcing, Website desing, Web hosting, SEO, Online marketing, We help you to connect with customers, and increase sales.
                                                                </h4>
                                                            </div>
                        
                                                    </div>
                        
                                                </div>
                        
                                        </div>
                        
                                    </div>
                        
                            </div>
                        
                        </div>
                        
                </div>
      <section id="tw-features" className="tw-features-area">
        <div className="container">
            <div className="row tw-mb-65">
            <div className="col-md-4 wow fadeInLeft" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft'}}>
                <h2 className="column-title text-md-right text-sm-center">Best Web<br /> Development Services!</h2>
            </div>
            {/* Col End */}
            <div className="col-md-7 ml-md-auto wow fadeInRight" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight'}}>
                <h5 className="features-text" style={{"fontWeight": "100"}}>
                At vierbit we have the best team of technical experts & designers, All our experts have very good experience in software consultation,
                which help us deliver to best quality software on time.
                </h5>
            </div>
            {/* Col End */}
            </div>
            {/* End Row 1 */}
            <div className="row">
            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
                <div className="features-box">
                <div className="features-icon d-table">
                    <div className="features-icon-inner d-table-cell">
                    <img src="/images/icon/feature1.png" alt="" />
                    </div>
                    {/* End Features icon inner */}
                </div>
                {/* End Features Icon */}
                <h3>Blazing-fast website developer</h3>
                <p>At vierbit we builds the fastest possible website. Instead of waiting to download pages when requested,  delivere instantly to your users wherever they are.
                </p>
                </div>
                {/* End Single Features */}
            </div>
            {/* Col End */}
            <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".4s" style={{visibility: 'visible', animationDuration: '1.6s', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
                <div className="features-box">
                <div className="features-icon d-table">
                    <div className="features-icon-inner d-table-cell">
                    <img src="/images/icon/feature2.png" alt="" />
                    </div>
                    {/* End Features Icon inner */}
                </div>
                {/* End Features Icon */}
                <h3>Future-proof your website</h3>
                <p>
                    Don't build a website with last decade's tech. The future of the web is mobile, Every website is a web app and every web app is a website.
                </p>
                </div>
                {/* End Single Features */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-duration="1.9s" data-wow-delay=".6s" style={{visibility: 'visible', animationDuration: '1.9s', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
                <div className="features-box">
                <div className="features-icon d-table">
                    <div className="features-icon-inner d-table-cell">
                    <img src="/images/icon/feature3.png" alt="" />
                    </div>
                    {/* End Features Icon inner */}
                </div>
                {/* End Features Icon */}
                <h3>Grow together</h3>
                <p>When you succeed, we succeed. See what it looks like when your vierbit has your back.
                </p>
                </div>
                {/* End Single Features */}
            </div>
            {/* End col */}
            </div>
            {/* End Row 2 */}
        </div>
        {/* End Container */}
        </section>

                <section id="work-process" className="work-process">
                    <div className="work-bg-pattern d-none d-lg-inline-block">
                        <img src="/images/process/work_process.png" alt="" className="img-fluid wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1.2s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '1.2s', animationName: 'fadeInLeft'}} />
                    </div>
                    {/* End Work BG Pattern */}
                    <div className="container">
                        <div className="row text-center">
                        <div className="col section-heading wow fadeInDown" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInDown'}}>
                            <h2>
                            <small>ease steps</small>Our Working <span>Process</span></h2>
                            <span className="animate-border ml-auto mr-auto tw-mt-20" />
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                        <div className="row">
                        <div className="col-md-3">
                            <div className="tw-work-process">
                            <div className="process-wrapper d-table wow zoomIn" data-wow-duration="1s" data-wow-delay=".2s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'zoomIn'}}>
                                <div className="process-inner d-table-cell">
                                <img src="/images/icon/process1.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                            {/* End process wrapper */}
                            <p>01. Research Project</p>
                            </div>
                            {/* End Tw work process */}
                        </div>
                        {/* End Col */}
                        <div className="col-md-3">
                            <div className="tw-work-process">
                            <div className="process-wrapper bg-orange d-table wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'zoomIn'}}>
                                <div className="process-inner d-table-cell">
                                <img src="/images/icon/process2.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                            {/* End Process Wrapper */}
                            <p>02. Find Ideas</p>
                            </div>
                            {/* End Word Process */}
                        </div>
                        {/* End Col */}
                        <div className="col-md-3">
                            <div className="tw-work-process">
                            <div className="process-wrapper bg-blue d-table wow zoomIn" data-wow-duration="1s" data-wow-delay=".6s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.6s', animationName: 'zoomIn'}}>
                                <div className="process-inner d-table-cell">
                                <img src="/images/icon/process3.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                            {/* End Process Wrapper */}
                            <p>03. Start Optimize</p>
                            </div>
                            {/* End Work Process */}
                        </div>
                        {/* End Col */}
                        <div className="col-md-3">
                            <div className="tw-work-process">
                            <div className="process-wrapper bg-yellow d-table wow zoomIn" data-wow-duration="1s" data-wow-delay=".8s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.8s', animationName: 'zoomIn'}}>
                                <div className="process-inner d-table-cell">
                                <img src="/images/icon/process4.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                            {/* End PRocess Wrapper */}
                            <p>04. Reach Target</p>
                            </div>
                            {/* End Work Process */}
                        </div>
                        {/* End Col */}
                        <div className="col-md-12 text-center wow zoomIn" data-wow-duration="1s" data-wow-delay="1.2s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '1.2s', animationName: 'zoomIn'}}><a  className="btn btn-primary tw-mt-80" style={{visibility:"hidden"}}>Get Started</a></div>
                        </div>
                        {/* End Row */}
                    </div>
                {/* End Container */}
                </section>
                <section id="tw-analysis" className="tw-analysis-area">
                <div className="analysis-bg-pattern d-none d-md-inline-block">
                    <img className="wow fadeInUp" src="/images/check-seo/cloud.png" alt="" style={{visibility: 'visible', animationName: 'fadeInUp'}} />
                    <img className="wow fadeInUp" src="/images/check-seo/cloud2.png" alt="" style={{visibility: 'visible', animationName: 'fadeInUp'}} />
                    <img className="wow fadeInUp" src="/images/check-seo/announce.png" alt="" style={{visibility: 'visible', animationName: 'fadeInUp'}} />
                    <img className="wow fadeInUp" src="/images/check-seo/chart.png" alt="" style={{visibility: 'visible', animationName: 'fadeInUp'}} />
                </div>
                {/* End Analysis Pattern img */}
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-8 text-center wow fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                        <h2 className="column-title">
                        Let's Get
                        <span className="text-white"> Online</span>
                        </h2>
                        <div className="analysis-form">
                        <form className="form-vertical" onSubmit={ this.handleSubmit }>
                            <input id="emailto" name="emailto" type="hidden" value="support@vierbit.com"/>
                            <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-12 no-padding">
                                <div className="form-group tw-form-round-shape">
                                <input type="email" id="email" name="email" placeholder="Your Email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 no-padding">
                                <div className="form-group">
                                <input type="submit" defaultValue={this.state.contactButtonText} />
                                </div>
                            </div>
                            </div>
                        </form>
                        {/* End Form */}
                        </div>
                        {/* End Analysis form */}
                    </div>
                    {/* Col End */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End container */}
                </section>

                <section id="tw-service" className="tw-service" style={{ backgroundImage:  'url(/static/media/wave.22113e89.png)', "backgroundRepeat": "no-repeat", backgroundPosition: "bottom center" }}>
                    <div className="container">
                        <div className="row text-center">
                        <div className="col section-heading wow fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                            <h2>
                            <small>Our services</small>
                            Our Best
                            <span> Services</span>
                            </h2>
                            <span className="animate-border ml-auto mr-auto tw-mt-20" />
                        </div>
                        {/* Title Col End */}
                        </div>
                        {/* Title Row End */}
                        <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".2s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'zoomIn'}}>
                            <div className="service-icon service-icon-bg-1 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src="/images/icon/service1.png" alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service icon end */}
                            <div className="service-content">
                                <h3>Website Development</h3>
                            </div>
                            {/* Service Content end */}
                            </div>
                            {/* Service box end */}
                        </div>
                        {/* Col End */}
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'zoomIn'}}>
                            <div className="service-icon service-icon-bg-2 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src="/images/icon/service2.png" alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service icon end */}
                            <div className="service-content">
                                <h3>Digital Marketing</h3>
                            </div>
                            {/* Service content end */}
                            </div>
                            {/* Service box End */}
                        </div>
                        {/* Col End */}
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".6s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.6s', animationName: 'zoomIn'}}>
                            <div className="service-icon service-icon-bg-3 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src="/images/icon/service3.png" alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service Icon End */}
                            <div className="service-content">
                                <h3>Data Analysis</h3>
                            </div>
                            {/* Service content end */}
                            </div>
                            {/* Service box End */}
                        </div>
                        {/* Col end */}
                        </div>
                        {/* Row end */}
                        <div className="tw-mb-60" />
                        <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".2s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'zoomIn'}}>
                            <div className="service-icon service-icon-bg-4 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src="/images/icon/service4.png" alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service icon end */}
                            <div className="service-content">
                                <h3>Mobile App Development</h3>
                            </div>
                            {/* Service content end */}
                            </div>
                            {/* Service Box end */}
                        </div>
                        {/* Col end */}
                        {/* Row End */}
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".6s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.6s', animationName: 'zoomIn'}}>
                            <div className="service-icon service-icon-bg-6 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src="/images/icon/service6.png" alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service Icon end*/}
                            <div className="service-content">
                                <h3>Social Media Marketing</h3>
                            </div>
                            {/* Service Content end */}
                            </div>
                            {/* Service box end*/}
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'zoomIn'}}>
                            <div className="service-icon service-icon-bg-5 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src="/images/icon/service5.png" alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service icon end */}
                            <div className="service-content">
                                <h3>Web Designing</h3>
                            </div>
                            {/* Service content end */}
                            </div>
                            {/* Service box end */}
                        </div>
                        {/* Col end */}
                        </div>
                        {/* Row End */}
                    </div>
                    {/* container */}
                    </section>
                    <Reviews />
            </div>
        );
    }
}

export default Home;