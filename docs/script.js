gsap.registerPlugin(ScrollTrigger);

// Headline animation
gsap.from(".headline span", {
  opacity: 0,
  y: 50,
  stagger: 0.05,
  duration: 1,
  ease: "power3.out"
});

// Stats animation
gsap.to(".stat", {
  opacity: 1,
  y: -10,
  delay: 0.8,
  stagger: 0.3,
  duration: 0.8
});

// Scroll-based animation
gsap.to(".car", {
  x: 800,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom+=500 top",
    scrub: 1
  }
});

// Optional scale effect
gsap.to(".car", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
