import React from "react";
import Navbar from "./Navbar/navbar";
import Places from "./Places_According_nature/Places";
import TP_India from "./Top_Places_India/TP_India";
import Outside_India from "./Top_places_Outside_India/Outside_India";
import Footer from "../Footer";
const Home = () => {
  return (
    <div>
     <Navbar/>
      <TP_India/>
      <Outside_India/>
      <Places/>
      <Footer/>
    </div>
  )
}

export default Home;