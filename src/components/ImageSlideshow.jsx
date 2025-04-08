import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OneUndOne from '../assets/1&1.png'
import freenet from '../assets/freenet.svg'
import O2 from '../assets/O2.png'
import vodaphone from '../assets/vodaphone.svg'
import telekom from '../assets/telekom.svg'

const images = [
  OneUndOne,
  telekom,
  O2,
  vodaphone
];

export default function ImageSlideshow() {
  const [startIndex, setStartIndex] = useState(0);
  const slideshowRef = useRef(null);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(images[(startIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <div className="relative w-full bg-white p-4 overflow-hidden shadow-md rounded-2xl">
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <div
        ref={slideshowRef}
        className="flex justify-between transition-all duration-700 gap-2"
      >
        {getVisibleImages().map((imgSrc, index) => (
          <div key={index} className="flex-shrink-0 w-[128px] h-[128px]">
            <img
              src={imgSrc}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
