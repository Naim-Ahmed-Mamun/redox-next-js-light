"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useGSAP } from "@gsap/react";
// import { serviceAnimationTwo } from "@/utils/service-anim";

const services = [
  {
    number: "01",
    title: "Art Direction",
    features: [
      "Design Strategy",
      "Prototyping & Wireframe",
      "Design system",
      "Usability testing",
    ],
  },
  {
    number: "02",
    title: "Brand Guideline",
    features: [
      "Design Strategy",
      "Prototyping & Wireframe",
      "Design system",
      "Usability testing",
    ],
  },
  {
    number: "03",
    title: "Art Direction",
    features: [
      "Design Strategy",
      "Prototyping & Wireframe",
      "Design system",
      "Usability testing",
    ],
  },
  {
    number: "04",
    title: "Brand Guideline",
    features: [
      "Design Strategy",
      "Prototyping & Wireframe",
      "Design system",
      "Usability testing",
    ],
  },
];

type IProps = {
  wrapperCls?: string;
};

const ServiceAreaFour = ({wrapperCls}:IProps) => {
 const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const races = sectionRef.current;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const getScrollAmount = () => -(races.scrollWidth - races.clientWidth);
      const wrapperTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: races,
          start: "top top",
          end: `+=${Math.abs(getScrollAmount())}`,
          scrub: 3,
          pin: true,
        },
      });
      wrapperTimeline.to(races.querySelector(".services-wrapper-4"), {
        x: getScrollAmount(),
        delay: 0.05,
        ease: "power1.inOut",
      });

      wrapperTimeline.to(
        races.querySelectorAll(".service-thumb-line-wrapper span"),
        {
          scaleX: 0,
          stagger: 0.04,
          ease: "power1.out",
        },
        "<"
      );
    });

    // ✅ cleanup on unmount
    return () => {
      mm.revert(); // removes matchMedia listeners and GSAP effects
    };
  }, []);
  return (
    <section ref={sectionRef} className="service-area-4">
      <div className="container large">
        <div className="service-area-4-inner">
          <div className={`services-wrapper-box ${wrapperCls || ""}`}>
            <div className="services-wrapper-4">
              {services.map((service, index) => (
                <div className="service-box fade-anim" key={index}>
                  <span className="number">{service.number}</span>
                  <h2 className="title">
                    <Link href="/service-details">{service.title}</Link>
                  </h2>
                  <div className="feature-list">
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="service-thumb">
                <Image
                  src="/assets/imgs/project/image-29.webp"
                  alt="image not found"
                  width={1920}
                  height={970}
                  priority
                  style={{height:"auto"}}
                />
                <div className="service-thumb-line-wrapper">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <span key={i}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaFour;
