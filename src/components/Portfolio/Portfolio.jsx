import React, { useState } from "react";
import { Hero } from "../Hero/hero";
import imgCake from "../../assets/port2.png";
import imgTown from "../../assets/port3.png";
import imgHome from "../../assets/React.png";

const imgs = [
  { src: imgHome, alt: "Home" },
  { src: imgTown, alt: "Town" },
  { src: imgHome, alt: "Home" },
  { src: imgCake, alt: "Cake" },
  { src: imgCake, alt: "Cake" },
  { src: imgTown, alt: "Town" },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleClick(index) {
    setSelectedImage(imgs[index]);
  }

  function handleClose() {
    setSelectedImage(null);
  }

  return (
    <div className="min-h-dvh bg-white  pt-20">
    <div className=" mx-auto ">
      <div className="white-bg">
     <Hero className="text-slate-700">PORTFOLIO COMPONENT</Hero>
     </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 p-10">
        {imgs.map((ele, index) => (
          <Card
            key={index}
            image={ele.src}
            alt={ele.alt}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {selectedImage && <Model image={selectedImage} onClose={handleClose} />}
    </div>
    </div>
  );
}

// Card Component
function Card({ image, alt, onClick }) {
  return (
    <div
      className="w-full cursor-pointer relative group" // Add `relative` and `group` for hover effects
      onClick={onClick}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-auto object-cover rounded-md"
      />

      {/* Overlay (Second Layer) */}
      <div className="absolute inset-0 bg-[#1abc9ce6]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-md flex items-center justify-center">
      <i class="fa-solid fa-plus text-8xl text-white"></i>
      </div>
    </div>
  );
}

// Model Component
function Model({ image, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-25 flex items-center justify-center"
      onClick={onClose} // Close modal when clicking outside the image
    >
      <div
        className="w-3/4 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg "
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <img src={image.src} alt={image.alt} className="w-full rounded-md" />
      </div>
    </div>
  );
}
