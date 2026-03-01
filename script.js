const svg = document.getElementById('apertureSvg');
const bladeGroup = document.getElementById('bladeGroup');
const overlay = document.querySelector('.aperture-overlay');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const photos = document.querySelectorAll('.photo');

const NUM_BLADES = 9;
const OVERLAP_DEG = 12;
const MAX_ROTATION = 55;         // primary iris rotation (degrees)
const PIVOT_RADIUS_RATIO = 0.52; // pivot ring position

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

function buildIris(openAmount) {
    // openAmount: 0 = fully closed, 1 = fully open
    const segAngle = 360 / NUM_BLADES;
    let html = '';

    // Phase 1 (0-0.6): mostly rotation — gives the iris mechanical look
    // Phase 2 (0.6-1): rotation continues + radial translation to clear viewport
    const rotAmount = Math.min(openAmount / 0.6, 1);           // 0→1 over first 60%
    const slideAmount = Math.max((openAmount - 0.4) / 0.6, 0); // 0→1 from 40% onward

    const rotation = rotAmount * MAX_ROTATION;
    const maxSlide = maxRadius * 1.2;

    for (let i = 0; i < NUM_BLADES; i++) {
        const baseAngle = i * segAngle - 90;
        const startAngle = baseAngle;
        const endAngle = baseAngle + segAngle + OVERLAP_DEG;

        // Blade triangle
        const p0 = { x: cx, y: cy };
        const p1 = ptAt(startAngle, bladeReach);
        const p2 = ptAt(endAngle, bladeReach);

        // Pivot on the outer ring (iris rotation)
        const pivotAngle = baseAngle + segAngle * 0.5;
        const pivot = ptAt(pivotAngle, pivotRadius);

        // Radial slide outward along blade midline (to clear viewport)
        const midRad = toRad(pivotAngle);
        const tx = Math.cos(midRad) * maxSlide * slideAmount;
        const ty = Math.sin(midRad) * maxSlide * slideAmount;

        const gradId = i % 2 === 0 ? 'bladeGrad1' : 'bladeGrad2';

        const bladeTransform = `translate(${tx} ${ty}) rotate(${rotation} ${pivot.x} ${pivot.y})`;

        // Rotate first (iris feel), then translate outward (clear screen)
        html += `<polygon
            points="${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y}"
            fill="url(#${gradId})" stroke="url(#${gradId})" stroke-width="1.5"
            stroke-linejoin="round"
            transform="${bladeTransform}"
        />`;

        // "Scroll to Open" engraved exactly along the leading edge of blade 3
        if (i === 3) {
            // Two points on the blade's leading edge (startAngle line from center outward)
            const edgePt1 = ptAt(startAngle, maxRadius * 0.12); // near center
            const edgePt2 = ptAt(startAngle, maxRadius * 0.42); // partway out
            // Midpoint for text anchor
            const tmx = (edgePt1.x + edgePt2.x) / 2;
            const tmy = (edgePt1.y + edgePt2.y) / 2;
            // Exact angle of this edge line (atan2 gives the true pixel angle)
            const dx = edgePt2.x - edgePt1.x;
            const dy = edgePt2.y - edgePt1.y;
            const lineAngleDeg = Math.atan2(dy, dx) * 180 / Math.PI;

            html += `<text
                x="${tmx}" y="${tmy}"
                transform="${bladeTransform}"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="rgba(255,255,255,0.5)"
                font-family="'Georgia', 'Times New Roman', serif"
                font-size="${Math.max(14, vw * 0.015)}px"
                font-weight="400"
                letter-spacing="5"
                rotate="${lineAngleDeg}"
            ><tspan transform="rotate(${lineAngleDeg} ${tmx} ${tmy})">SCROLL TO OPEN</tspan></text>`;
        }
    }

    bladeGroup.innerHTML = html;
}

let ticking = false;

function updateScene() {
    const scrollPosition = window.scrollY;
    const progress = Math.min(scrollPosition / maxScroll, 1);

    // Ease-out curve for mechanical feel
    const easedProgress = 1 - Math.pow(1 - progress, 2.5);

    buildIris(easedProgress);

    // Keep overlay visible — blades physically leave the viewport
    if (progress >= 0.95) {
        overlay.style.opacity = 0;
    } else {
        overlay.style.opacity = 1;
    }

    // Background parallax
    const bgParallax = Math.min(scrollPosition, maxScroll) * 0.3;
    background.style.transform = `translateY(-${bgParallax}px) scale(1.1)`;

    // Slide container up after aperture zone
    if (scrollPosition > maxScroll) {
        container.style.transform = `translateY(-${scrollPosition - maxScroll}px)`;
    } else {
        container.style.transform = 'translateY(0)';
    }

    // Parallax for gallery photos
    for (let i = 0; i < photos.length; i++) {
        const speed = 0.2 + (i * 0.1);
        if (scrollPosition > maxScroll) {
            const photoTranslate = (scrollPosition - maxScroll) * speed;
            photos[i].style.transform = `translateY(-${photoTranslate}px)`;
        } else {
            photos[i].style.transform = 'translateY(0)';
        }
    }

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

recalcDimensions();
updateScene();
