/* eslint-disable @next/next/no-img-element */
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function ParallaxImgTwo() {
  gsap.registerPlugin(ScrollTrigger);
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
