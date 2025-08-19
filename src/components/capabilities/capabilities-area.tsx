import React from "react";
import Image, { StaticImageData } from "next/image";
// client images
import client_1 from '@/assets/imgs/client/client-23.webp';
import client_2 from '@/assets/imgs/client/client-24.webp';
import client_3 from '@/assets/imgs/client/client-25.webp';
import client_4 from '@/assets/imgs/client/client-26.webp';
import client_5 from '@/assets/imgs/client/client-27.webp';
import client_6 from '@/assets/imgs/client/client-28.webp';
import client_7 from '@/assets/imgs/client/client-29.webp';
// gallery img
import gallery_img from '@/assets/imgs/gallery/image-42.webp';
// capability img
import capability_img from '@/assets/imgs/gallery/image-39.webp';
import capability_img_2 from '@/assets/imgs/gallery/image-40.webp';
import capability_img_3 from '@/assets/imgs/gallery/image-41.webp';

interface Capability {
  title: string;
  images?: StaticImageData[];
  link?: string;
}

const clients = [
  client_1,
  client_2,
  client_3,
  client_4,
  client_5,
  client_6,
  client_7,
  client_1,
  client_2,
  client_3,
  client_4,
  client_5,
  client_6,
  client_7,
];

const capabilities: Capability[] = [
  {
    title: "Innovation",
    images: [capability_img, capability_img_2, capability_img_3],
  },
  {
    title: "Research and insight",
    images: [capability_img_2, capability_img_3],
  },
  {
    title: "Product design",
    images: [capability_img, capability_img_2, capability_img_3],
  },
  {
    title: "Technology",
    images: [capability_img,capability_img_3],
  },
  {
    title: "Digital marketing",
    images: [capability_img, capability_img_2, capability_img_3],
  },
  {
    title: "Creative Writing",
    images: [capability_img, capability_img_2],
  },
  {
    title: "Brand design",
    images: [capability_img, capability_img_2, capability_img_3],
  },
  {
    title: "+19 More",
  },
];

export default function CapabilitiesArea() {
  return (
    <section className="capabilities-area section-spacing-top">
      <div className="container large">
        <div className="capabilities-area-inner client-pin-area">
          {/* client area start */}
          <div className="client-area-4 client-pin-element">
            <div className="client-area-4-inner">
              <div className="video-wrapper-box">
                <div className="thumb">
                  <Image src={gallery_img} alt="image" style={{height:'auto'}} />
                </div>
                <a className="btn-circle video-popup" href="https://rrdevs.net/project-video/group-meeting.mp4">
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>
              <div className="clients-wrapper-box">
                <div className="fix">
                  <div className="clients-wrapper">
                    {clients.map((src, idx) => (
                      <div className="client-box" key={idx}>
                        <Image src={src} alt={`client-${idx}`} style={{height:'auto'}} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* client area end */}

          <div className="section-content-wrapper section-spacing-bottom">
            <div className="section-content">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">Capabilities</span>
                </div>
              </div>
              <div className="text-wrapper">
                <p className="text">
                  Our approach combines creativity with insights, using user data to refine designs that are not only appealing but also more effective.
                </p>
              </div>
            </div>
            <div className="capability-wrapper-box">
              <div className="capability-wrapper capability-hover-active">
                {capabilities.map((cap, index) => (
                  <div className={`capability-box${index === 0 ? " active" : ""}`} key={index}>
                    <a href={cap.link}>
                      <div className="capability-box-inner">
                        <div className="content">
                          <h3 className={`title ${cap.title === "+19 More" ? "rr-btn-underline" : ""}`}>
                            {cap.title}
                          </h3>
                        </div>
                        {cap.images && (
                          <div className="thumb">
                            {cap.images.map((img, imgIdx) => (
                              <Image key={imgIdx} src={img} alt="image" style={{height:'auto'}} />
                            ))}
                          </div>
                        )}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

