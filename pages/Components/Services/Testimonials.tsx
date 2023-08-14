import React from "react";
import Image from "next/image";

const Testimonials = () => {
    return(
        <div className={"section-full  p-t80 p-b50 bg-no-repeat bg-center bg-gray"} style={{backgroundImage:"url(/images/background/bg-map.png)"}}>
            <div className={"container"}>
                <div className={"section-head center wt-small-separator-outer"}>
                    <div className={"wt-small-separator site-text-primary"}>
                        <div className={"sep-leaf-left"}>
                            <div>What our client says</div>
                        </div>
                    </div>
                    <h2>Happy with Customers & Clients</h2>
                </div>

                <div className={"testimonial-2-content-outer"}>
                    <div className={"testimonial-3-content owl-carousel  owl-btn-vertical-center long-arrow-next-prev"}>
                        <div className={"items"}>
                            <div className={"testimonial-2 bg-white"}>
                                <div className={"testimonial-content"}>
                                    <div className={"testimonial-text"}>
                                        <i className="fa fa-quote-left"></i>
                                        <p>This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!</p>
                                    </div>
                                    <div className={"testimonial-detail clearfix"}>
                                        <div className={"testimonial-pic-block"}>
                                            <div className={"testimonial-pic"}>
                                                <Image src={"/images/testimonials/pic1.jpg"} width={250} height={250} alt={""} />
                                            </div>
                                        </div>
                                        <div className={"testimonial-info"}>
                                            <span className={"testimonial-name  title-style-2 site-text-secondr"}>Malcolm Franzcrip</span>
                                            <span className={"testimonial-position title-style-2 site-text-primary"}>Contractor</span>
                                        </div>
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

export default Testimonials;