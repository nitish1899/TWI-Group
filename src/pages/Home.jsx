import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Make sure to import Slider from react-slick

import React from "react";
import crausal1 from "../resource/crausal1.jpg";
import crausal2 from "../resource/crausal2.jpg";
import crausal3 from "../resource/crausal3.jpg";
import crausal4 from "../resource/crausal4.jpg";
import crausal5 from "../resource/crausal5.jpg";
import crausal6 from "../resource/crausal6.jpg";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";
import crausal10 from "../resource/crausal10.png";
import crausal11 from "../resource/crausal11.png";
import crausal12 from "../resource/crausal12.png";
import crausal13 from "../resource/crausal13.png";
import crausal14 from "../resource/crausal14.png";
import crausal15 from "../resource/crausal15.png";
import home from "../resource/home.png";
import home1 from "../resource/home.mp4";
import logotwi from "../resource/logotwi.png";
import logoustl from "../resource/logoustl.png";
import logokgvl from "../resource/logokgvl.png";
import logoxpert from "../resource/logoxpert.png";
import logogov from "../resource/logogov.png";
import logotsil from "../resource/logotsil.png";
import logogreen from "../resource/logogreen.png";
import logoadvance from "../resource/logoadvance.png";
import logodream from "../resource/logodream.png";
import logopro from "../resource/logopro.png";

import carrier from "../resource/carrier.jpg";
import carrier1 from "../resource/carrier1.png";
import overview from "../resource/overview.png";


import logo from "../resource/twcpl.png";
import Sustainability from "../resource/Sustainability.png";
import Sustainability1 from "../resource/Sustainability1.png";
import Sustainability2 from "../resource/Sustainability2.png";


import sdg1 from "../resource/sdg1.png";
import sdg2 from "../resource/sdg2.png";
import sdg3 from "../resource/sdg3.png";
import sdg4 from "../resource/sdg4.png";
import sdg5 from "../resource/sdg5.png";
import sdg6 from "../resource/sdg6.png";

import combo from "../resource/combo.jpg";
import kgvcombo from "../resource/kgvcombo.jpg";
import kgvwherehouse from "../resource/kgvwherehouse.jpg";
import kgvwherehouse1 from "../resource/kgvwherehouse1.png";
import zamatoboy from "../resource/zamatoboy.mp4";
import zamatoboy2 from "../resource/zamatoboy2.mp4";
import zamatoboy3 from "../resource/zamatoboy3.mp4";

import RadhaSinghal from "../resource/RadhaSinghal.webp";

import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { MissionVision } from "../components/MissionVision";
import { Button2 } from "../components/Button2";
import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";

