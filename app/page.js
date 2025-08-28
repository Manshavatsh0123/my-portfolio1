'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
