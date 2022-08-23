import React from "react";
import Header from "./components/Header";
import Landing from "./Landing";

import HeadLine from "./HeadLine";
import Contact from "./ContactFrom";
import Spikes from './components/Spikes';
import Services from "./Services";
import Footer from "./components/Footer";
import FooterRights from './components/FooterRights'
import WA from "./components/WA";




export default function App() {
  
  return (
    <div className="father">
      <Header />
      <Landing />
     
      <div className="container-css">
        
        <Contact />
        <HeadLine />
      </div>
      <Spikes/>
      <Services/>
      <Footer/>
      <FooterRights/>
      <WA />
    </div>
  );
}
