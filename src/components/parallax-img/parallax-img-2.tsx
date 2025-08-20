"use client";
import Image from "next/image";
import gallery_img from "@/assets/imgs/gallery/image-52.webp";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function ParallaxImgTwo() {
  gsap.registerPlugin(ScrollTrigger,CustomEase);
  const handleLoaded = () => {
    ScrollTrigger.refresh();
  };

  return (
    <div className="image-wrapper parallax-view fade-anim">
      <Image
        className="w-100"
        src={gallery_img}
        alt="image"
        data-speed="0.1"
        style={{ height: "auto" }}
        onLoadingComplete={handleLoaded}
      />
    </div>
  );
}
