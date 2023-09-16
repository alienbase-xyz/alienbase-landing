const lenis = new Lenis();

lenis.on("scroll", (e) => {
  /* console.log(e); */
});

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
