
/* ================= SCRIPT.JS ================= */
// Tab navigation
function updateActiveTab() {
  const tabs = document.querySelectorAll('.tab');
  const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const el = document.getElementById(section);
    if (el && el.offsetTop <= scrollPos && scrollPos < (el.offsetTop + el.offsetHeight)) {
      tabs.forEach(tab => tab.classList.remove('active'));
      document.querySelector(`[data-tab="${section}"]`).classList.add('active');
    }
  });
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

window.addEventListener('scroll', updateActiveTab);

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// typing
const text = "System fully initialized. Welcome back, Minato.";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(type, 30);
  }
}
type();

// scroll reveal
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('active');
    }
  });
});

// custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 10 + 'px';
  cursor.style.top = e.clientY - 10 + 'px';
});

document.querySelectorAll('.card, .neon, .links a').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// particles
const canvas = document.getElementById('particles');

// Contact form handler
document.querySelector('#contact form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name') || 'Anonymous';
  alert(`Transmission sent to nyxon.hello@gmail.com!\nThank you, ${name}!`);
  e.target.reset();
});
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() - 0.5,
    vy: Math.random() - 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'cyan';
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    ctx.fillRect(p.x, p.y, 2, 2);
  });
  requestAnimationFrame(animate);
}
animate();
