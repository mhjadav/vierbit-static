import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { scrollTop } from "../utils"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }
    selectMenu = (event, menuItem) => {
      scrollTop();
    }

    render() {
        
        return (
            <footer id="tw-footer" className="tw-footer">
            <div className="container">
                  <div className="row">
                        <div className="col-md-12 col-lg-4">
                              <div className="tw-footer-info-box">
                                    <a href="/" className="footer-logo">
                                          Vierbit.com
                                    </a>
                                    <p className="footer-info-text">
                                          Start working with vierbit, we provide everything you need to generate
                                                            awareness, we help you develop website, mobile application, ux
                                                            strategy, drive traffic, connect with customers, and increase
                                                            sales.
                                    </p>
                                   
                              </div>
                              
                              <div className="footer-awarad">
                                    <img src="/images/icon/best.png" alt="" />
                                    <p>Upcoming Leader In Software Development</p>
                              </div>
                        </div>
                        
                        <div className="col-md-12 col-lg-8">
                              <div className="row">
                                    <div className="col-md-6">
                                          <div className="contact-us">
                                                <div className="contact-icon">
                                                      <i className="icon icon-map2"></i>
                                                </div>
                        
                                                <div className="contact-info">
                                                      <h3>Ahmedabad, Gujarat, India</h3>
                                                      <p>29, Alok Estate, Odhav, Opp. Odhav Ring Road.</p>
                                                </div>
                        
                                          </div>
                        
                                    </div>
                        
                                    <div className="col-md-6">
                                          <div className="contact-us contact-us-last">
                                                <div className="contact-icon">
                                                      <i className="icon icon-phone3"></i>
                                                </div>
                        
                                                <div className="contact-info">
                                                      <h3><a href="tel:+919898226919">+91-98982-26919</a></h3>
                                                      <p>Give us a call</p>
                                                </div>
                        
                                          </div>
                        
                                    </div>
                        
                              </div>
                        </div>
                        
                  </div>
            </div>


            <div className="copyright">
                  <div className="container">
                        <div className="row">
                              <div className="col-md-6">
                                    <span>Copyright &copy; 2018, All Right Reserved Vierbit</span>
                              </div>
                  
                              <div className="col-md-6">
                                    <div className="copyright-menu">
                                          <ul>
                                                <li>
                                                      <Link onClick={this.selectMenu} to="/">Home</Link>
                                                </li>
                                                <li>
                                                      <Link onClick={this.selectMenu} to="/about">About Us</Link>
                                                </li>
                                                <li>
                                                      <Link onClick={this.selectMenu}to="/pricing">Pricing</Link>
                                                </li>
                                                <li>
                                                      <Link onClick={this.selectMenu} to="/contact">Contact Us</Link>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                  
                        </div>
                  
                  </div>
                  
            </div>
            
            <div id="back-to-top" className="back-to-top">
                  <button className="btn btn-dark" title="Back to Top">
                        <i className="fa fa-angle-up"></i>
                  </button>
            </div>
      </footer>
        );
    }

}

export default Footer;