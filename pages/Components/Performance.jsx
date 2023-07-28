import React from "react";
import backImg from "../../public/slide1.jpg";

const Performance = () => {
    return(
        <div
            className="section-full p-t80 p-b70 overlay-wraper bg-no-repeat bg-bottom-left bg-cover services-main-section"
            style={{backgroundImage:`url(./slide1.jpg)`}}
        >
            <div className="overlay-main site-bg-secondry opacity-08"></div>
            <div className="section-content services-section-content">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="services-section-content-left">

                            <div className="left wt-small-separator-outer text-white">
                                <div className="wt-small-separator site-text-primary">
                                    <div className="sep-leaf-left"></div>
                                    <div>The Best Plastic recycling</div>
                                    <div className="sep-leaf-right"></div>
                                </div>
                                <h2>High Performance Services For Multiple Insdustries And Technologies!</h2>
                                <p>Progressively maintain extensive infomediaries via extensible niches.
                                    Capitalize on low hanging fruit to identify a ballpark value added is activity to
                                    beta test.
                                    Override the igital divide with additional click throughs from fruit to identify a
                                    ballpark value added.
                                </p>
                                <a href="#" className="site-button site-btn-effect">Contact Us</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Performance;