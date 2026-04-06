
// ====navbar====

// toggle class active
const navbarNav=document.querySelector('.navbar-nav');
// ketika hambuger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
    this.TEXT_NODE
  }
});


// ====thema=====
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent = 
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// // ====reveal=====
//   const reveals = document.querySelectorAll(".reveal");
//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("active");
//           observer.unobserve(entry.target); // animasi sekali
//         }
//       });
//     },
//     {
//       threshold: 0.15
//     }
//   );

//   reveals.forEach(el => observer.observe(el));






// ====animasi=====
const butterfly = document.querySelector(".butterfly-follow");

let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;
let targetX = currentX;
let targetY = currentY;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

let lastX = currentX;

function animate() {
  currentX += (targetX - currentX) * 0.22;
  currentY += (targetY - currentY) * 0.22;

  const rotate = (currentX - lastX) * 0.25;
  lastX = currentX;

  butterfly.style.transform = `
    translate(${currentX + 12}px, ${currentY - 12}px)
    rotate(${rotate}deg)
  `;

  requestAnimationFrame(animate);
}

animate();



const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
let index = 0;

document.querySelector(".next").onclick = () => {
  if (index < slides.length - 1) {
    index++;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
};

document.querySelector(".prev").onclick = () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
};







