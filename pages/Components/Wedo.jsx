import React from "react";
import WeImg from "../../public/wedo.jpg";
const Wedo = () => {
    return(
        <div className="section-full p-t80 p-b70 bg-gray what-we-do-section">
            <div className="container">
                <div className="section-content what-we-do-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="whatWedo-media-section">
                                <div className="wt-media">
                                    <img src={WeImg.src} alt="" />
                                </div>
                                <div className="whatWedo-media-content text-white">
                                    <div className="whatWedo-media-inner">
                                        <h3>Team Working Dedicatedly</h3>
                                        <p>We have 26+ years of experience with providing wide area of specialty
                                            services works listed below</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="whatWedo-info-section">
                                <div className="left wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                        <div className="sep-leaf-left"></div>
                                        <div>What We do</div>
                                        <div className="sep-leaf-right"></div>
                                    </div>
                                    <h2>Providing Full Range of High Services Solution Worldwide</h2>
                                    <p>Progressively maintain extensive infomediaries via extensible niches</p>

                                </div>
                                <div className="wt-icon-card-outer">
                                    <div className="wt-icon-card bg-white shadow">
                                        <div className="wt-card-header"><i
                                            className="flaticon-robotic-arm site-text-primary"></i><span
                                            className="title-style-2 site-text-secondry">A Full Services</span></div>
                                        <div className="wt-card-content"><p>We are Providing the best plastic around the world</p></div>
                                    </div>

                                    <div className="wt-icon-card bg-white shadow">
                                        <div className="wt-card-header"><i
                                            className="flaticon-repair site-text-primary"></i><span
                                            className="title-style-2 site-text-secondry">All Plastic hight quality</span></div>
                                        <div className="wt-card-content"><p>We are Prous to Protect your organization
                                            with our award-winning products</p></div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="hilite-large-title title-style-2">
                <span>What we do</span>
            </div>
        </div>
    )
}

export default Wedo;