import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  height?: string;
  className?: string;
  interval?: number;
}

const Carousel = ({
  images,
  height = "h-screen", 
  className = "",
  interval = 3000,
}: Readonly<CarouselProps>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className={`relative w-full flex items-center justify-center ${height} ${className}`}>
      <div className={`overflow-hidden relative w-full h-full`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
