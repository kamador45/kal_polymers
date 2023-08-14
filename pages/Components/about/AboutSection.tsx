import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return(
        <div className={"section-full welcome-section-outer"}>
            <div className={"welcome-section-top bg-white p-t80 p-b50"}>
                <div className={"container"}>
                    <div className={"row d-flex justify-content-center"}>
                        <div className={"col-lg-6 col-md-12 m-b30"}>
                            <div className={"welcom-to-section"}>
                                <div className={"left wt-small-separator-outer"}>
                                    <div className={"wt-small-separator site-text-primary"}>
                                        <div className={"sep-leaf-left"}></div>
                                        <div><h2>Welcome to Kal-Polymers</h2></div>
                                        <div className={"sep-leaf-right"}></div>
                                    </div>
                                </div>
                                <h2>We Are Here to Increase Your Knowledge With Experience</h2>
                                <ul className={"site-list-style-one"}>
                                    <li>Quality Control System , 100% Satisfaction Guarantee</li>
                                    <li>Unrivalled Workmanship, Professional and Qualified</li>
                                    <li>Environmental Sensitivity, Personalised Solutions</li>
                                </ul>
                                <p>Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit. a ballpark value added is activity to beta test. Override the digital divide with additional click throughs from fruit to identify a ballpark value added.</p>
                            </div>
                        </div>
                        <div className={"col-lg-6 col-md-12 m-b30"}>
                            <div className={"img-colarge2"}>
                                <div className={"colarge-2 slide-right"}>
                                    <Image src={"/images/colarge/polymer.jpg"} alt={""} width={400} height={100} />
                                </div>
                                <div className="since-year-outer2"><div className="since-year2"><span>Since</span><strong>2023</strong></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;