
import React from "react";
import { Link } from "react-router-dom";
import pusparaj from "../resource/pusparaj.png";
import uttam from "../resource/uttam.png";



export const Ovot = () => {
  return (
    <div className="w-full min-w-fit overflow-hidden ">
<div className=" py-12 px-6 ">
<div className="container mx-auto p-6">
  {/* Header Section */}
  <div className="text-center mb-12">
 
    <h2 className="text-3xl font-bold mb-4">Our Leadership – One Vision One Team</h2>
    <p className="text-xl text-black mb-8">
    We are a team of more than 46,000+ people across the globe working for a common purpose. We are led by one of India's most visionary Chairman who is supported by a talented and experienced management team.
        </p>
  </div>


{/* Services Section */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
  <div className="text-center p-6 border rounded-lg shadow-lg"> 
    <div className="mb-4">
      <img src={pusparaj} alt="Ocean Transport Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">purushottam singhal</h3>
    <p className="text-gray-600">
    CEO, TWI Group
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg"> 
    <div className="mb-4">
      <img src={uttam} alt="Project Cargo" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Dr.Uttaam singhal</h3>
    <p className="text-gray-600">
    Managing Director, TWI Group
    </p>
  </div>
  <Link to="/Purushottam" className="block">
      <div className="text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4">
          <img
            src={pusparaj} // Replace with the correct image path or URL
            alt="Ocean Transport Services"
            className="mx-auto"
          />
        </div>
        <h3 className="font-bold mb-2">Purushottam Singhal</h3>
        <p className="text-gray-600">CEO, TWI Group</p>
      </div>
    </Link>
</div>
</div>
</div>





 







    </div>
  )
}
