import React from "react";
import Link from "next/link";


const Services = () => {
    return(
        <div className={"section-full p-t80 p-b40 bg-no-repeat bg-bottom-right bg-cover"} style={{backgroundImage:'url(/images/background/bg-7.jpg)'}}>
            <div className={"container"}>
                <div className={"section-content"}>
                    <div className={"section-head center wt-small-separator-outer text-center"}>
                        <div className={"wt-small-separator site-text-primary"}>
                            <div className={"sep-leaf-left"}></div>
                            <div>The Best Industry Services</div>
                        </div>
                    </div>
                    <h2>
                        High Performance Services For Multiple Insdustries And Technologies!
                    </h2>
                </div>

                <div className={"row d-flex justify-content-center"}>
                    <div className={"col-lg-4 col-md-6 col-sm-12 m-b50"}>
                        <div className={"service-border-box"}>
                            <div className={"wt-box service-box-1 bg-white"}>
                                <div className={"service-box-title title-style-2 site-text-secondry"}>
                                    <span  className="s-title-one">Polymers</span>
                                </div>

                                <div className="service-box-content">
                                    <p>Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.</p>
                                    <Link href="/contact" className="site-button-link">Learn more</Link>
                                </div>

                                <div className="wt-icon-box-wraper">
                                    <div className="wt-icon-box-md site-bg-primary">
                                        <span className="icon-cell text-white"><i className="flaticon-industry"></i></span>
                                    </div>
                                    <div className="wt-icon-number"><span>01</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"col-lg-4 col-md-6 col-sm-12 m-b50"}>
                        <div className={"service-border-box"}>
                            <div className={"wt-box service-box-1 bg-white"}>
                                <div className={"service-box-title title-style-2 site-text-secondry"}>
                                    <span  className="s-title-two">Plastics</span>
                                </div>

                                <div className="service-box-content">
                                    <p>Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.</p>
                                    <Link href="/contact" className="site-button-link">Learn more</Link>
                                </div>

                                <div className="wt-icon-box-wraper">
                                    <div className="wt-icon-box-md site-bg-primary">
                                        <span className="icon-cell text-white"><i className="flaticon-industry"></i></span>
                                    </div>
                                    <div className="wt-icon-number"><span>02</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"col-lg-4 col-md-6 col-sm-12 m-b50"}>
                        <div className={"service-border-box"}>
                            <div className={"wt-box service-box-1 bg-white"}>
                                <div className={"service-box-title title-style-2 site-text-secondry"}>
                                    <span  className="s-title-two">Plastics</span>
                                </div>

                                <div className="service-box-content">
                                    <p>Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.</p>
                                    <Link href="/contact" className="site-button-link">Learn more</Link>
                                </div>

                                <div className="wt-icon-box-wraper">
                                    <div className="wt-icon-box-md site-bg-primary">
                                        <span className="icon-cell text-white"><i className="flaticon-industry"></i></span>
                                    </div>
                                    <div className="wt-icon-number"><span>03</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;