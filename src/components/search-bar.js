import React, { Component } from "react"
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }
      
    render() {
        return (
            <div>
                <div className="search-bar">
                    <i className="fa fa-close" />
                    <form className="search-bar-fixed" action="#">
                    <input type="text" placeholder="search..." />
                    <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                </div>
                {/*End Search bar */}
                <div className="offcanvas-menu">
                    <div className="offcanvas-menu-overlay" />
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="offcanvas-wrapper">
                            <div className="offcanvas-inner">
                            <a href="index.html" className="logo">
                                <img src="/images/logo/logo.png" alt />
                            </a>
                            <p>Start working with an company that can provide everything you need to generate awareness, drive traffic,
                                connect with customers, and increase sales montes, nascetur ridiculus mus</p>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="contact-us">
                                    <div className="contact-icon">
                                    <i className="icon icon-map2" />
                                    </div>
                                    {/* End contact Icon */}
                                    <div className="contact-info">
                                    <h3>New York, USA</h3>
                                    <p>1010 Grand Avenue</p>
                                    </div>
                                    {/* End Contact Info */}
                                </div>
                                {/* End Contact Us */}
                                </div>
                                {/* End Col */}
                                <div className="col-md-12">
                                <div className="contact-us">
                                    <div className="contact-icon">
                                    <i className="icon icon-phone3" />
                                    </div>
                                    {/* End contact Icon */}
                                    <div className="contact-info">
                                    <h3>009-215-5596</h3>
                                    <p>Give us a call</p>
                                    </div>
                                    {/* End Contact Info */}
                                </div>
                                {/* End Contact Us */}
                                </div>
                                {/* End Col */}
                                <div className="col-md-12">
                                <div className="contact-us">
                                    <div className="contact-icon">
                                    <i className="icon icon-envelope2" />
                                    </div>
                                    {/* End contact Icon */}
                                    <div className="contact-info">
                                    <h3>mail@example.com</h3>
                                    <p>24/7 online support</p>
                                    </div>
                                    {/* End Contact Info */}
                                </div>
                                {/* End Contact Us */}
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Contact Row */}
                            
                           
                            </div>
                            {/* Offcanvas inner end */}
                            <button className="menu-close-btn"><i className="fa fa-close" /></button>
                        </div>
                        {/* Offcanvas wrapper end */}
                        </div>
                        {/* Col End */}
                    </div>
                    {/* Row End */}
                    </div>
                    {/* Container End */}
                </div>
                {/* Off canvas menu End */}
            </div>
        );
    }
}

export default SearchBar;