import React from "react";
import MainLayout from "../Layout/MainLayout";
import Header from "../Components/Header";
import Service from "../Components/Services/Service";
import Banner from "../Components/Services/Banner";
import Testimonials from "../Components/Services/Testimonials";
import Footer from "../Components/Footer";

const Services = () => {
    return(
        <MainLayout title={"Services"}>
            <Header />
            <Banner />
            <Service />
            <Testimonials />
            <Footer />
        </MainLayout>
    )
}

export default Services;