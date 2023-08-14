import Head from 'next/head'
import Image from 'next/image'
import MainLayout from "./Layout/MainLayout";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import AboutSectionStart from "./Components/AboutSectionStart";
import Performance from "./Components/Performance";
import Wedo from "./Components/Wedo";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

const Home = () => {
  return (
      <MainLayout title={"Home"}>
          <Header />
          <Slider />
          <AboutSectionStart />
          <Performance />
          <Wedo />
          <Testimonial />
          <Footer />
      </MainLayout>
  )
}


export default Home;
