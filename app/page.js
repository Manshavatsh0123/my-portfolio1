'use client'
import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Skills />
    </>
  );
}
