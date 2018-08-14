import React, {Component } from "react";
import {sendEmail } from "../utils";

import Banner from "../components/banner";
class Contact extends Component {
    constructor(props){
        super();
        this.state = {
            buttonText: "Contact Us"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
    }

    handleSubmit (event) {
        event.preventDefault();
        event.stopPropagation();
        var data = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            emailto: event.target.emailto.value,
            subject: event.target.subject.value,
            message: event.target.message.value
        }
        sendEmail(data);
        this.setState({
            buttonText: "Message Sent"
        })
        this.clearInput(event);
    }
    clearInput (event) {
        event.target.name.value = '';
        event.target.email.value = '';
        event.target.phone.value = '';
        event.target.message.value = '';
        event.target.subject.value = '';

    }
    render () {
        return (
            <div>
                <Banner title="Contact Us"/>
                <section id="main-container" className="main-container">
                    <div className="container">
                        <div className="row">
                        <div className="col text-center">
                            <div className="section-heading">
                            <h2>
                                <small>Contact us</small>
                                Our Contact <span>Details</span>
                            </h2>
                            <span className="animate-border tw-mt-20 tw-mb-40 ml-auto mr-auto" />
                            </div>
                            {/* End Heading */}
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Title Row */}
                        <div className="row">
                        <div className="col-md-4 mx-auto">
                            <div className="tw-contact-box">
                            <div className="contact-heading">
                                <img src="/images/icon/place1.png" alt="" className="img-fluid" />
                                <h3>Ahmedabad</h3>
                            </div>
                            {/* End Content Heading */}
                            <div className="contact-info-box-content">
                                <i className="fa fa-map-marker" />
                                <p>29, Alok Estate, Odhav, Opp. Odhav Ring Road.</p>
                                <i className="fa fa-phone" />
                                <p><a href="tel:+919898226919">+91-98982-26919</a></p>
                                <i className="fa fa-envelope" />
                                <p><a href="mailto:support@vierbit.com">support@vierbit.com</a></p>
                            </div>
                            {/* End content info box */}
                            </div>
                            {/* End Contact Box */}
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                        <div className="row">
                        <div className="col">
                           
                        </div>
                        </div>
                        {/* End Row */}
                    </div>
                    {/* Container End */}
                    </section>
                        <section id="tw-contact-us" className="tw-contact-us bg-offwhite">
                            <div className="container">
                                <div className="row">
                                <div className="col">
                                    <div className="section-heading text-center">
                                    <h2>
                                        <small>leave a message</small>
                                        Give a <span>Message</span>
                                    </h2>
                                    <span className="animate-border border-ash ml-auto mr-auto tw-mt-20 tw-mb-40" />
                                    </div>
                                </div>
                                {/* Col End */}
                                </div>
                                {/* Row End */}
                                <div className="contact-us-form">
                                <form id="contact-form" className="contact-form" onSubmit={ this.handleSubmit }>
                                    <input id="username" name="emailto" type="hidden" value="support@vierbit.com"/>
                                    <div className="error-container" />
                                    <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control form-name" name="name" id="name" placeholder="Name" type="text" autoComplete='name' required />
                                        </div>
                                    </div>
                                    {/* Col end */}
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control form-phone" name="phone" id="phone" placeholder="Phone" autocomplete='tel-national' type="phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control form-email" name="email" id="email" placeholder="Email" autoComplete='email' type="email" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control form-subject" placeholder="Subject" name="subject" id="subject" type="text" autoComplete='subject' required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea className="form-control form-message required-field" id="message" name="message" placeholder="Comments" rows={5} defaultValue={""} required/>
                                        </div>
                                    </div>
                                    {/* Col 12 end */}
                                    </div>
                                    {/* Form row end */}
                                    <div className="text-center">
                                    <button className="btn btn-primary tw-mt-30">{this.state.buttonText}</button>
                                    </div>
                                </form>
                                {/* Form end */}
                                </div>
                                {/* Contact us form end */}
                            </div>
                            {/* Container End */}
                            </section>

               
            </div>
        );
    }
}

export default Contact;