import news from "../resource/news_clipping.jpeg";
import news1 from "../resource/news1.jpg";
import news2 from "../resource/news2.jpg";
import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";
import bike5 from '../resource/bike_main.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Home = () => {
  const images = [
    crausal1,
    crausal2,
    crausal3,
    crausal4,
    crausal5,
    crausal6,
    crausal7,
    crausal8,

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  const data = [
    // Replace with your actual data
    { name: "TRANSPORT WINGS (CAL) PVT.LTD", review: "Logistics and Supply Chain.  ", img: logotwi },
    { name: "USTRANS WORLD LOGISTICS LIMITED", review: "Freight Forwarding and Logistics. ", img: logoustl },
    { name: "KARISHMA GLOBAL VENTURES", review: "E-Mobility Solutions.", img: logokgvl },
    { name: "Transvue Solutions India Pvt Ltd", review: "IT Solutions and Digital Services. ", img: logotsil },
    { name: "Green Earth Pulp & Paper Pvt Ltd", review: "Pulp and Paper Manufacturing. ", img: logogreen },
    { name: "Trade Biz Worldwide", review: "Industrial Products and Project Supplies. ", img: logoadvance },
    { name: "Dream Luxottica", review: "Hospitality (Luxury Resorts). ", img: logodream },
    // { name: "Pro GenX Marketing Pvt Ltd", review: "Marketing and Manufacturing . ", img: logopro },
    { name: "UConnect 2 Xperts LLC, USA", review: "IT Support and Software Services. ", img: logoxpert },
    { name: "Advance Consultancy", review: "Government Advocacy and Business Consultancy. ", img: logogov },
  ];

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">

      <div className="relative h-screen">
        {/* Background video */}
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src={home1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
          <div className="max-w-2xl text-white">
            <div className="uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
              <div className="">TWI Group</div>
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{
                textShadow: "2px 2px 4px yellow, 4px 4px 6px rgba(0, 0, 0, 0.6)",
              }}
            >
              TWI Group
            </h1>
            <p
              className="text-lg md:text-xl mb-8"
              style={{
                textShadow: "2px 2px 4px yellow, 4px 4px 6px rgba(0, 0, 0, 0.6)",
              }}
            >
              TWI Group has been a leading Logistics Partner in the market since 1956 and has been serving our customers with tailor-made logistics solutions.
            </p>

            {/* <Link
        to="/"
        className="inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-400 transition duration-200"
      >
        GET STARTED
      </Link> */}

          </div>
        </div>
      </div>


      <div className="bg-gray-100 py-12 px-6">
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
            ABOUT TWI GROUP
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            TWI Group is a Global Logistics solution Provider with all bunches to logistics services under one umbrella. Group TWI stands for commitment and value its relationships.
          </p>

          {/* Video and text section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text (Left Side) */}
            <div className="text-left">
              <h3 className="text-3xl font-semibold text-slate-950 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                To deliver comprehensive, reliable, and innovative logistics solutions that empower businesses across the globe. We are committed to providing exceptional customer service, fostering long-lasting relationships, and consistently exceeding expectations by offering a full suite of logistics services under one umbrella.
              </p>

              <h3 className="text-3xl font-semibold text-slate-950 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700">
                To be the leading global logistics provider, recognized for our commitment to operational excellence, customer satisfaction, and value-driven services. We aim to continuously evolve and innovate, setting industry standards and driving progress in logistics solutions worldwide.
              </p>
            </div>

            {/* Video (Right Side) */}
            <div className="text-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1cFpjnFdmDA" // Correct embed link
                title="Devta Gensets Video"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-100 py-12 px-6">
        <div className="relative bg-cover bg-center h-auto md:h-[500px] max-w-7xl mx-auto rounded-xl overflow-hidden text-black p-8"
          style={{ backgroundImage: `url(${carrier})` }}>
          <div className="absolute inset-0 bg-blue-900 bg-opacity-0"></div>
          <div className="relative z-10">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">OVERVIEW</h1>
              <p className="text-lg md:text-2xl font-light">
                Over <strong>2000+ employees</strong> across <strong>30 countries</strong>, with key regional offices in Hong Kong, Malaysia, Singapore, Thailand and Philippines.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center mt-10">
              <div className="space-y-4">
                <p className="text-4xl font-bold">1998</p>
                <p className="text-sm md:text-base">Where the story begins</p>
              </div>
              <div className="space-y-4">
                <p className="text-4xl font-bold">63%</p>
                <p className="text-sm md:text-base">of our employees are Millennials and Centennials</p>
              </div>
              <div className="space-y-4">
                <p className="text-4xl font-bold">
                  <i className="fas fa-users"></i>
                </p>
                <p className="text-sm md:text-base">Our Employees range in age from 19 - 60</p>
              </div>
              <div className="space-y-4">
                <p className="text-4xl font-bold">
                  <i className="fas fa-globe"></i>
                </p>
                <p className="text-sm md:text-base">We are represented by 46 nationalities</p>
              </div>
              <div className="space-y-4">
                <p className="text-4xl font-bold">
                  <i className="fas fa-language"></i>
                </p>
                <p className="text-sm md:text-base">Our employees speak over 50 languages</p>
              </div>
              <div className="space-y-4">
                <p className="text-4xl font-bold">
                  <i className="fas fa-trophy"></i>
                </p>
                <p className="text-sm md:text-base">Best Companies to Work for in Asia (2011-2023)</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">

              <Link
                to="/"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* 
    <div className="bg-gray-100 py-12 px-6">

  <div className="max-w-7xl mx-auto">
 
    <div className="flex flex-col items-center mb-12">
      <img
        src={logo} 
        alt="Company Logo"
        className="h-32 w-32 object-contain mb-4"
      />
      <h1 className="text-5xl font-extrabold text-gray-900 mb-2">TWI GROUP OF COMPANIES</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Your company description goes here. Briefly describe your company's mission or services in a few sentences.
      </p>
    </div>

    <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Businesses</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {data.map((d) => (
        <div key={d.name} className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
   
          <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
            <img src={d.img} alt={d.name} className="h-44 w-44 object-cover rounded-full border-4 border-white" />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <p className="text-xl font-semibold text-center">{d.name}</p>
            <p className="text-center text-gray-600">{d.review}</p>
            <button className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600">
              Read
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div> */}



      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <img src={logo} alt="Company Logo" className="h-32 w-32 object-contain mb-4" />
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">TWI GROUP OF COMPANIES</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              Your company description goes here. Briefly describe your company's mission or services in a few sentences.
            </p>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Businesses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

            {/* Manually rendering each business */}

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logotwi} alt="TRANSPORT WINGS (CAL) PVT.LTD" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">TRANSPORT WINGS (CAL) PVT.LTD</p>
                <p className="text-center text-gray-600">Logistics and Supply Chain.</p>
                <Link
                  to="/Twi"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logoustl} alt="USTRANS WORLD LOGISTICS LIMITED" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">USTRANS WORLD LOGISTICS LIMITED</p>
                <p className="text-center text-gray-600">Freight Forwarding and Logistics.</p>
                <Link
                  to="/Ustl"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logokgvl} alt="KARISHMA GLOBAL VENTURES" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">KARISHMA GLOBAL VENTURES</p>
                <p className="text-center text-gray-600">E-Mobility Solutions.</p>
                <Link
                  to="/Kgvl"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logotsil} alt="Transvue Solutions India Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">Transvue Solutions India Pvt Ltd</p>
                <p className="text-center text-gray-600">IT Solutions and Digital Services.</p>
                <Link
                  to="/Tsil"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logogreen} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">Green Earth Pulp & Paper Pvt Ltd</p>
                <p className="text-center text-gray-600">Pulp and Paper Manufacturing.</p>
                <Link
                  to="/Gep"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logoadvance} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">Trade Biz Worldwide</p>
                <p className="text-center text-gray-600">Industrial Products and Project Supplies.</p>
                <Link
                  to="/Tbw"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logodream} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">Dream Luxottica</p>
                <p className="text-center text-gray-600">Hospitality (Luxury Resorts).</p>
                <Link
                  to="/"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            {/* <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
              <img src={logopro} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold text-center">Pro GenX Marketing Pvt Ltd</p>
              <p className="text-center text-gray-600">Marketing and Manufacturing .</p>
              <Link
        to="/Pgm"
        className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
      >
      Read
      </Link>
            </div>
          </div> */}

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logoxpert} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">UConnect 2 Xperts LLC, USA</p>
                <p className="text-center text-gray-600">IT Support and Software Services.</p>
                <Link
                  to="/"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logogov} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">Advance Consultancy</p>
                <p className="text-center text-gray-600">Government Advocacy and Business Consultancy.</p>
                <Link
                  to="/"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            {/* Add the remaining companies similarly */}

          </div>
        </div>
      </div>


      <div className="bg-gray-100 py-12 px-6">
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Featured Stories</h2>
          <Slider {...settings}>
            {/* First Slide */}
            <div className="bg-white shadow-lg rounded-lg p-4 w-full h-96">
              <img src={news} alt="Dharavi" className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">Dharavi - A Human-Centric Transformation</h3>
              <p className="text-gray-600 mt-2">By TWI Group</p>
              <a href="/kgvl" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>

            {/* Second Slide */}
            <div className="bg-white shadow-lg rounded-lg p-4 w-full h-96">
              <img src={news1} alt="India Economy" className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">India on track to becoming a $25 Trillion economy by 2050</h3>
              <p className="text-gray-600 mt-2">By TWI Group</p>
              <a href="/kgvl" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>

            {/* Third Slide */}
            <div className="bg-white shadow-lg rounded-lg p-4 w-full h-96">
              <img src={news2} alt="Women's Empowerment" className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">International Women’s Day celebration at the Adani Group</h3>
              <p className="text-gray-600 mt-2">By TWI Group</p>
              <a href="/kgvl" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>
          </Slider>
        </div>
      </div>



      <div className="flex flex-col md:flex-row justify-between p-6 bg-gray-100">

        {/* News and Updates Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/5">
          <h2 className="text-xl font-bold mb-6">News and Updates</h2>
          <ul>
            <li className="mb-4">
              <div className="flex items-start">
                <span className="mr-4">
                  <i className="fas fa-newspaper"></i>
                </span>
                <div>
                  <p className="font-semibold">Gautam Adani unveils green energy gallery at London Science Museum</p>
                  <span className="text-gray-500 text-sm">Apr 02, 2024 | Ahmedabad Times</span>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-start">
                <span className="mr-4">
                  <i className="fas fa-newspaper"></i>
                </span>
                <div>
                  <p className="font-semibold">Adani Group EBITDA hits ₹79k cr in 2023</p>
                  <span className="text-gray-500 text-sm">Mar 01, 2024 | Financial Express</span>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-start">
                <span className="mr-4">
                  <i className="fas fa-newspaper"></i>
                </span>
                <div>
                  <p className="font-semibold">“Past year taught us better...we emerged stronger”</p>
                  <span className="text-gray-500 text-sm">Jan 25, 2024 | The Times of India</span>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-start">
                <span className="mr-4">
                  <i className="fas fa-newspaper"></i>
                </span>
                <div>
                  <p className="font-semibold">Davos Diaries: India’s Emergence And Quest for Global Trust</p>
                  <span className="text-gray-500 text-sm">Jan 18, 2024 | NDTV</span>
                </div>
              </div>
            </li>
          </ul>

          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          >
            View more
          </Link>
        </div>

        {/* Chairman's Corner Section */}
        <div className="flex flex-col md:flex-row bg-blue-600 text-white rounded-lg shadow-lg p-6 w-full md:w-3/5 mt-6 md:mt-0 md:ml-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4">Chairman's Corner</h2>
            <p className="text-lg leading-relaxed mb-6">"It is my promise that we will continue to invest and do our part to help the people wherever we operate."</p>
            <p className="font-semibold">Smt. Radha Devi Singhal</p>
            <p>Chairman, TWI Group</p>
          </div>
          <div className="md:ml-6 mt-6 md:mt-0">
            <img
              src={RadhaSinghal}
              alt="Smt. Radha Devi Singhal"
              className="rounded-lg w-48 h-auto"
            />
          </div>
        </div>

      </div>





      <div className="bg-gray-100 py-12 px-6">
        <div className="relative bg-cover bg-center h-96 md:h-[500px] max-w-7xl mx-auto rounded-xl overflow-hidden m-20 "
          style={{ backgroundImage: `url(${Sustainability2})` }}>
          {/* Overlay for darker effect on text */}
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          {/* Text Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 text-white">
            <h3 className="text-lg md:text-2xl font-light">Sustainability</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our roadmap to Net Zero
            </h2>
            <p className="text-sm md:text-base max-w-lg mb-6">
              We are making responsible choices. By prioritizing sustainable mobility, safety, emission reduction and use of eco-friendly materials, we are driving meaningful change.
            </p>
            <Link
              to="/"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 w-max"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>



      <div className="bg-gray-100 py-12 px-6">
        <div className="relative bg-cover bg-center h-96 md:h-[500px] max-w-7xl mx-auto rounded-xl overflow-hidden m-20 "
          style={{ backgroundImage: `url(${carrier1})` }}>
          {/* Overlay for darker effect on text */}
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          {/* Text Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 text-white">
            <h3 className="text-lg md:text-2xl font-light">Careers</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              United by passion
              and talent
            </h2>
            <p className="text-sm md:text-base max-w-lg mb-6">
              We are making responsible choices. By prioritizing sustainable mobility, safety, emission reduction and use of eco-friendly materials, we are driving meaningful change.
            </p>


            <Link
              to="/"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 w-max"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>


      <BusinessBook />
    </div>
  );
};









// import React from "react";
// import wave from "../resource/wave_final.png";
// import { useState, useEffect,useRef  } from "react";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";
// import bikeleft from "../resource/bike_left.jpeg";
// import bikeright from "../resource/bike_right.jpeg";
// import biketop from "../resource/bike_top.jpeg";
// import news from "../resource/news_clipping.png";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import bike5 from "../resource/bike_main.png";
// import heroImg from "../resource/homehero.png";
// import Slider from "react-slick";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoChevronForwardCircleSharp } from "react-icons/io5";

// import { IoChevronBackCircle } from "react-icons/io5";

// export const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const video1Ref = useRef(null);
//   const video2Ref = useRef(null);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   const goToPreviousVideo = () => {
//     if (currentVideoIndex === 1) {
//       video2Ref.current.pause();
//     } else {
//       video1Ref.current.pause();
//     }
//     setCurrentVideoIndex((prevIndex) => Math.max(0, prevIndex - 1));
//   };

//   const goToNextVideo = () => {
//     if (currentVideoIndex === 0) {
//       video1Ref.current.pause();
//     } else {
//       video2Ref.current.pause();
//     }
//     setCurrentVideoIndex((prevIndex) => Math.min(1, prevIndex + 1));
//   };




//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? posts.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === posts.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&access_token=IGQWRQM0dndmFLSFNHTGhxUXpyUHhIUTFZAanRkcndmN1pzSll0M3RteXVaUWNMVW1KU3NVblJmdXYzYWM3QU40TnkzTDA5clMxbjQ3bXYwTGpwMFFvVWdndVF0NHFkQURZAX0lNM2dURlhKeDJJcklTdEZAvMmU5SUkZD`
//         );
//         if (res.ok) {
//           const data = await res.json();
//           setPosts(data.data);
//         } else console.log("failed to fetch");
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//     console.log(posts);
//   }, []);

//   useEffect(() => {
//     const divElement = document.getElementById("custom-slider");
//     if (divElement) {
//       divElement.style.display = "flex";
//       divElement.style.flexDirection = "row"; // Optional: Set flex direction to row
//     }
//   }, []);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };
//   return (
//     <div className="w-screen  overflow-hidden  min-[320px]:w-full ">
//       {/* Hero section */}
//       {/* <div className="hero min-[320px]:w-full min-[320px]:scale-[0.25] sm:scale-[1]  flex flex-col sm:h-screen justify-center items-center" >
//       <h1 className="text-4xl font-extrabold absolute top-32 font-serif text-center z-10 min-[320px]:text-4xl min-[320px]:top-5" style={{ fontFamily: 'Anybody' }}>Welcome to the world of smart E-MOBILITY solution{" "}</h1>
//          <img
//           src={bike5}
//           className="z-40  lg:postion-relative lg:left-[270px] hover:lg:scale-[1.2] md:pt-[50px] md:pl-[14%]  md:scale-[0.8] md:left-[-0.1%] bikeimg absolute top-[4%] left-[20%] scale-75 hover:scale-100 transition-all duration-500 min-[320px]:[5%]    "
//         />
//          <div className=" h-full w-full  flex flex-col justify-center items-center sm:absolute sm:scale-[0.47] md:absolute md:scale-[0.55] lg:absolute lg:scale-[1]">
//             <h1 className="relative top-[400px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Sustainable</h1>
//            <h1 className="relative top-[150px] uppercase font-extrabold  scale-75  text-[20rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Energy</h1>
//            <h1 className=" relative top-[-150px]  uppercase  font-extrabold text-transparent  text-[15rem]  z-20" style={{textShadow: "0px 3px 0px #55ff17db, 0px 14px 10px green, 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)", WebkitTextFillColor: "transparent",
//             WebkitTextStrokeWidth: "3px",
//             WebkitTextStrokeColor: "green",
//             }} >INNOVATE</h1>
//            <h1 className=" relative top-[-300px]  uppercase  font-extrabold   text-[10rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>TRANSFERABILITY</h1>
//            <h1 className="relative top-[-450px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Affordable</h1>
//          </div>
//       </div> */}
//       <div className="w-screen h-full flex flex-col items-center justify-center">
//         <img src={heroImg} className="w-screen h-screen" loading="lazy" />
//         <img src={bike5} className="absolute" />
//       </div>
//       {/* About Us */}
//       <div className="about-us w-screen  flex flex-col mb-10 justify-center relative items-center   z-10 ">
//         <img src={wave} className="w-full absolute h-full top-0 -z-10" />
//         <div className="flex flex-col  justify-center rounded-lg h-[60%]  p-4 w-full  items-center  gap-y-5 min-[320px]:max-w-[70%] md:max-w-[70%] lg:max-w-[50%] lg:p-10 bg-black bg-opacity-10">
//           <div className="text-4xl font-bold text-center">About us </div>
//           <div className="w-full text-center  sm:text-2xl min-[320px]:text-lg min-[320px]:leading-6">
//             KGV is a smart e-mobility solution provider that aims to cater to
//             the society as it reduces the immense burden on the middle and lower
//             segment of the community by reducing the cost of commuting by more
//             than 90%.{" "}
//           </div>
//           <div className="flex  justify-center items-center gap-2">
//             <Book />
//             <Button2 />
//           </div>
//         </div>
//       </div>
//       {/* Key benefits sections */}
//       <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full   bg-[#56e422c4]  relative z-10 p-5 md:h-100 ">
//         <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-black text-center  md:text-center md:text-2xl min-[320px]:font-bold min-[320px]:text-5xl">
//           Key Benefits
//         </div>
//         <div className=" flex flex-col justify-start h-[80%] pb-5 mx-auto max-w-[1204px] w-11/12 md:flex-wrap md:flex-row md:grid md:grid-cols-2 gap-10 ">
//           {keyBenefits.map((benefits, index) => {
//             return <BenefitCard key={index} passed={benefits} />;
//           })}
//         </div>
//       </div>
//       {/* Vision and mission */}
//       <div className="max-w-[1204px]  mx-auto flex pt-7 pb-14  gap-3 text-l  flex-col   items-center">
//         <div className="flex flex-col  rounded-lg h-[70%]  p-4 w-[90%] min-w-[300px]   gap-y-5 text-center   bg-black bg-opacity-10 py-10">
//           <div className="text-2xl font-bold uppercase mt-2 text-center">
//             {" "}
//             Vision{" "}
//           </div>

