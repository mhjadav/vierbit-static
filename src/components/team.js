import React, { Component } from "react"

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }
      
    render() {
        return (
            <section id="tw-team" className="tw-team">
                    <div className="container">
                        <div className="row">
                                <div className="col text-center">
                                    <div className="section-heading tw-mb-80">
                                            <h2>
                                                <small>our team</small>
                                                Our Best
                                                <span> Experts</span>
                                            </h2>
                                            <span className="animate-border tw-mt-20 ml-auto mr-auto"></span>
                                    </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-md-3">
                                    <div className="tw-team-box">
                                            <div className="team-img">
                                                <img src="/images/team/dipak.jpg" alt="" className="img-fluid bg-green" />
                                            </div>
                                            <div className="team-info">
                                                <h3 className="team-name">Dipak Dhamnani</h3>
                                                <p className="team-designation">Product Manager</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="tw-team-box">
                                            <div className="team-img">
                                                <img src="/images/team/expert2.png" alt="" className="img-fluid bg-green" />
                                            </div>
                                            <div className="team-info">
                                                <h3 className="team-name">Piyush Valani</h3>
                                                <p className="team-designation">HR Manager</p>
                                            </div>
                                    </div>
                                </div> 
                                <div className="col-md-3">
                                    <div className="tw-team-box">
                                            <div className="team-img">
                                                <img src="/images/team/puni.jpg" alt="" className="img-fluid bg-blue" />
                                            </div>
                                            <div className="team-info">
                                                <h3 className="team-name">Punit Lad</h3>
                                                <p className="team-designation">Bussiness Developer</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="tw-team-box">
                                            <div className="team-img">
                                                <img src="/images/team/mahipat.jpg" alt="" className="img-fluid bg-blue" />
                                            </div>
                                            <div className="team-info">
                                                <h3 className="team-name">Mahipat Jadav</h3>
                                                <p className="team-designation">Software Engineer</p>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Team;
