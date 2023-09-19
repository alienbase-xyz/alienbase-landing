gsap.registerPlugin(ScrollTrigger);

gsap.from(".trade-confident span", {
  y: 30,
  opacity: 0,
  stagger: 0.05,
  delay: 0.05,
  duration: 0.1,
  scrollTrigger: {
    trigger: ".trade-trigger",
    start: "end bottom-=100px",
    end: "start+=100px center",
    scrub: true,
    /* markers: true, */
  },
});

gsap.from(".journey-star", {
  y: "30px",
  opacity: 0,
  duration: 0.6,
  delay: 1.4,
});

gsap.from(".nav-wrapper", {
  y: "-100%",
  duration: 1,
});

gsap.to(".area-51-tokens", {
  rotation: 180,
  duration: 5,
  scrollTrigger: {
    trigger: ".area-51-trigger",
    start: "end bottom",
    end: "bottom top",
    scrub: 5,
    /* markers: true, */
  },
});

gsap.from(".earn-feature", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".cards-trigger",
    start: "top bottom",
    end: "top+=300px center",
    scrub: true,
    /* markers: true, */
  },
});

gsap.from(".farm-feature", {
  x: -100,
  opacity: 0,
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".cards-trigger",
    start: "center-=200px center+=100px",
    end: "bottom bottom",
    scrub: 1,
    /* markers: true, */
  },
});

gsap.from(".dual-rewards-feature", {
  x: 100,
  opacity: 0,
  duration: 3,
  delay: 1,
  scrollTrigger: {
    trigger: ".cards-trigger",
    start: "center-=200px center+=100px",
    end: "bottom bottom",
    scrub: 1.5,
    markers: true,
  },
});

gsap.from(".stake-feature", {
  x: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".cards-trigger",
    start: "center-=200px center+=100px",
    end: "bottom bottom",
    scrub: true,
    markers: true,
  },
});

gsap.to(".alb-stars", {
  y: "-30%",
  scale: "1.07",
  duration: 3,
  scrollTrigger: {
    trigger: ".alb-stars-trigger",
    start: "top-=40px bottom",
    end: "bottom top",
    scrub: 2,
    /* markers: true, */
  },
});

gsap.from(".alb-token", {
  scale: ".8",
  duration: 3,
  scrollTrigger: {
    trigger: ".alb-stars-trigger",
    start: "top-=40px bottom",
    end: "bottom top",
    scrub: 2,
    /* markers: true, */
  },
});