//           <div>
//             {" "}
//             We started from the bike and we’ll make its delivery shortly to all
//             the commuters worldwide.
//           </div>
//           <div>
//             Our team of engineering excellence is also working on bringing up
//             the system to each and every mode of transportation including{" "}
//             <span className="font-semibold">
//               3-wheelers, cars, LMVs, LCVs, and even HCVs.
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-col  justify-start rounded-lg h-[70%] p-4 w-[90%] min-w-[300px]   gap-y-5 text-center  bg-black bg-opacity-10 py-10  ">
//           <div className="text-2xl font-bold uppercase mt-5 text-center">
//             {" "}
//             Mission{" "}
//           </div>
//           <div>
//             To empower every common man in the world to save his/her hard earned
//             moneyspent on fossil fuels
//           </div>
//           <div>
//             To save mother Earth from air and noise pollutionas well as a green
//             and cleaner environment for saving life and humanity
//           </div>
//           <div>
//             To ensure trouble free and tension free drive to each and every
//             rider reducing the anxiety of being stuckanywhere in the middle of
//             his/her journey
//           </div>
//           <div>
//             To reduce the traveling cost of companies, corporate and enterprizes
//             by more than 90% and add to their profits
//           </div>
//           <div>
//             Our plug-in hybrid was designed to get to the battery fit our and
//             can be charged inside the home
//           </div>
//         </div>
//       </div>
//       {/* photo gallery */}
//       <div className="w-full lg:h-screen  bg-black relative z-10 pb-7 ">
//         <div className="flex flex-col justify-evenly  max-w-[1204px] mx-auto pt-8 h-full  ">
//           <div className="text-yellow-500 text-5xl  font-extrabold text-center min-[320px]:text-3xl">
//             {" "}
//             #KGVPhotoWall{" "}
//           </div>
//           <div className="w-full h-1/2 flex justify-evenly items-start gap-10 min-[320px]:flex-col sm:flex-row px-5">
//             <div className="w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={bikeleft}
//                 className=" w-full  mt-1  rounded-md hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//             <div className="  w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={bikeright}
//                 className=" w-full   mt-1  rounded-md hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//             <div className="w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={biketop}
//                 className=" w-full  mt-1  rounded-md  hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* social media gallery */}
//       <div className="w-full h-screen  bg-black relative z-10 pb-7 mt-7">
//         <div className="flex flex-col justify-evenly items-center gap-3 mx-auto pt-8 h-full  ">
//           <div className="text-yellow-500 text-5xl  font-extrabold text-center min-[320px]:text-3xl">
//             {" "}
//             Social Media Gallery{" "}
//           </div>
//           <div className="border-2 w-20 border-yellow-500 inline-block mb-5"></div>
//           <div className="w-full h-full flex  justify-around items-center gap-5  px-5">
//             <div
//               className="flex w-1/12 items-center h-full"
//               onClick={handlePrev}
//             >
//               <IoChevronBackCircle className="text-white text-2xl cursor-pointer" />
//             </div>
//             <div className="w-10/12 relative">
//               {posts.map((el, index) => (
//                 <div
//                   key={el.id}
//                   className={`absolute top-0 left-0 w-full h-full  transition-transform duration-300 flex flex-row items-center justify-between ${
//                     index === currentIndex
//                       ? "opacity-100"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//                   style={{
//                     transform: `translateX(${(index - currentIndex) * 100}%)`,
//                   }}
//                 >
//                   <img
//                     src={el.media_url}
//                     className="w-[40%] rounded-md"
//                     alt={`Slide ${index + 1}`}
//                   />
//                   <div className="w-[40%] flex flex-col gap-5  items-center">
//                     <p className="text-white">{el.caption}</p>
//                     <Link to={el.permalink}>
//                       <button
//                         className="p-4  rounded-lg text-white font-semibold"
//                         style={{
//                           background:
//                             "linear-gradient(45deg, #F9CE34, #EE2A7B, #6228D7)",
//                         }}
//                       >
//                         View On Instagram
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div
//               className="flex w-1/12 items-center h-full"
//               onClick={handleNext}
//             >
//               <IoChevronForwardCircleSharp className="text-white text-2xl cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* recent achievement section  */}
//       <div className="w-11/12 max-w-[1204px] mx-auto   pt-11 pb-16 flex flex-col justify-center items-center ">
//         <div className="uppercase text-3xl font-semibold pb-7 min-[320px]:text-lg min-[320px]:text-center sm:text-2xl md:text-3xl">
//           {" "}
//           Our Recent achievements...
//         </div>
//         <Link
//           className="flex justify-center items-center hover:scale-110 transition-all duration-500 "
//           to={
//             "https://hindi.news18.com/news/auto/bike-will-run-100-km-in-just-rs-14-this-kit-will-make-bike-hybrid-8111585.html?1709286970"
//           }
//         >
//           <img
//             src={news}
//             className="w-[70%]  border-black border-2 rounded-md"
//             loading="lazy"
//           />
//         </Link>
//       </div>
//       {/* Media gallery */}
//       <div className="w-full lg:h-screen relative z-10 pb-7 mt-7 bg-black">
//       <div className="flex flex-col justify-evenly items-center gap-2 max-w-[1204px] mx-auto pt-8 h-full">
//         <div className="text-yellow-500 text-5xl font-extrabold text-center min-[320px]:text-3xl">
//           Media Gallery
//         </div>
//         <div className="border-2 w-20 border-yellow-500 inline-block mb-5"></div>
//         <div className="w-full h-full flex justify-around items-center gap-10 sm:flex-row px-5">
//           <div
//             className="flex w-1/12 items-center h-full"
//             onClick={goToPreviousVideo}
//           >
//             <IoChevronBackCircle className="text-white text-2xl cursor-pointer" />
//           </div>

//           <div className="w-10/12 relative flex justify-center items-center">
//             <video
//               ref={video1Ref}
//               controls
//               width="800"
//               style={{ display: currentVideoIndex === 0 ? "block" : "none" }}
//               className="rounded-lg"
//             >
//               <source src="/video1.mp4" type="video/mp4" />
//             </video>
//             <video
//               ref={video2Ref}
//               controls
//               width="800"
//               style={{ display: currentVideoIndex === 1 ? "block" : "none" }}
//               className="rounded-lg"
//             >
//               <source src="/video2.mp4" type="video/mp4" />
//             </video>
//           </div>

//           <div
//             className="flex w-1/12 items-center h-full"
//             onClick={goToNextVideo}
//           >
//             <IoChevronForwardCircleSharp className="text-white text-2xl cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </div>

//       <div></div>
//       <BusinessBook />
//     </div>
//   );
// };
