"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "../../../../public/slide1.jpeg";
import image2 from "../../../../public/slide2.jpeg";
import image3 from "../../../../public/slide3.jpeg";
import image4 from "../../../../public/slide4.jpeg";
import image5 from "../../../../public/slide5.png";

interface ImageData {
  src: StaticImageData;
}

const images: ImageData[] = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
  {
    src: image4,
  },
  {
    src: image5,
  },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto">
      <div
        className="relative h-[20rem] object-contain group hover"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
