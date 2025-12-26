import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const driveTimeline = (textEl, bgEl) => {
  ScrollTrigger.create({
    trigger: bgEl,
    start: "top bottom",
    end: "bottom top",
    scrub: true,

    onUpdate: (self) => {
      const p = self.progress;

      // Distance from center (0.5)
      const distanceFromCenter = Math.abs(p - 0.5);

      // Blur logic (tweak multiplier for intensity)
      const blurValue = Math.min(distanceFromCenter * 20, 8);

      // Apply blur
      bgEl.style.filter = `blur(${blurValue}px) scale(${1 + blurValue * 0.01})`;

      // Text logic
      if (distanceFromCenter < 0.1) {
        textEl.style.opacity = 1;
        textEl.style.transform = "scale(1.1)";
        textEl.style.letterSpacing = "22px";
      } else {
        textEl.style.opacity = 0.5;
        textEl.style.transform = "scale(1)";
        textEl.style.letterSpacing = "12px";
      }
    },
  });
};
