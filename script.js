/* ======================
   PAGE NAVIGATION
====================== */
const pages = document.querySelectorAll(".page");
let current = 0;

// function nextPage() {
//     pages[current].classList.remove("active");
//     current++;
//     pages[current].classList.add("active");

//     if (pages[current].classList.contains("newyear")) {
//         startFireworks();
//     }
// }

function nextPage() {
    startMusic();   // 👈 THIS LINE FIXES EVERYTHING

    pages[current].classList.remove("active");
    current++;
    pages[current].classList.add("active");

    if (pages[current].classList.contains("newyear")) {
        startFireworks();
    }
}


/* ======================
   PROPOSAL LOGIC
====================== */
function accept() {
    pages[current].classList.remove("active");
    current++;
    pages[current].classList.add("active");

    startFireworks();
    animateFinalLove();
}

function moveNo(btn) {
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 70 + "%";
    btn.style.top = Math.random() * 70 + "%";
}

/* ======================
   IMAGE MODAL
====================== */
function openModal(img) {
    modal.style.display = "flex";
    modalImg.src = img.src;
}
function closeModal() {
    modal.style.display = "none";
}

/* ======================
   FINAL LOVE ANIMATION
====================== */
function animateFinalLove() {
    const text = "I love you 3000 ❤️";
    const el = document.getElementById("love3000");
    const universe = document.getElementById("loveUniverse");

    let i = 0;
    el.innerHTML = "";

    const typing = setInterval(() => {
        el.innerHTML = text.slice(0, i);
        i++;
        if (i > text.length) {
            clearInterval(typing);

            // Glow only "3000"
            el.innerHTML = `I love you <span>3000 ❤️</span>`;

            // Show universe line after delay
            setTimeout(() => {
                universe.classList.remove("hidden");
            }, 800);
        }
    }, 70);
}

/* ======================
   PARTICLES (BACKGROUND)
====================== */
const p = document.getElementById("particles");
const pctx = p.getContext("2d");
p.width = innerWidth;
p.height = innerHeight;

let dots = [];
for (let i = 0; i < 70; i++) {
    dots.push({
        x: Math.random() * p.width,
        y: Math.random() * p.height,
        r: Math.random() * 2 + 1
    });
}

function animateParticles() {
    pctx.clearRect(0, 0, p.width, p.height);
    dots.forEach(d => {
        pctx.beginPath();
        pctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        pctx.fillStyle = "rgba(255,200,220,0.6)";
        pctx.fill();
        d.y -= 0.3;
        if (d.y < 0) d.y = p.height;
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* ======================
   SOFT FIREWORKS
====================== */
const fw = document.getElementById("fireworks");
const fctx = fw.getContext("2d");
fw.width = innerWidth;
fw.height = innerHeight;

let fireworks = [];

function startFireworks() {
    setInterval(() => {
        for (let i = 0; i < 30; i++) {
            fireworks.push({
                x: Math.random() * fw.width,
                y: Math.random() * fw.height / 2,
                dx: (Math.random() - 0.5) * 3,
                dy: (Math.random() - 0.5) * 3,
                life: 60,
                color: `hsl(${Math.random() * 360},100%,70%)`
            });
        }
    }, 1200);
}

function animateFireworks() {
    fctx.clearRect(0, 0, fw.width, fw.height);
    fireworks.forEach((f, i) => {
        fctx.beginPath();
        fctx.arc(f.x, f.y, 2, 0, Math.PI * 2);
        fctx.fillStyle = f.color;
        fctx.fill();

        f.x += f.dx;
        f.y += f.dy;
        f.dy += 0.03;
        f.life--;

        if (f.life <= 0) fireworks.splice(i, 1);
    });
    requestAnimationFrame(animateFireworks);
}
animateFireworks();

const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

function startMusic(){
    if(!musicStarted){
        bgMusic.volume = 0.6;
        bgMusic.play().catch(()=>{});
        musicStarted = true;
    }
}
