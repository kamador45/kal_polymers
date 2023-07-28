import React from "react";
import Image from "next/image";
import logoApp from "../../public/kal_logo.jpeg";
import awardsImg from "../../public/25_years.jpeg";
import isoImg from "../../public/iso_b.jpeg";

const Header = () => {
    return(
        <header className="site-header header-style-1 mobile-sider-drawer-menu">

            <div id="search-toggle-block">
                <div id="search">
                    <form role="search" id="searchform" action="" method="get" className="radius-xl">
                        <div className="input-group">
                            <input className="form-control" value="" name="q" type="search" placeholder="Type to search"/>
                            <span className="input-group-append"><button type="button" className="search-btn"><i className="fa fa-search"></i></button></span>
                        </div>
                    </form>
                </div>
            </div>

            <div className="top-bar site-bg-secondry">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="wt-topbar-left d-flex flex-wrap align-content-start">
                            <ul className="wt-topbar-info e-p-bx text-white">
                                <li><span> Monday - Saturday</span><span>8AM -7PM</span></li>
                                <li><i className="fa fa-phone"></i>+11 11 111 1111</li>
                                <li><i className="fa fa-envelope"></i>kal_polymers@gmail.com</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container header-middle clearfix">
                <div className="logo-header">
                    <div className="logo-header-inner logo-header-one">
                        <a href="index.html">
                            <img src={logoApp.src} alt="" />
                        </a>
                    </div>
                </div>

                <div className="header-info">
                    <ul>
                        <li>
                            <div className="icon-content">
                                <img src={awardsImg.src} alt={""} style={{width: "100px"}}/>
                            </div>
                        </li>
                        <li>
                            <div className="icon-content">
                                <img src={isoImg.src} alt={""} style={{width:"100px"}} />
                            </div>

                        </li>
                    </ul>
                </div>

            </div>

            <div className="sticky-header main-bar-wraper  navbar-expand-lg">
                <div className="main-bar">
                    <div className="container clearfix">
                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" class="navbar-toggler collapsed">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first"></span>
                            <span className="icon-bar icon-bar-two"></span>
                            <span className="icon-bar icon-bar-three"></span>
                        </button>

                        <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">

                            <ul className=" nav navbar-nav">
                                <li><a href="javascript:;">Home</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Home</a></li>
                                    </ul>
                                </li>

                                <li><a href="javascript:;">About</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">About</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:;">Services</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Services List</a></li>

                                    </ul>
                                </li>
                                <li><a href="javascript:;">Project</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Project Grid</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:;">Shop</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Shop</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Contact us</a></li>
                            </ul>

                        </div>

                        <div className="header-nav-request">
                            <a href="#" className="contact-slide-show">Request a Quote <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header