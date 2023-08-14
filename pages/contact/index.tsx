import React from "react";
import MainLayout from "../Layout/MainLayout";
import Header from "../Components/Header";
import Banner from "../Components/contact/Banner";
import ContactForm from "../Components/contact/ContactForm";
import Footer from "../Components/Footer";

const Contact = () => {
    return(
        <MainLayout title={"Contact"}>
            <Header />
            <Banner />
            <ContactForm />
            <Footer/>
        </MainLayout>
    )
}

export default Contact;