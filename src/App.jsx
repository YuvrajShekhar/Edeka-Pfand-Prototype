import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import ImageSlideshow from "./components/ImageSlideshow";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      <ImageSlideshow />
      <Footer />
    </div>
  );
}

export default App;