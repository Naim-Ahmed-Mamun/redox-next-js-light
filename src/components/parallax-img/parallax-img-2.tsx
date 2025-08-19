"use client";
import Image from "next/image";
import gallery_img from "@/assets/imgs/gallery/image-52.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxImgTwo() {
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
