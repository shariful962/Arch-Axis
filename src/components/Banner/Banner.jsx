// 'use client'

// import { useState } from "react";
// import Image from 'next/image';
// import Link from "next/link";
// import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
// import { GoArrowRight, GoArrowUp, GoArrowDown } from "react-icons/go";
// import slide1 from '../../assets/slider1.jpg';
// import slide2 from '../../assets/slider2.jpg';

// const slides = [
//   {
//     image: slide1,
//     topTitle: "Crafted with innovation and excellence.",
//     midTitle: "We Provide",
//     title: "ARCHITECTURE D/",
//     buttonText: "Our Services"
//   },
//   {
//     image: slide2,
//     topTitle: "Crafted with innovation and excellence.",
//     midTitle: "We Provide",
//     title: "ARCHITECTURE D/",
//     buttonText: "Our Services"
//   },
// ];

// const Banner = () => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((current + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((current - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative w-full h-[700px] overflow-hidden">
//       {/* Background Image with overlay */}
//       <div className="w-full h-full transition-all duration-700 relative">
//         <Image
//           src={slides[current].image}
//           alt="Slide Image"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/50 z-10">
//           <div className="wrapper h-full flex items-center pl-4 md:pl-10">
//             <div className="text-white space-y-6 z-20 relative">
//               <h3 className="text-lg tracking-widest">{slides[current].topTitle}</h3>
//               <h2 className="text-3xl md:text-5xl font-semibold">{slides[current].midTitle}</h2>
//               <h1 className="text-4xl md:text-7xl font-extrabold">{slides[current].title}</h1>
//               <Link href="/services">
//                 <button className="mt-6 px-8 py-3 bg-white text-main text-lg font-medium rounded-full cursor-pointer flex items-center gap-x-2">
//                   {slides[current].buttonText} <GoArrowRight size={24} />
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Arrow buttons */}
//       <div className="absolute bottom-4 right-8 flex flex-col space-y-4 z-30">
//         <button
//           onClick={prevSlide}
//           className="bg-white h-12 w-12 rounded-full hover:bg-gray-300 transition-all cursor-pointer flex items-center justify-center"
//         >
//           <GoArrowUp className="text-main" size={22} />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-white h-12 w-12 rounded-full hover:bg-gray-300 transition-all cursor-pointer flex items-center justify-center"
//         >
//           <GoArrowDown className="text-main" size={22} />
//         </button>
//       </div>

//       {/* Social Icons */}
//       <div className="absolute top-16 right-8 flex flex-col items-center space-y-4 text-white text-2xl z-30">
//         {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, index) => (
//           <div
//             key={index}
//             className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
//           >
//             <Icon className="text-main" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;



'use client'

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { GoArrowRight, GoArrowUp, GoArrowDown } from "react-icons/go";
import slide1 from '../../assets/slider1.jpg';
import slide2 from '../../assets/slider2.jpg';

const slides = [
  {
    image: slide1,
    topTitle: "Crafted with innovation and excellence.",
    midTitle: "We Provide",
    title: "ARCHITECTURE D/",
    buttonText: "Our Services"
  },
  {
    image: slide2,
    topTitle: "Crafted with innovation and excellence.",
    midTitle: "We Provide",
    title: "ARCHITECTURE D/",
    buttonText: "Our Services"
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // auto-slide every 5 seconds
    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="w-full h-full relative transition-all duration-700">
        <Image
          src={slides[current].image}
          alt="Slide"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay and Text */}
        <div className="absolute inset-0 bg-black/50 z-10">
          <div className="max-w-7xl h-full mx-auto flex items-center px-4 md:px-10">
            <div className="text-white space-y-6 z-20 relative">
              <h3 className="text-lg tracking-widest">{slides[current].topTitle}</h3>
              <h2 className="text-3xl md:text-5xl font-semibold">{slides[current].midTitle}</h2>
              <h1 className="text-4xl md:text-7xl font-extrabold">{slides[current].title}</h1>
              <Link href="/services">
                <button className="mt-6 px-8 py-3 bg-white text-main text-lg font-medium rounded-full cursor-pointer flex items-center gap-x-2">
                  {slides[current].buttonText} <GoArrowRight size={24} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-4 right-8 flex flex-col space-y-4 z-30">
        <button
          onClick={prevSlide}
          className="bg-white h-12 w-12 rounded-full hover:bg-gray-300 transition-all cursor-pointer flex items-center justify-center"
        >
          <GoArrowUp className="text-main" size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white h-12 w-12 rounded-full hover:bg-gray-300 transition-all cursor-pointer flex items-center justify-center"
        >
          <GoArrowDown className="text-main" size={22} />
        </button>
      </div>

      {/* Social Icons */}
      <div className="absolute top-16 right-8 flex flex-col items-center space-y-4 text-white text-2xl z-30">
        {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
          >
            <Icon className="text-main" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
