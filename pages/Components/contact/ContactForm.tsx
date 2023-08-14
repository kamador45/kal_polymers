import React from "react";

const ContactForm = () => {
    return(
        <div className={"section-full  p-t80 p-b50 bg-cover"} style={{backgroundImage:"url(/images/background/bg-7.jpg)"}}>
            <div className={"section-content"}>
                <div className={"container"}>
                    <div className={"contact-one"}>
                        <div className={"row  d-flex justify-content-center flex-wrap"}>
                            <div className={"col-lg-6 col-md-6 m-b30"}>
                                <form className={"cons-contact-form"}>
                                    <div className={"section-head left wt-small-separator-outer"}>
                                        <div className={"wt-small-separator site-text-primary"}>
                                            <div className={"sep-leaf-left"}></div>
                                            <div>Contact Form</div>
                                            <div className={"sep-leaf-righ"}></div>
                                        </div>
                                        <h2>Get In Touch</h2>
                                    </div>

                                    <div className={"row"}>
                                        <div className={"col-lg-12 col-md-12"}>
                                            <div className={"form-group"}>
                                                <input type="text" className={"form-control"} required={true} placeholder={"Name"}/>
                                            </div>
                                        </div>

                                        <div className={"col-lg-12 col-md-12"}>
                                            <div className={"form-group"}>
                                                <input type="email" className={"form-control"} required={true} placeholder={"Email"}/>
                                            </div>
                                        </div>

                                        <div className={"col-lg-12 col-md-12"}>
                                            <div className={"form-group"}>
                                                <input type="Phone" className={"form-control"} required={true} placeholder={"Phone"}/>
                                            </div>
                                        </div>

                                        <div className={"col-lg-12 col-md-12"}>
                                            <div className={"form-group"}>
                                                <input type="Subject" className={"form-control"} required={true} placeholder={"Subject"}/>
                                            </div>
                                        </div>

                                        <div className={"col-lg-12 col-md-12"}>
                                            <div className={"form-group"}>
                                                <textarea rows={6} className={"form-control"} required={true} placeholder={"Message"}/>
                                            </div>
                                        </div>

                                        <div className={"col-md-12"}>
                                            <button type={"button"} className={"site-button site-btn-effect"}>Submit Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;