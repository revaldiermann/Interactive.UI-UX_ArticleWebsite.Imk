// // // toggle class active
// // const navbarNav=document.querySelector('.navbar-nav');

// // // ketika hambuger menu di klik
// // document.querySelector('#hamburger-menu').onclick = () => {
// //   navbarNav.classList.toggle('active');
// // };

// // //klik di luar sidebar untuk menghilangkan nav
// // const hamburger = document.querySelector('#hamburger-menu');

// // document.addEventListener('click', function (e) {
// //   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
// //     navbarNav.classList.remove('active');
// //     this.TEXT_NODE
// //   }
// // });
// // // thema

// //   const toggleBtn = document.getElementById("themeToggle");

// //   toggleBtn.addEventListener("click", () => {
// //     document.body.classList.toggle("dark");

// //     toggleBtn.textContent =
// //       document.body.classList.contains("dark") ? "☀️" : "🌙";
// //   });

// const butterfly = document.querySelector(".butterfly-follow");

// let currentX = window.innerWidth / 2;
// let currentY = window.innerHeight / 2;
// let targetX = currentX;
// let targetY = currentY;

// let mouseX = currentX;
// let mouseY = currentY;

// let idleTime = 0;
// let idleX = currentX;
// let idleY = currentY;

// document.addEventListener("mousemove", (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
//   idleTime = 0;
// });

// // random idle target
// function randomIdle() {
//   idleX = Math.random() * window.innerWidth;
//   idleY = Math.random() * window.innerHeight * 0.6;
// }

// function animate() {
//   idleTime++;

//   const dx = mouseX - currentX;
//   const dy = mouseY - currentY;
//   const distance = Math.sqrt(dx * dx + dy * dy);

//   // 🦋 MODE: TAKUT JIKA TERLALU DEKAT
//   if (distance < 120) {
//     targetX = currentX - dx * 1.5;
//     targetY = currentY - dy * 1.5;
//   }
//   // 💤 MODE: IDLE (mouse diam)
//   else if (idleTime > 120) {
//     if (idleTime % 180 === 0) randomIdle();
//     targetX = idleX;
//     targetY = idleY;
//   }
//   // 🎯 MODE: NGIKUT
//   else {
//     targetX = mouseX;
//     targetY = mouseY;
//   }

//   // smooth follow
//   currentX += (targetX - currentX) * 0.08;
//   currentY += (targetY - currentY) * 0.08;

//   // zig-zag kecil
//   const zigzag = Math.sin(Date.now() * 0.004) * 12;

//   // rotasi arah terbang
//   const rotate = dx * 0.05;

//   butterfly.style.transform = `
//     translate(${currentX}px, ${currentY + zigzag}px)
//     rotate(${rotate}deg)
//   `;

//   requestAnimationFrame(animate);
// }


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




// animate();
feather.replace();

// DARK MODE
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
};

// ANIMATION ON SCROLL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll("[data-animate], .reveal")
  .forEach((el) => observer.observe(el));

const butterfly = document.querySelector(".butterfly-follow");

let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;
let targetX = currentX;
let targetY = currentY;

let mouseX = currentX;
let mouseY = currentY;

let idleTime = 0;
let idleX = currentX;
let idleY = currentY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  idleTime = 0;
});

// random idle target
function randomIdle() {
  idleX = Math.random() * window.innerWidth;
  idleY = Math.random() * window.innerHeight * 0.6;
}

function animate() {
  idleTime++;

  const dx = mouseX - currentX;
  const dy = mouseY - currentY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // 🦋 MODE: TAKUT JIKA TERLALU DEKAT
  if (distance < 120) {
    targetX = currentX - dx * 1.5;
    targetY = currentY - dy * 1.5;
  }
  // 💤 MODE: IDLE (mouse diam)
  else if (idleTime > 120) {
    if (idleTime % 180 === 0) randomIdle();
    targetX = idleX;
    targetY = idleY;
  }
  // 🎯 MODE: NGIKUT
  else {
    targetX = mouseX;
    targetY = mouseY;
  }

  // smooth follow
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  // zig-zag kecil
  const zigzag = Math.sin(Date.now() * 0.004) * 12;

  // rotasi arah terbang
  const rotate = dx * 0.05;

  butterfly.style.transform = `
    translate(${currentX}px, ${currentY + zigzag}px)
    rotate(${rotate}deg)
  `;

  requestAnimationFrame(animate);
}
animate();
