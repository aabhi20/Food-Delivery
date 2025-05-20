import banner2 from "../assets/pictures/banner2.png";
import banner3 from "../assets/pictures/banner3.png";
import banner4 from "../assets/pictures/banner4.png";
import banner5 from "../assets/pictures/banner5.png";

import { useEffect, useState } from "react";

export default function Carousel() {
  const images = [banner2, banner3, banner4, banner5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative ">
      <button
        onClick={goToNext}
        className="absolute top-[50%] -translate-y-[50%] hover:scale-110 w-10 h-10 flex items-center justify-center 
       text-white text-[5rem] bg-[rgba(230,57,70,0.7)] rounded-full 
       transition-all duration-300 z-10 cursor-pointer p-2"
      >
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        }
      </button>
      <img
        src={images[currentIndex]}
        className="overflow-hidden w-full h-[30vh] sm:h-[50vh] object-cover "
      />
      <button
        onClick={goToPrev}
        className="absolute top-[50%] -translate-y-[50%] hover:scale-110 right-0 w-10 h-10 flex items-center justify-center 
       text-white text-[5rem] bg-[rgba(230,57,70,0.7)] rounded-full 
       transition-all duration-300 z-10 cursor-pointer p-2 font-extrabold "
      >
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        }
      </button>
      <div className="flex gap-6 items-center justify-center m-1 bg-[#f7f0d6]">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 border border-black rounded-full transition-all duration-200 
              ${
                currentIndex === index
                  ? "bg-black scale-110"
                  : "bg-white hover:bg-gray-200"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
