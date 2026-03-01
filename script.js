/* ═══════════════════════════════════════
   CHERYL NAUMAN — SCROLL ENGINE
   Aperture iris + cinematic reveals
   ═══════════════════════════════════════ */

// ── Aperture Elements ──
const svg = document.getElementById('apertureSvg');
const bladeGroup = document.getElementById('bladeGroup');
const overlay = document.querySelector('.aperture-overlay');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const heroTagline = document.querySelector('.hero-tagline');

// ── Aperture Config ──
const NUM_BLADES = 9;
const OVERLAP_DEG = 12;
const MAX_ROTATION = 55;
const PIVOT_RADIUS_RATIO = 0.52;

let vw, vh, cx, cy, maxRadius, maxScroll, pivotRadius, bladeReach;

function recalcDimensions() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    cx = vw / 2;
    cy = vh / 2;
    maxRadius = Math.sqrt(cx * cx + cy * cy) + 100;
    maxScroll = vh;
    pivotRadius = maxRadius * PIVOT_RADIUS_RATIO;
    bladeReach = maxRadius * 1.5;
    svg.setAttribute('viewBox', `0 0 ${vw} ${vh}`);
}

function toRad(deg) { return deg * Math.PI / 180; }

function ptAt(angleDeg, radius) {
    const r = toRad(angleDeg);
    return { x: cx + radius * Math.cos(r), y: cy + radius * Math.sin(r) };
}


// ── Build Iris ──
function buildIris(openAmount) {
    const segAngle = 360 / NUM_BLADES;
    let html = '';

    const rotAmount = Math.min(openAmount / 0.6, 1);
    const slideAmount = Math.max((openAmount - 0.4) / 0.6, 0);
    const rotation = rotAmount * MAX_ROTATION;
    const maxSlide = maxRadius * 1.2;

    for (let i = 0; i < NUM_BLADES; i++) {
        const baseAngle = i * segAngle - 90;
        const startAngle = baseAngle;
        const endAngle = baseAngle + segAngle + OVERLAP_DEG;

        const p0 = { x: cx, y: cy };
        const p1 = ptAt(startAngle, bladeReach);
        const p2 = ptAt(endAngle, bladeReach);

        const pivotAngle = baseAngle + segAngle * 0.5;
        const pivot = ptAt(pivotAngle, pivotRadius);
        const midRad = toRad(pivotAngle);
        const tx = Math.cos(midRad) * maxSlide * slideAmount;
        const ty = Math.sin(midRad) * maxSlide * slideAmount;

        const gradId = i % 2 === 0 ? 'bladeGrad1' : 'bladeGrad2';
        const bladeTransform = `translate(${tx} ${ty}) rotate(${rotation} ${pivot.x} ${pivot.y})`;

        html += `<polygon
            points="${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y}"
            fill="url(#${gradId})" stroke="url(#${gradId})" stroke-width="1.5"
            stroke-linejoin="round"
            transform="${bladeTransform}"
        />`;

        // Embossed text below leading edge of blade 3
        if (i === 3) {
            const edgePt1 = ptAt(startAngle, maxRadius * 0.12);
            const edgePt2 = ptAt(startAngle, maxRadius * 0.42);
            const emx = (edgePt1.x + edgePt2.x) / 2;
            const emy = (edgePt1.y + edgePt2.y) / 2;
            const dx = edgePt2.x - edgePt1.x;
            const dy = edgePt2.y - edgePt1.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            const lineAngleDeg = Math.atan2(dy, dx) * 180 / Math.PI;
            const offsetPx = Math.max(12, vw * 0.018);
            const perpX = (-dy / len) * offsetPx;
            const perpY = (dx / len) * offsetPx;
            const tmx = emx + perpX;
            const tmy = emy + perpY;

            html += `<text
                x="${tmx}" y="${tmy}"
                transform="${bladeTransform} rotate(${lineAngleDeg} ${tmx} ${tmy})"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="rgba(180,180,180,0.4)"
                font-family="'Georgia', 'Times New Roman', serif"
                font-size="${Math.max(13, vw * 0.013)}px"
                font-weight="400"
                letter-spacing="5"
                filter="url(#emboss)"
            >SCROLL TO OPEN</text>`;
        }
    }

    bladeGroup.innerHTML = html;
}


// ── Scroll Reveal System ──
const revealElements = [];

function initReveals() {
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        revealElements.push(el);
    });
}

function checkReveals() {
    const triggerPoint = window.innerHeight * 0.82;
    for (let i = 0; i < revealElements.length; i++) {
        const el = revealElements[i];
        if (el.classList.contains('revealed')) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerPoint) {
            el.classList.add('revealed');
        }
    }
}


// ── Main Scroll Handler ──
let ticking = false;

function updateScene() {
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / maxScroll, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 2.5);

    // Build iris
    buildIris(easedProgress);

    // Overlay visibility
    if (progress >= 0.95) {
        overlay.style.opacity = 0;
    } else {
        overlay.style.opacity = 1;
    }

    // Tagline reveal — fades in as aperture opens, stays through hero viewing
    if (heroTagline) {
        const taglineShow = maxScroll * 0.15;
        const taglineHide = maxScroll * 1.85;
        if (scrollY > taglineShow && scrollY < taglineHide) {
            heroTagline.classList.add('visible');
        } else {
            heroTagline.classList.remove('visible');
        }
    }

    // Background parallax — subtle zoom + drift through full hero viewing
    const bgParallax = scrollY * 0.08;
    const bgScale = 1.1 + (Math.min(progress, 1) * 0.05);
    background.style.transform = `translateY(-${bgParallax}px) scale(${bgScale})`;

    // Check scroll reveals
    checkReveals();

    ticking = false;
}

window.addEventListener('resize', () => {
    recalcDimensions();
    updateScene();
});

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScene);
        ticking = true;
    }
}, { passive: true });

// ── Init ──
recalcDimensions();
initReveals();
updateScene();
