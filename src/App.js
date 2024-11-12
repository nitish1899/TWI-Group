// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CompanyComponent from './CompanyComponent'; // Import the main component
// import BusinessDetails from './BusinessDetails'; // Import the new component you want to navigate to

// const App = () => {
//   return (

//       <Routes>
//         <Route path="/" element={<CompanyComponent />} />
//         <Route path="/business/:name" element={<BusinessDetails />} /> {/* Dynamic path for business */}
//       </Routes>
//   );
// };

// export default App;


import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { ContactUs } from "./pages/ContactUs";
import { Product } from "./pages/Product";
import { AboutUs } from "./pages/AboutUs";
import { Footer } from "./components/Footer";
import SocialMedia from "./pages/SocialMedia"
import PaymentSuccess from "./pages/paymentSuccess";
import Distrubuter from "./pages/Distrubuter";
import { MissionVision } from "./components/MissionVision";
import { Transportation } from "./components/Transportation";
import { Service } from "./pages/Service";
import { Kgvl } from "./components/Kgvl";
import { Ustl } from "./components/Ustl";
import { Twi } from "./components/Twi";
import { Tsil } from "./components/Tsil";
import { Gep } from "./components/Gep";
import { Tbw } from "./components/Tbw";
import { Pgm } from "./components/Pgm";
import { Ovot } from "./components/Ovot";
import Purushottam from "./components/Purushottam";
import { Sustainability } from "./components/Sustainability";


const App = () => {
  const media = { mobile: "768px", tab: "998px" };
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/paymentsuccess" element={< PaymentSuccess />} />
        <Route path="/distribution" element={<  Distrubuter />} />
        <Route path="/socialmedia" element={<  SocialMedia />} />
        <Route path="/MissionVision" element={<  MissionVision />} />
        <Route path="/Transportation" element={<  Transportation />} />
        <Route path="/Kgvl" element={<  Kgvl />} />
        <Route path="/Ustl" element={<  Ustl />} />
        <Route path="/Twi" element={<  Twi />} />
        <Route path="/Tsil" element={<  Tsil />} />
        <Route path="/Gep" element={<  Gep />} />
        <Route path="/Tbw" element={<  Tbw />} />
        <Route path="/Pgm" element={<  Pgm />} />
        <Route path="/sustainability/environmental-initiatives" element={<  Sustainability />} />
        <Route path="/sustainability/carbon-footprint" element={<  Sustainability />} />
        <Route path="/sustainability/reports" element={<  Sustainability />} />
        <Route path="/sustainability/social-responsibility" element={<  Sustainability />} />
        <Route path="/Ovot" element={<  Ovot />} />
        <Route path="/Purushottam" element={<  Purushottam />} />

      </Routes>
      <Footer />

    </div>
  )
};

export default App;
