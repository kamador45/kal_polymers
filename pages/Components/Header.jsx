import React from "react";
import Image from "next/image";
import logoApp from "../../public/kal_logo.jpeg";
import awardsImg from "../../public/25_years.jpeg";
import isoImg from "../../public/iso_b.jpeg";
import Link from "next/link";

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
                        <Link href="/">
                            <img src={logoApp.src} alt="" />
                        </Link>
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
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>

                                <li>
                                    <Link href={"/about"}>About Us</Link>
                                </li>
                                <li><Link href="/services">Services</Link>
                                </li>
                                <li>
                                    <Link href="/projects">Project</Link>
                                </li>
                                <li>
                                    <a href="javascript:;">Shop</a>
                                </li>
                                <li><Link href="/contact">Contact us</Link></li>
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