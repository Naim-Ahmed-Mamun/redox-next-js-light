// "use client";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { fadeAnimation } from "@/utils/title-anim";
// import { clientPinAnimation } from "@/utils/pin-anim";
// import { aboutThreeThumbAnimation, thumbAnimation } from "@/utils/img-anim";
// import { CustomEase, ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";
// import { serviceAnimationTwo } from "@/utils/service-anim";
// import { rrBtnAnimation } from "@/utils/btn-anim";

// type Props = {
//   children: React.ReactNode;
// };

// export default function DesignAgencyWrapper({ children }: Props) {
//   gsap.registerPlugin(CustomEase, ScrollToPlugin, SplitText, ScrollTrigger);
//   useGSAP(() => {
//     const timer = setTimeout(() => {
//       fadeAnimation();
//       clientPinAnimation();
//       aboutThreeThumbAnimation();
//       thumbAnimation();
//       serviceAnimationTwo();
//       rrBtnAnimation();
//     }, 100);
//     return () => clearTimeout(timer);
//   }, {});

//   return children;
// }


"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import imagesLoaded from "imagesloaded";
import { fadeAnimation } from "@/utils/title-anim";
import { clientPinAnimation } from "@/utils/pin-anim";
import { aboutThreeThumbAnimation, thumbAnimation } from "@/utils/img-anim";
import { CustomEase, ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";
import { serviceAnimationTwo } from "@/utils/service-anim";
import { rrBtnAnimation } from "@/utils/btn-anim";

type Props = {
  children: React.ReactNode;
};

export default function DesignAgencyWrapper({ children }: Props) {
  gsap.registerPlugin(CustomEase, ScrollToPlugin, SplitText, ScrollTrigger);

  useGSAP(() => {
    const container = document.body;

    fadeAnimation();
    thumbAnimation();
    
    imagesLoaded(container, { background: true }, () => {
      clientPinAnimation();
      aboutThreeThumbAnimation();
      serviceAnimationTwo();
      rrBtnAnimation();
    });
  }, {});

  return children;
}
