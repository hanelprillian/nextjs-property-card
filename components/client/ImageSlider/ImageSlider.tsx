"use client";

import { useState } from "react";
import "./style.css";
import Image from "next/image";

export interface IImageSlider {
  images: string[];
}

export default function ImageSlider(props: IImageSlider) {
  const { images } = props;
  const [currentImg, setCurrentImg] = useState<number>(0);

  function handlePrev() {
    setCurrentImg((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  function handleNext() {
    setCurrentImg((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <section className="image-slider">
      <button role="button" className="image-slider__nav prev flex items-center justify-center" onClick={handlePrev}>
        <ChevronLeftIcon />
      </button>
      <div className="slider-container">
        {images.map((image, index) => (
          <Image
            loader={({ src }) => src}
            key={index}
            src={image}
            alt={`Slide Image ${index}`}
            className={`slider-image ${index === currentImg ? "active" : "hidden"}`}
            width={0}
            height={0}
          />
        ))}
      </div>
      <button role="button" className="image-slider__nav next flex items-center justify-center" onClick={handleNext}>
        <ChevronRightIcon />
      </button>
    </section>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3169 29.3271C13.6762 29.6709 14.1137 29.8584 14.6137 29.8584C15.6606 29.8584 16.4731 29.0459 16.4731 28.0146C16.4731 27.499 16.27 27.0303 15.9106 26.6709L4.97311 15.9834L15.9106 5.32715C16.27 4.96777 16.4731 4.4834 16.4731 3.9834C16.4731 2.95215 15.6606 2.13965 14.6137 2.13965C14.1137 2.13965 13.6762 2.32715 13.3325 2.6709L1.17624 14.5459C0.738739 14.9521 0.519989 15.4521 0.519989 15.999C0.519989 16.5459 0.738739 17.0146 1.16061 17.4365L13.3169 29.3271Z"
        fill="white"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.35938 29.8587C2.875 29.8587 3.29688 29.6712 3.65625 29.3275L15.8125 17.4525C16.2344 17.015 16.4531 16.5619 16.4531 15.9994C16.4531 15.4525 16.25 14.9681 15.8125 14.5619L3.65625 2.67125C3.29688 2.3275 2.875 2.14 2.35938 2.14C1.3125 2.14 0.5 2.9525 0.5 3.98375C0.5 4.48375 0.71875 4.96812 1.0625 5.3275L12.0156 16.015L1.0625 26.6712C0.703125 27.0462 0.5 27.4994 0.5 28.015C0.5 29.0462 1.3125 29.8587 2.35938 29.8587Z"
        fill="white"
      />
    </svg>
  );
}
