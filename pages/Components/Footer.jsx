import React from "react";
import kalLogo from "../../public/kal_logo.jpeg";
import footerBg from "../../public/footer-bg.png";
const Footer = () => {
    return(
        <footer className="site-footer footer-large footer-dark text-white footer-style1">

            <div className="footer-top bg-no-repeat bg-bottom-right"
                 style={{backgroundImage:`url(./footer-bg.png)`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="footer-h-left">
                                <div className="widget widget_about">
                                    <div className="logo-footer clearfix">
                                        <a href="#"><img src={kalLogo.src} alt="" /></a>
                                    </div>
                                    <p>Over 15 year experience and knowledge international standards technologicaly
                                        changes our industrial systems, we are dedicated to provides the best solutions
                                        to our valued customers there are many variation solution we makes long-term
                                        investments goal in global companies in different sectors, mainly in USA and
                                        other countries</p>
                                </div>
                                <div className="widget recent-posts-entry">
                                    <ul className="widget_address">
                                        <li><i className="fa fa-map-marker"></i>Ontario, Canada.
                                        </li>
                                        <li><i className="fa fa-envelope"></i>contact123@gmail.com</li>
                                        <li><i className="fa fa-phone"></i>(654) 321-7654</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="row footer-h-right">
                                <div className="col-lg-5 col-md-4">
                                    <div className="widget widget_services">
                                        <h3 className="widget-title">Useful links</h3>
                                        <ul>
                                            <li><a href="about-1.html">About</a></li>
                                            <li><a href="Faq.html">FAQ</a></li>
                                            <li><a href="services-1.html">Services </a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-8">
                                    <div className="widget widget_services">
                                        <h3 className="widget-title">Our Services</h3>
                                        <ul>
                                            <li><a href="s-oilgas.html">Pipelines</a><a href="#">Pipelines
                                                Research</a></li>
                                            <li><a href="s-chemical.html">Plastic Research</a><a
                                                href="s-agricultural.html">Agricultural</a></li>
                                            <li><a href="s-mechanical.html">Mechanical</a><a
                                                href="s-agricultural.html">Agricultural </a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="wt-footer-bot-left d-flex justify-content-between">
                        <span className="copyrights-text">Copyright © 2023 <span
                            className="site-text-primary">Kal-Polymers</span></span>
                        <ul className="copyrights-nav">
                            <li><a href="javascript:void(0);">Terms  &amp; Condition</a></li>
                            <li><a href="javascript:void(0);">Privacy Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;