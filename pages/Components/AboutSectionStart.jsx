import React from "react";
import s1Img from "../../public/2.jpg";
import isoImg from "../../public/iso_b.jpeg";
import yearsImg from "../../public/25_years.jpeg";

const AboutSectionStart = () => {
    return(
        <div className="section-full welcome-section-outer">
            <div className="welcome-section-top bg-white p-tb80">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-12">
                            <div className="img-colarge">
                                <div className="colarge-1">
                                    <img src={s1Img.src} alt="" className="slide-righ" />
                                    </div>
                                <div className="since-year-outer">
                                    <div className="since-year"><span>Since</span><strong>2023</strong></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="welcom-to-section">

                                <div className="left wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                        <div className="sep-leaf-left"></div>
                                        <div>Welcome to Kal-Polymers</div>
                                        <div className="sep-leaf-right"></div>
                                    </div>
                                </div>
                                <h2>We Are Here to Increase Your Knowledge With Experience</h2>
                                <ul className="site-list-style-one">
                                    <li>Quality Control System , 100% Satisfaction Guarantee</li>
                                    <li>Unrivalled Workmanship, Professional and Qualified</li>
                                    <li>Environmental Sensitivity, Personalised Solutions</li>
                                </ul>

                                <p>Progressively maintain extensive infomediaries via extensible nich. Capitalize on low
                                    hanging fruit. a ballpark value added is activity to beta test. Override the digital
                                    divide with additional click throughs from fruit to identify a ballpark value
                                    added.</p>

                                <div className="welcom-to-section-bottom d-flex justify-content-between">
                                    <div className="welcom-btn-position">
                                        <a href="#" className="site-button-secondry site-btn-effect">More
                                        About</a></div>
                                    <div className="welcom-sign-pic">
                                        <img src={isoImg.src} width={100} alt=""/>
                                    </div>
                                    <div className="welcom-sign-info">
                                        <img src={yearsImg.src} width={100} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default AboutSectionStart