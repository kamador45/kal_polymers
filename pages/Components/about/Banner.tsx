import React from "react";
import Image from "next/image";

const Banner = () => {
    return(
        <div className={"wt-bnr-inr overlay-wraper bg-center"} style={{backgroundImage:'url(/images/banner/3.jpg)'}}>
            <div className={"overlay-main site-bg-secondry opacity-09"}></div>
            <div className={"container"}>
                <div className={"wt-bnr-inr-entry"}>
                    <div className={"banner-title-outer"}>
                        <div className={"banner-title-name"}>
                            <h2 className={"site-text-primary"}>About Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;