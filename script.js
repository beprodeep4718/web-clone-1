// Initialize Lenis
const lenis = new Lenis({
    duration: 1.3,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const image = [
  "https://tympanus.net/Development/ScrollAnimationsGrid/6.56a5d53b.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/20.cae33766.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/2.07ca36b5.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/19.c66c7e95.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/3.f6f48295.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/4.516b9c03.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/5.95d97ae8.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/1.1770e3b3.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/7.87dc6e8b.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/8.0bda5054.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/9.27ccf354.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/18.ab0e512b.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/10.f7990335.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/11.ef4a18eb.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/12.1c611c29.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/13.20baef1e.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/14.73a4162c.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/15.fdc25495.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/16.fce8daf8.jpg",
  "https://tympanus.net/Development/ScrollAnimationsGrid/17.acd308fd.jpg",
];

// Get all image elements
const imageElements = document.querySelectorAll('.aspect-square img');

// Replace image sources with ones from the array
imageElements.forEach((img, index) => {
    // Use modulo to cycle through the image array if we have more elements than images
    const imageIndex = index % image.length;
    img.src = image[imageIndex];
});

document.querySelectorAll('.aspect-square').forEach((elem, index) => {
  let img = elem.querySelector('img');
  let xTransform = gsap.utils.random(-100, 100);
  gsap.timeline()
    .set(img, {
      transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
    }, "start")
    .to(img, {
      scale: 0,
      scrollTrigger: {
        trigger: elem,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    }, "start")
    .to(elem, {
      xPercent: xTransform,
      scrollTrigger: {
        trigger: elem,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    }, "start")
});


