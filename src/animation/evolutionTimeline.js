import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const evolutionTimeline = (cards) => {
  gsap.from(cards, {
    opacity: 0,
    y: 120,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger: {
      trigger: cards[0],
      start: "top 80%",
    },
  });
};
