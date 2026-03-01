const svg = document.getElementById('apertureSvg');
const bladeGroup = document.getElementById('bladeGroup');
const overlay = document.querySelector('.aperture-overlay');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const photos = document.querySelectorAll('.photo');

const NUM_BLADES = 8;
let vw, vh, cx, cy, maxRadius, maxScroll;

function recalcDimensions() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    cx = vw / 2;
    cy = vh / 2;
    // Max radius needs to reach the corners of the viewport
    maxRadius = Math.sqrt(cx * cx + cy * cy) + 50;
    maxScroll = vh;
    svg.setAttribute('viewBox', `0 0 ${vw} ${vh}`);
}

// Get a point on a circle in pixel space (always circular regardless of viewport)
function circlePoint(angleDeg, radius) {
    const rad = angleDeg * Math.PI / 180;
    return {
        x: cx + radius * Math.cos(rad),
        y: cy + radius * Math.sin(rad)
    };
}

// Build SVG path for a single blade segment (wedge from inner hole to outer edge)
function buildBladePath(startAngle, endAngle, holeRadius) {
    // Inner edge (the hole) - two points on the inner octagon
    const innerStart = circlePoint(startAngle, holeRadius);
    const innerEnd = circlePoint(endAngle, holeRadius);
    // Outer edge - extend well past viewport
    const outerStart = circlePoint(startAngle, maxRadius);
    const outerEnd = circlePoint(endAngle, maxRadius);

    return `M ${innerStart.x},${innerStart.y} ` +
           `L ${outerStart.x},${outerStart.y} ` +
           `L ${outerEnd.x},${outerEnd.y} ` +
           `L ${innerEnd.x},${innerEnd.y} Z`;
}

// Build all blade segment paths
function buildBlades(holeRadius) {
    const segAngle = 360 / NUM_BLADES;
    const offset = -90; // flat edge on top
    let svgContent = '';

    for (let i = 0; i < NUM_BLADES; i++) {
        const startAngle = offset + i * segAngle;
        const endAngle = offset + (i + 1) * segAngle;
        const gradId = i % 2 === 0 ? 'bladeGrad1' : 'bladeGrad2';
        const d = buildBladePath(startAngle, endAngle, Math.max(holeRadius, 0));

        // Blade segment fill
        svgContent += `<path d="${d}" fill="url(#${gradId})" />`;
        // Blade edge line
        const edgePt = circlePoint(startAngle, maxRadius);
        const innerPt = circlePoint(startAngle, Math.max(holeRadius, 0));
        svgContent += `<line x1="${innerPt.x}" y1="${innerPt.y}" x2="${edgePt.x}" y2="${edgePt.y}" stroke="#444" stroke-width="1.5" />`;
    }

    bladeGroup.innerHTML = svgContent;
}

let ticking = false;

function updateScene() {
    const scrollPosition = window.scrollY;
    const progress = Math.min(scrollPosition / maxScroll, 1);

    // --- Aperture effect ---
    const easedProgress = 1 - Math.pow(1 - progress, 2); // ease-out quad
    const holeRadius = easedProgress * maxRadius;

    buildBlades(holeRadius);

    // Fade out overlay in last 30%
    if (progress >= 0.98) {
        overlay.style.opacity = 0;
    } else if (progress > 0.7) {
        overlay.style.opacity = 1 - ((progress - 0.7) / 0.3);
    } else {
        overlay.style.opacity = 1;
    }

    // --- Background parallax (transforms only) ---
    const bgParallax = Math.min(scrollPosition, maxScroll) * 0.3;
    background.style.transform = `translateY(-${bgParallax}px) scale(1.1)`;

    // Slide container up after aperture zone
    if (scrollPosition > maxScroll) {
        container.style.transform = `translateY(-${scrollPosition - maxScroll}px)`;
    } else {
        container.style.transform = 'translateY(0)';
    }

    // --- Parallax for gallery photos ---
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

// Recalc on resize
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

// Init
recalcDimensions();
updateScene();
