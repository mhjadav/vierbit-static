import React, { Component } from "react"

class Mission extends Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }
      
    render() {
        return (
            <section id="tw-mission" className="tw-mission testimonial-default-bg">
                    <div className="container">
                        <div className="row">
                                <div className="col-md-12">
                                    <div className="mission-carousel owl-carousel carousel-black-dots">
                                            <div className="row">
                                                <div className="col-md-6 mr-auto align-self-md-center">
                                                        <img src="/images/about/our_mission.png" alt="" className="img-fluid" />
                                                </div> 
                                                <div className="col-md-6">
                                                        <div className="mission-body">
                                                            <div className="mission-title tw-mb-40">
                                                                    <h2 className="column-title text-black">Our Mission</h2>
                                                                    <span className="animate-border bg-white border-yellow tw-mt-20"></span>
                                                            </div>
                                                            <p>
                                                                We’re a handpicked team of Web & Mobile App developer, digital strategists, designers, and developers united together in
                                                                creating fresh experiences for your organisation.
                                                            </p>
                                                        </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Mission;
