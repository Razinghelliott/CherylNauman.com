const svg = document.getElementById('apertureSvg');
const bladeGroup = document.getElementById('bladeGroup');
const overlay = document.querySelector('.aperture-overlay');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const photos = document.querySelectorAll('.photo');

const NUM_BLADES = 9;
const OVERLAP_DEG = 12;

let vw, vh, cx, cy, maxRadius, maxScroll, bladeReach;

function recalcDimensions() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    cx = vw / 2;
    cy = vh / 2;
    maxRadius = Math.sqrt(cx * cx + cy * cy) + 100;
    maxScroll = vh;
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

    // Each blade translates outward along its radial direction
    // AND rotates slightly for that mechanical iris feel
    const maxTranslate = maxRadius * 1.6;
    const maxRotation = 25; // subtle rotation on top of the slide

    for (let i = 0; i < NUM_BLADES; i++) {
        const baseAngle = i * segAngle - 90;
        const startAngle = baseAngle;
        const endAngle = baseAngle + segAngle + OVERLAP_DEG;

        const p0 = { x: cx, y: cy };
        const p1 = ptAt(startAngle, bladeReach);
        const p2 = ptAt(endAngle, bladeReach);

        // Translation: slide outward along the blade's midline angle
        const midAngleDeg = baseAngle + segAngle / 2;
        const midAngleRad = toRad(midAngleDeg);
        const tx = Math.cos(midAngleRad) * maxTranslate * openAmount;
        const ty = Math.sin(midAngleRad) * maxTranslate * openAmount;

        // Small rotation around the blade's outer midpoint for mechanical feel
        const pivotDist = maxRadius * 0.5;
        const pivot = ptAt(midAngleDeg, pivotDist);
        const rot = openAmount * maxRotation;

        const gradId = i % 2 === 0 ? 'bladeGrad1' : 'bladeGrad2';

        html += `<polygon
            points="${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y}"
            fill="url(#${gradId})" stroke="url(#${gradId})" stroke-width="1.5"
            stroke-linejoin="round"
            transform="translate(${tx} ${ty}) rotate(${rot} ${pivot.x} ${pivot.y})"
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

    // Keep overlay fully visible — blades physically leave the viewport
    // Only hide overlay after blades are completely gone (progress near 1)
    if (progress >= 0.95) {
        overlay.style.opacity = 0;
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
