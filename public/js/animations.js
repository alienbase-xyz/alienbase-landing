window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-illustration", {
    opacity: 0,
    stagger: 0.5,
    delay: 1,
    duration: 0.5,
  });

  gsap.from("h1", {
    y: 30,
    opacity: 0,
    stagger: 0.05,
    delay: 0.05,
    duration: 0.5,
  });

  gsap.from(".h1-paragraph", {
    y: -20,
    opacity: 0,
    stagger: 0.5,
    delay: 0.5,
    duration: 1,
  });

  gsap.from(".hero-cta", {
    y: -20,
    opacity: 0,
    delay: 1,
    duration: 0.5,
  });

  gsap.from(".trade-confident span", {
    y: 20,
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
      start: "20% center+=100px",
      end: "60% 80%",
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
      /* markers: true, */
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
      /* markers: true, */
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

  gsap.from(".partners .partner", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".partners-trigger",
      start: "top-=100px center",
      end: "center center-=100px",
      scrub: 1,
      /* markers: true, */
    },
  });

  gsap.from(".footer-cta", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "footer",
      start: "top+=100px bottom",
      end: "top-=150px 60%",
      scrub: 1,
      /* markers: true, */
    },
  });

  gsap.from(".footer-illustration", {
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "footer",
      start: "top+=100px bottom",
      end: "top-=150px 60%",
      scrub: 1,
      /* markers: true, */
    },
  });
});

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

window.addEventListener("scroll", () => {
  ScrollTrigger.refresh();
});
