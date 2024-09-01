import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ServiceCard from "../Components/ServiceSection";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceCard />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
