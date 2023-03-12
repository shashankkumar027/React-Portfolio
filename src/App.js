import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Works from "./components/Works";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);




  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Works />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
