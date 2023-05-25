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

  const toBase64 = (str: string) =>
    typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

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
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer())}`}
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

function Shimmer() {
  return `<svg width="275" height="183" viewBox="0 0 275 183" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="275" height="183" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_3506_31" transform="scale(0.00363636 0.00546448)"/>
</pattern>
<image id="image0_3506_31" width="275" height="183" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;
}
