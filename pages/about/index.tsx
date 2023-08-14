import React, {useState, useEffect } from "react";
import MainLayout from "../Layout/MainLayout";
import Header from "../Components/Header";
import Banner from "../Components/about/Banner";
import AboutSection from "../Components/about/AboutSection";
import Services from "../Components/about/Services";
import Footer from "../Components/Footer";


const About = () => {
    return(
        <MainLayout title={"About Us"}>
            <Header/>
            <Banner />
            <AboutSection />
            <Services />
            <Footer />
        </MainLayout>
    )
}

export default About;