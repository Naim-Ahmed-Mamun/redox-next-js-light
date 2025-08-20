import gsap from "gsap";
import { SplitText } from "gsap/SplitText";


export const serviceAnimation = () => {
  if (document.querySelectorAll(".actually-area").length > 0) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".actually-area",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "bottom+=1500 top",
      }
    });
    const t_line = new SplitText(".t_line", { type: "lines" });
    t_line.lines.forEach((target) => {
      tl.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: 'top 25%',
          end: "center 25%",
        }
      });
    });
    tl.to(".actually-area .section-title", {
      scale: 40,
      opacity: 0,
      ease: "power4.inOut",
      delay: 0.35,
      duration: 0.75,
    });
    tl.to(".actually-area", {
      backgroundColor: "#111111",
      duration: 0.45,
    }, "-=0.50");
  }
}


export const serviceAnimationTwo = (): void => {
  const section = document.querySelector(".service-area-4");
  if (!section) return;

  // Helper to wait for all images in the section to load
  const waitForImages = (container: HTMLElement, cb: () => void) => {
    const images = Array.from(container.querySelectorAll('img')) as HTMLImageElement[];
    if (images.length === 0) {
      cb();
      return;
    }
    let loaded = 0;
    images.forEach(img => {
      if (img.complete) {
        loaded++;
        if (loaded === images.length) cb();
      } else {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === images.length) cb();
        });
        img.addEventListener('error', () => {
          loaded++;
          if (loaded === images.length) cb();
        });
      }
    });
  };

  const mm = gsap.matchMedia();

  waitForImages(section as HTMLElement, () => {
    mm.add("(min-width: 1024px)", () => {
      const races = document.querySelector(".service-area-4") as HTMLElement | null;
      if (!races) return;

      const racesScrollWidth: number = races.scrollWidth;
      const containerWidth: number = races.offsetWidth;

      const getScrollAmount = (): number => -(racesScrollWidth - containerWidth);

      const wrapperTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: races,
          start: "bottom bottom", // Pin starts when section bottom hits viewport bottom
          end: `+=${Math.abs(getScrollAmount())}`,
          scrub: 3,
          pin: true,
        },
      });

      wrapperTimeline.to(".services-wrapper-4", {
        x: getScrollAmount(),
        delay: 0.05,
        ease: "power1.inOut",
      });

      wrapperTimeline.to(
        ".service-thumb-line-wrapper span",
        {
          scaleX: 0,
          stagger: 0.04,
          ease: "power1.out",
        },
        "<"
      );
    });
  });
};