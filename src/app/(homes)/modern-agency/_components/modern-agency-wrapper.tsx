"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { charAnimation, fadeAnimation } from "@/utils/title-anim";
import { scaleAnim } from "@/utils/img-anim";
import { CustomEase,SplitText } from "gsap/all";

type Props = {
  children: React.ReactNode;
};

export default function ModernAgencyWrapper({ children }: Props) {
  useGSAP(() => {
    gsap.registerPlugin(CustomEase, SplitText);
    const timer = setTimeout(() => {
      fadeAnimation();
      charAnimation();
      scaleAnim();
    }, 100);
    return () => clearTimeout(timer);
  }, {});
  return children;
}
