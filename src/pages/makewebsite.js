import React, {Component } from "react";
import {makeaWebsiteApi} from "../utils";

import Banner from "../components/banner";
class makeWebsite extends Component {
    constructor(props){
        super();
        this.state = {
            buttonText: "Submit"
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
            company: event.target.company.value,
            domain: event.target.domain.value,
            tenure: event.target.tenure.value,
            details: event.target.details.value
        };
        makeaWebsiteApi(data);
        this.setState({
            buttonText: "We will get back to you soon."
        })
        this.clearInput(event);
    }
    clearInput (event) {
        event.target.name.value = '';
        event.target.email.value = '';
        event.target.phone.value = '';
        event.target.company.value = '';
        event.target.domain.value = '';
        event.target.tenure.value = '';
        event.target.details.value = '';

    }
    render () {
        return (
            <div>
                <Banner title="Let's Get Online"/>
                
            <section id="tw-contact-us" className="tw-contact-us bg-offwhite">
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <div className="section-heading text-center">
                        <h2>
                            <small>One step away from taking your business online</small>
                            Create a Free <span>Website</span>
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
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control form-subject" placeholder="Company Name" name="company" id="company" type="text" autoComplete='company' required />
                            </div>
                        </div>
                        {/* Col end */}
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control form-phone" name="phone" id="phone" placeholder="Phone" autoComplete='tel-national' type="phone" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control form-email" name="email" id="email" placeholder="Email" autoComplete='email' type="email" required />
                            </div>
                        </div>
                       
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control form-email" name="domain" id="domain" placeholder="Prefered domain name" autoComplete='domain' type="text" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <select className="form-control form-select" name="tenure" id="tenure">
                                    <option value="">Select Tenure</option>
                                    <option value="3">3 Months</option>
                                    <option value="6">6 Months</option>
                                    <option value="12">1 Year</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="col-lg-12">
                            <div className="form-group">
                                <textarea className="form-control form-message required-field" id="details" name="details" placeholder="Describe your buissiness" rows={5} defaultValue={""} required/>
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

export default makeWebsite;