import React from "react";
import clientImg from "../../public/pic3.jpg";

const Testimonial = () => {
    return(
        <div className="section-full  p-t80 testimonial-1-outer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="left wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left"></div>
                                <div>What our client say</div>
                                <div className="sep-leaf-right"></div>
                            </div>
                            <h2>Happy WIth Customers & Clients</h2>
                            <p>I feel very happy and be proud to connect with this industry. i presume this is a very
                                productive and professional industry.i wish very good luck & success for this
                                industry</p>
                            <a href="#" className="site-button site-btn-effect">Contact Us</a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="testimonial-1-content-outer">
                            <div className="testimonial-1-content owl-carousel  owl-btn-top-right long-arrow-next-prev">
                                <div className="item">
                                    <div className="testimonial-1 bg-white">
                                        <div className="testimonial-content">
                                            <div className="testimonial-pic-block">
                                                <div className="testimonial-pic">
                                                    <img src={clientImg.src} alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-text">
                                                <i className="fa fa-quote-left"></i>
                                                <p>This is not just another nail salon! These ladies are super talented!
                                                    My nails have never looked/felt more amazing!! the environment here
                                                    is so happy and cheery!</p>
                                            </div>
                                            <div className="testimonial-detail clearfix">
                                                <div className="testimonial-info">
                                                    <span
                                                        className="testimonial-name  title-style-2 site-text-secondry">Malcolm Franzcrip</span>
                                                    <span
                                                        className="testimonial-position title-style-2 site-text-primary">Contractor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hilite-large-title title-style-2">
                <span>Client says</span>
            </div>
        </div>
    )
}

export default Testimonial;