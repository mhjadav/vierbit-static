import React, { Component } from "react"
import classNames from "classnames"
import { Link } from 'react-router-dom';
import {scrollTop, findADomain, findADomainSuggest} from "../utils"
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
              selectedMenu: 'home',
              showSearchBar:false,
              isSearchClicked: false,
              isDomainAvilable: false,
              domainSuggetionsList:[],
              domainMessage: ""
        }
    }
   selectMenu = (event, menuItem) => {
      scrollTop();
    }

    handleClickSearchBar = (event) => {
      this.setState({
            showSearchBar: !this.state.showSearchBar
      })
    }

    handleSubmitFindADomain = (event) => {
      event.preventDefault();
      event.stopPropagation();
      let domainName = event.target.domain.value;
      this.setState({
            isSearchClicked: true,
            isDomainAvilable:false,
            domainName:''
      });
      const getDomainDetail = async () => {
            const domainDetails = await findADomain(domainName);
            this.setState({
                  isDomainAvilable:domainDetails.data.available,
                  domainName,
                  domainMessage: domainDetails.data.available ? " is available" : "is not available"
            });
            if(!domainDetails.data.available){
                  this.setState({
                        suggetionsMessage: "Loading suggetions..."
                  });

                  var domainSuggetions = await findADomainSuggest(domainName);
                  this.setState({
                        suggetionsMessage: "Selected just for you:",
                        domainSuggetionsList: domainSuggetions.data

                  })
            }
      }

      if(domainName){
            if(domainName.indexOf('.') <= -1){
                  domainName += ".com";
            }
            this.setState({
                  domainMessage: "Checking..."      
            });
            getDomainDetail();
      }
    }

    render() {
      const searchBarClass = classNames({
            'search-bar': true,
            'active': this.state.showSearchBar
      });
      const titleClassNames = classNames({
            'hide': !this.state.isSearchClicked
      });
        return (
            <div>
            <div className={searchBarClass}>
                  <i className="fa fa-close" onClick={this.handleClickSearchBar} />
                  <form  onSubmit={this.handleSubmitFindADomain} className="search-bar-fixed">
                        <input type="text" placeholder="Find your domain..." name="domain"/>
                        <button type="submit"><i className="fa fa-search" /></button>
                        
                        <div className={titleClassNames}>
                              <h4 className="tw-slider-title" style={{marginTop: "15px", fontSize: "30px", marginBottom: "-15px" }}>
                                    <span><i className="text-white">{this.state.domainName}</i> {this.state.domainMessage}</span>   
                              </h4>
                              {this.state.isDomainAvilable &&
                                    <a rel="noopener noreferrer" href={`https://in.godaddy.com/dpp/find?checkAvail=1&tmskey=&domainToCheck=${this.state.domainName}`} target="_blank" className="btn btn-warning tw-mt-30">buy now</a>
                              }
                              <div className="tab-content tw-tab-content">
                              <div className="tab-pane show active" id="monthly">
                              <h2 className="text-white"><span>{this.state.suggetionsMessage}</span></h2>
                              <div className="row animated fadeIn" style={{float: 'left'}}>
                              {
                                    this.state.domainSuggetionsList.map((item, index) => {
                                          return <div className="col-md-4 animated fadeIn" style={{borderRadius: 0}}>
                                                      <div className="tw-pricing-box border-right-radius" style={{ background: "none"}}>
                                                      <div className="pricing-feaures">
                                                            <h3 className="text-white">{item.domain}</h3>
                                                      </div>
                                                
                                                      <a rel="noopener noreferrer" href={`https://in.godaddy.com/dpp/find?checkAvail=1&tmskey=&domainToCheck=${item.domain}`} target="_blank" className="btn btn-dark">buy now</a>
                                                      </div>
                                                </div>              
                                    })
                              }
                              </div>
                              </div>
                              </div>
                        </div>
                  </form>
            </div>

            <header className="header-transparent header-absolute">
                  <div className="tw-header header-dark">
                        <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light dark-nav nav-transparent">
                        <Link className="navbar-brand tw-nav-brand" to="/" onClick={this.selectMenu}>
                              <img src="/images/logo/logo.png" alt="vierbit.com" />
                             <h3 style={{color: "#F9D30E",fontSize:"2.2rem"}}>
                             <p style={{"lineHeight": "5px", "color": "white", "marginLeft": "3px"}}>#letsgetonline</p>
                             </h3>
                        </Link>
                        {/* End of Navbar Brand */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon" />
                        </button>
                        {/* End of Navbar toggler */}
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                              <ul className="navbar-nav">
                              <li className="nav-item">
                              <Link className="nav-link" to="/" onClick={this.selectMenu}>
                                    Home
                              </Link>
                              {/* End of Dropdown menu */}
                              </li>
                              <li className="nav-item">
                              <Link className="nav-link" to="/pricing" onClick={this.selectMenu}>
                                    Pricing
                              </Link>
                              {/* End of Dropdown menu */}
                              </li>
                              {/* End Dropdown */}
                              <li className="nav-item">
                              <Link className="nav-link" to="/about" onClick={this.selectMenu}>
                                    About Us
                              </Link>
                              {/* End of Dropdown menu */}
                              </li>
                              
                              <li className="nav-item" onClick={this.selectMenu}>
                                    <Link className="nav-link" to="/contact">Contact</Link>
                              </li>

                              <li className="nav-item" onClick={this.handleClickSearchBar}>
                                    <Link className="nav-link" to="/contact">Find a Domain</Link>
                              </li>
                              <li className="nav-item">
                                    <Link className="nav-link" to="/makeawebsite">Make a Website</Link>
                              </li>
                              </ul>
                              {/* End Navbar Nav */}
                        </div>
                        {/* End of navbar collapse */}
                        
                        {/* End of offcanvas */}
                        </nav>
                        {/* End of Nav */}
                        </div>
                        {/* End of Container */}
                  </div>
                  {/* End tw head */}
                  </header>
            </div>
        );
    }
}

export default Header;