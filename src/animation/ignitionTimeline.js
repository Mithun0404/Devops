import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ignitionTimeline = (container) => {
  gsap.fromTo(
    container,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power4.out",
    }
  );
};
