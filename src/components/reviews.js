import React, { Component } from "react"

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }
      
    render() {
        return (
            <section id="tw-testimonial" className="tw-testimonial">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                                <div className="col-md-6 wow fadeInLeft" data-wow-duration="1s">
                                    <div className="tw-testimonial-content text-center">
                                            <h2 className="section-title">Love From Clients</h2>
                                            <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto"></span>
                                    </div>
                                    <div className="tw-testimonial-carousel owl-carousel">
                                            <div className="tw-testimonial-wrapper">
                                                <div className="testimonial-bg testimonial-bg-orange">
                                                        <div className="testimonial-icon">
                                                            <img src="/images/icon-image/testimonial1.png" alt="" className="img-fluid" />
                                                        </div>
                                                </div>
                                                <div className="testimonial-text">
                                                        <p>Vierbit has very skilled developers in javascript which is exactly what I
                                                            needed. Because of them, I was able to bring this project to new levels.
                                                            He implemented every new idea quickly and proficiently. If you are
                                                            looking for a javascript expert, I can highly recommend Vierbit.
                                                        </p>
                                                        <div className="testimonial-meta">
                                                            <h4>
                                                                    Peter Waycik
                                                                    <small>CEO, Math-Drill.Com</small>
                                                            </h4>
                                                            <i className="icon icon-quote2"></i>
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

export default Reviews;
