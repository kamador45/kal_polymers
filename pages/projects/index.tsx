import React from "react";
import MainLayout from "../Layout/MainLayout";
import Header from "../Components/Header";
import Banner from "../Components/projects/Banner";
import ProjectGallery from "../Components/projects/ProjectGallery";
import Footer from "../Components/Footer";

const Projects = () => {
    return(
        <MainLayout title={"Projects"}>
            <Header/>
            <Banner/>
            <ProjectGallery/>
            <Footer/>
        </MainLayout>
    )
}

export default Projects;