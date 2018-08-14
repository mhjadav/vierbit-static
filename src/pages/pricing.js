import React, { Component } from "react"
import Banner from "../components/banner";

class PricingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
                <Banner title="Pricing"/>
                <section id="tw-pricing" className="tw-pricing">
                <div className="container">
                    <div className="row text-center">
                    <div className="col section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.5s', animationName: 'fadeInDown', marginBottom:"0px"}}>
                        <h2>
                        <small>Pricing Table</small>
                        Our <span>Pricing</span>
                        </h2>
                        <span className="animate-border ml-auto mr-auto tw-mt-20" />
                    </div>
                    {/* End Col */}
                    </div>
                    {/* End Section Heading Row */}
                    <div className="row">
                    <div className="col-md-12 mx-auto">
                        <div className="pricing-tab">
                       
                        {/* Nav Tabs ends */}
                      <div className="tab-content tw-tab-content">
                        <div className="tab-pane active" id="monthly">
                            <div className="row animated fadeIn">
                            <div className="col-md-4 animated fadeIn">
                                <div className="tw-pricing-box border-left-radius">
                                <div className="price-icon-bg">
                                    <div className="price-icon">
                                    <img src="/images/pricing/pricing_icon1.png" alt="3 Months Plan" className="img-fluid" />
                                    </div>
                                </div>
                                {/* End Pricing icon bg */}
                                <div className="pricing-feaures">
                                    <h3>3 Months</h3>
                                    <ul>
                                        <li>Domain Name</li>
                                        <li>Web Hosting</li>
                                        <li>Web Design</li>
                                        <li>5 Web Pages</li>
                                        <li>Content Writing</li>
                                        <li>Enquiry Form</li>
                                        <li>24x7 Support</li>
                                    </ul>
                                </div>
                                {/* Pricing Features End */}
                                <div className="pricing-price">
                                    <strong>749</strong>
                                    <sup>₹</sup>

                                </div>
                                {/* Pricing End */}
                                <a rel="noopener noreferrer"  href="http://p-y.tm/z33dXPvDm" target="_blank" className="btn btn-dark">buy now</a>
                                </div>
                                {/*  pricing box ends */}
                            </div>
                            {/* COl end */}
                            <div className="col-md-4 animated fadeIn">
                                <div className="tw-pricing-box pricing-featured">
                                <div className="price-icon-bg">
                                    <div className="price-icon">
                                    <img src="/images/pricing/pricing_icon2.png" alt="12 Months Plan" className="img-fluid" />
                                    </div>
                                </div>
                                {/* End Pricing icon bg */}
                                <div className="pricing-feaures">
                                    <h3>12 Months</h3>
                                    <ul>
                                        <li>Domain Name</li>
                                        <li>Web Hosting</li>
                                        <li>Web Design</li>
                                        <li>10 Web Pages</li>
                                        <li>3 Email Ids</li>
                                        <li>Facebook Page</li>
                                        <li>Google Map</li>
                                        <li>Content Writing</li>
                                        <li>Enquiry Form</li>
                                        <li>24x7 Support</li>
                                    </ul>
                                </div>
                                {/* Pricing Features End */}
                                <div className="pricing-price">
                                    <strong>2399</strong>
                                    <sup>₹</sup>
                                </div>
                                {/* Pricing End */}
                                <a rel="noopener noreferrer" href="http://p-y.tm/z33k9JdA5" className="btn btn-dark">buy now</a>
                                </div>
                                {/*  pricing box ends */}
                            </div>
                            {/* COl end */}
                            <div className="col-md-4 animated fadeIn">
                                <div className="tw-pricing-box border-right-radius">
                                <div className="price-icon-bg">
                                    <div className="price-icon">
                                    <img src="/images/pricing/pricing_icon3.png" alt="6 Months Plan" className="img-fluid" />
                                    </div>
                                </div>
                                {/* End Pricing icon bg */}
                                <div className="pricing-feaures">
                                    <h3>6 Months</h3>
                                    <ul>
                                        <li>Domain Name</li>
                                        <li>Web Hosting</li>
                                        <li>Web Design</li>
                                        <li>7 Web Pages</li>
                                        <li>1 Email Ids</li>
                                        <li>Content Writing</li>
                                        <li>Enquiry Form</li>
                                        <li>24x7 Support</li>
                                    </ul>
                                </div>
                                {/* Pricing Features End */}
                                <div className="pricing-price">
                                    <strong>1349</strong>
                                    <sup>₹</sup>
                                </div>
                                {/* Pricing End */}
                                <a rel="noopener noreferrer" href="http://p-y.tm/z33kI0sIg" className="btn btn-dark">buy now</a>
                                </div>
                                {/*  pricing box ends */}
                            </div>
                            {/* COl end */}
                            </div>
                            <p><small>* All prices include taxes and fees.</small></p>
                            {/* Tab pane end */}
                        </div>
                        {/* Tab Content End */}
                        </div>

                        {/* Row End */}
                        </div>
                        {/* Pricing tab end */}
                    </div>
                    {/* Content Col end */}
                    </div>
                    {/* Content Row End */}
                </div>
                {/* Container End */}
                </section>
            </div>
        );
    }
}

export default PricingPage;
