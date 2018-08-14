import React, { Component } from "react"

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }
      
    render() {
        return (
           <div id="banner-area" className="banner-area" style={{background: "url('/static/media/slider-banner-2.bfab7607.jpg')", backgroundSize: "cover", backgroundPosition: "right center"}}>
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="banner-heading">
                    <h1 className="banner-title">{this.props.title}</h1>
                    {/* <ol className="breadcrumb">
                        <li>Home</li>
                        <li><a href="#">{this.props.title}</a></li>
                    </ol> */}
                    </div>
                </div>
                {/* Col end */}
                </div>
                {/* Row end */}
            </div>
            {/* Container end */}
            </div>

        );
    }

}
export default Banner;