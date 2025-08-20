"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { charAnimation, fadeAnimation } from "@/utils/title-anim";
import { scaleAnim } from "@/utils/img-anim";
import { CustomEase,ScrollTrigger,SplitText } from "gsap/all";

type Props = {
  children: React.ReactNode;
};

export default function ModernAgencyWrapper({ children }: Props) {

  gsap.registerPlugin(CustomEase, SplitText,ScrollTrigger);

  useGSAP(() => {
    const container = document.body;
    imagesLoaded(container, { background: true }, () => {
      fadeAnimation();
      charAnimation();
      scaleAnim();
    });
  }, {});
  
  return children;
}
