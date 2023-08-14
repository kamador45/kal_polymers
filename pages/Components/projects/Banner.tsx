import React from "react";

const Banner = () => {
    return(
        <div className={"page-content"}>
            <div className={"wt-bnr-inr overlay-wraper bg-center"} style={{backgroundImage:"url(/images/colarge/polymer.jpg)"}}>
                <div className="overlay-main site-bg-secondry opacity-07"></div>
                <div className={"container"}>
                    <div className={"wt-bnr-inr-entry"}>
                        <div className={"banner-title-outer"}>
                            <div className={"banner-title-name"}>
                                <h2 className="site-text-primary">Kal-Polymers Projects</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;