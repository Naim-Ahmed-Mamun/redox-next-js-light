"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-anim";
import { clientPinAnimation } from "@/utils/pin-anim";
import { aboutThreeThumbAnimation, thumbAnimation } from "@/utils/img-anim";
import { CustomEase, ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";

type Props = {
  children: React.ReactNode;
};

export default function DesignAgencyWrapper({ children }: Props) {
  useGSAP(() => {
    gsap.registerPlugin(CustomEase, ScrollToPlugin, SplitText, ScrollTrigger);
    const timer = setTimeout(() => {
      fadeAnimation();
      clientPinAnimation();
      aboutThreeThumbAnimation();
      thumbAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, {});
  return children;
}
