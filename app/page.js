"use client"



import About from "./Components/About";
import Cards from "./Components/Cards";
import Eyes from "./Components/Eyes";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import Navbar from "./Components/Navbar";

export default function Home() {

  return (
    <>

    <div className="w-full min-h-screen bg-zinc-900 text-white overflow-hidden">

    <Navbar/>
    <LandingPage/>
    <Marquee />
    <About/>
    <Eyes/>
    <Cards/>
    <Footer/>
    </div>

    </>
  );
}
