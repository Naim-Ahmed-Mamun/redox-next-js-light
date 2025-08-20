/* eslint-disable @next/next/no-img-element */
"use client";
// import Image from "next/image";
// import gallery_img from "@/assets/imgs/gallery/image-52.webp";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function ParallaxImgTwo() {

  return (
    <div className="image-wrapper parallax-view fade-anim">
      <img
        className="w-100"
        src="/assets/imgs/gallery/image-52.webp"
        alt="image"
        data-speed="0.1"
      />
    </div>
  );
}
