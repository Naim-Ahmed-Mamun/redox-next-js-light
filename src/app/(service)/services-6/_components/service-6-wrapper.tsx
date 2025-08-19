"use client";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { fadeAnimation, textInvertWithScrollAnimation } from "@/utils/title-anim";
import { throwableAnimation } from "@/utils/throwable-anim";

type Props = {
  children: React.ReactNode;
};

export default function ServiceSixWrapper({ children }: Props) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    const timer = setTimeout(() => {
      fadeAnimation();
      throwableAnimation();
      textInvertWithScrollAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, {});
  return children;
}
