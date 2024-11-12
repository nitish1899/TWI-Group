import pusparaj from "../resource/pusparaj.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Purushottam() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      }
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pusparaj;
    link.download = "pusparaj.png";
    link.click();
  };

  return (
    <div className="bg-gray-100">
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg flex gap-8 bg-white ">
      <div className="w-1/3">
        <img
          src={pusparaj}
          alt="pusparaj"
          className="rounded-lg object-cover"
        />
      </div>

      <div className="w-2/3">
        <h1 className="text-3xl font-semibold text-gray-800">
          Mr. Purushottam Singhal
        </h1>
        <p className="text-lg text-teal-600 font-medium mt-1">
          CEO, TWI Group
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          An educationist and a qualified doctor with Bachelors in Dental Surgery (BDS),
          Dr. Priti Adani has been treading a path hitherto less travelled in the Corporate
          Social Responsibility (CSR) space. Focusing on the mantra of Growth with Goodness,
          Dr. Adani is as much a businesswoman as she is a responsible citizen helping create
          sustainable solutions to complex problems.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          She has been spearheading Adani Foundation, her brainchild, passionately for two
          decades now – ensuring that the Adani Group helps transform the lives of as many
          people as possible.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Under her guidance and leadership, Adani Foundation has been carrying out its
          activities in four core areas namely, Education, Community Health, Sustainable
          Livelihood Development, and Infrastructure Development. At present, the Foundation
          is helping uplift 3.4 Million people annually across 18 states of the country.
        </p>

        <button
          onClick={handleDownload}
          className="mt-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Download high resolution image
        </button>
      </div>



    </div>
    
    <div className="bg-gray-100 py-12 px-6">
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Our Leadership – One Vision One Team</h2>
          <Slider {...settings}>
            <Link to="/" className="block">
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
            <Link to="/" className="block">
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
            <Link to="/" className="block">
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
            <Link to="/" className="block">
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
            <Link to="/" className="block">
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
          </Slider>
        </div>
      </div>
</div>
    
  );
}

// import pusparaj from "../resource/pusparaj.png";

// export default function Purushottam() {
//     return (
//       <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex gap-8">
//         {/* Left: Image Section */}
//         <div className="w-1/3">
//           <img
//             src={pusparaj} // Replace with the correct path or image URL
//             alt="pusparaji"
//             className="rounded-lg object-cover"
//           />
//         </div>
  
//         {/* Right: Content Section */}
//         <div className="w-2/3">
//           <h1 className="text-3xl font-semibold text-gray-800">
//             Mr. Purushottam Singhal
//           </h1>
//           <p className="text-lg text-teal-600 font-medium mt-1">
//           CEO, TWI Group
//           </p>
  
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             An educationist and a qualified doctor with Bachelors in Dental Surgery (BDS),
//             Dr. Priti Adani has been treading a path hitherto less travelled in the Corporate
//             Social Responsibility (CSR) space. Focusing on the mantra of Growth with Goodness,
//             Dr. Adani is as much a businesswoman as she is a responsible citizen helping create
//             sustainable solutions to complex problems.
//           </p>
  
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             She has been spearheading Adani Foundation, her brainchild, passionately for two
//             decades now – ensuring that the Adani Group helps transform the lives of as many
//             people as possible.
//           </p>
  
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             Under her guidance and leadership, Adani Foundation has been carrying out its
//             activities in four core areas namely, Education, Community Health, Sustainable
//             Livelihood Development, and Infrastructure Development. At present, the Foundation
//             is helping uplift 3.4 Million people annually across 18 states of the country.
//           </p>
  
//           <button className="mt-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
//             Download high resolution image
//           </button>
//         </div>
//       </div>
//     );
//   }
  