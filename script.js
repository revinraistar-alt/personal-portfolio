// Typing effect for Hero section
const typingText = ["Web Developer", "UI/UX Designer", "Freelancer", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function typeEffect() {
  if (count === typingText.length) {
    count = 0;
  }
  currentText = typingText[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(typeEffect, 1000);
  } else {
    setTimeout(typeEffect, 150);
  }
})();

// Animate skill bars when in view
const skillBars = document.querySelectorAll(".bar div");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      }
    });
  },
  {
    threshold: 0.5,
  }
);

skillBars.forEach((bar) => {
  observer.observe(bar);
});

// Smooth scroll for anchor links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    }
  });
});

// Form validation for contact form
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const name = contactForm.querySelector("input[name='name']");
    const email = contactForm.querySelector("input[name='email']");
    const message = contactForm.querySelector("textarea[name='message']");

    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
}

// Scroll animation for sections (fade in)
const sections = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  sectionObserver.observe(section);
});
