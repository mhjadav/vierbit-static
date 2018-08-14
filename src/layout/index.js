import React, { Component } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import HeaderTop from "../components/header-top";

//Import external css - used inside template
import '../css/font-awesome.min.css';
import "../css/animate.css";
import "../css/icofonts.css";
import "../css/bootstrap.min.css"
import "../css/owlcarousel.min.css";
import "../css/magnific-popup.css";
import "../css/style.css";
import "../css/responsive.css";

class Layout extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
        <div>
            <HeaderTop />
            <Header />
            {this.props.children}
            <Footer />
        </div>
    );
  }
}

export default Layout;
