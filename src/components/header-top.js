import React, { Component } from "react"

class HeaderTop extends Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }
      
    render() {
        return (
            <div className="tw-top-bar bg-white top-bar-lite">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 text-md-center">
                    {/* <div className="top-social-links">
                        <span>Follow us:</span>
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-google-plus" /></a>
                        <a href="#"><i className="fa fa-instagram" /></a>
                    </div> */}
                    </div>
                    {/* Col End */}
                    <div className="col-lg-8 text-md-center">
                    <div className="top-contact-info">
                        <span><a href="tel:+919898226919"><i className="icon icon-phone3" /> +91-98982-26919</a></span>
                        <span><a href="mailto:supporyt@viervit.com"><i className="icon icon-envelope"/> support@vierbit.com</a></span>
                        <span><i className="icon icon-map-marker2" />29, Alok Estate, Odhav, Opp. Odhav Ring Road.</span>
                    </div>
                    </div>
                    {/* Col end */}
                </div>
                {/* Row End */}
                </div>
                {/* Container End */}
            </div>
        );
    }
}

export default HeaderTop;
