export const shakeAnimation = (element: HTMLDivElement | null) => {
  if (element) {
    gsap.fromTo(
      element,
      { x: -10 },
      {
        x: 10,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        ease: "power2.inOut",
      }
    );
  }
};
