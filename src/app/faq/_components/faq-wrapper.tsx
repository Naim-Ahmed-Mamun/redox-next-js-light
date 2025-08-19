"use client";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-anim";

type Props = {
  children: React.ReactNode;
};

export default function FaqWrapper({ children }: Props) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    const timer = setTimeout(() => {
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, {});
  return children;
}
