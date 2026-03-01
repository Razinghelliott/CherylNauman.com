const svg = document.getElementById('apertureSvg');
const bladeGroup = document.getElementById('bladeGroup');
const overlay = document.querySelector('.aperture-overlay');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const photos = document.querySelectorAll('.photo');

const NUM_BLADES = 9;
const OVERLAP_DEG = 12;        // angular overlap between adjacent blades
const MAX_OPEN_ANGLE = 38;     // degrees each blade rotates when fully open
const PIVOT_RADIUS_RATIO = 0.5; // pivot ring radius as fraction of maxRadius

let vw, vh, cx, cy, maxRadius, maxScroll, pivotRadius, bladeReach;

function recalcDimensions() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    cx = vw / 2;
    cy = vh / 2;
    maxRadius = Math.sqrt(cx * cx + cy * cy) + 100;
    maxScroll = vh;
    pivotRadius = maxRadius * PIVOT_RADIUS_RATIO;
    bladeReach = maxRadius * 1.4;
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
    const rotation = openAmount * MAX_OPEN_ANGLE;
    let html = '';

    for (let i = 0; i < NUM_BLADES; i++) {
        const baseAngle = i * segAngle - 90;

        // --- Blade shape ---
        // Triangle sector from center outward with angular overlap
        const startAngle = baseAngle;
        const endAngle = baseAngle + segAngle + OVERLAP_DEG;

        const p0 = { x: cx, y: cy };
        const p1 = ptAt(startAngle, bladeReach);
        const p2 = ptAt(endAngle, bladeReach);

        // --- Pivot point on the outer ring ---
        // Each blade pivots from a point on the ring at its sector midpoint
        const pivotAngle = baseAngle + segAngle * 0.5;
        const pivot = ptAt(pivotAngle, pivotRadius);

        // Alternating shade for visible blade distinction
        const gradId = i % 2 === 0 ? 'bladeGrad1' : 'bladeGrad2';

        // Blade polygon
        html += `<polygon
            points="${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y}"
            fill="url(#${gradId})"
            transform="rotate(${rotation} ${pivot.x} ${pivot.y})"
        />`;

        // Leading edge line (the visible blade boundary)
        html += `<line
            x1="${p0.x}" y1="${p0.y}" x2="${p1.x}" y2="${p1.y}"
            stroke="rgba(80,80,80,0.6)" stroke-width="1"
            transform="rotate(${rotation} ${pivot.x} ${pivot.y})"
        />`;
    }

    bladeGroup.innerHTML = html;
}

let ticking = false;

function updateScene() {
    const scrollPosition = window.scrollY;
    const progress = Math.min(scrollPosition / maxScroll, 1);

    // Ease-out for natural mechanical feel
    const easedProgress = 1 - Math.pow(1 - progress, 2.5);

    // Build the iris blades
    buildIris(easedProgress);

    // Fade out overlay — keep blades visible longer so you see the mechanics
    // Only start fading at 80% open
    if (progress >= 0.98) {
        overlay.style.opacity = 0;
    } else if (progress > 0.8) {
        overlay.style.opacity = 1 - ((progress - 0.8) / 0.2);
    } else {
        overlay.style.opacity = 1;
    }

    // Background parallax (transforms only, no layout changes)
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
