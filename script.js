const apertureHole = document.getElementById('apertureHole');
const bladeLines = document.getElementById('bladeLines');
const overlay = document.querySelector('.aperture-overlay');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const photos = document.querySelectorAll('.photo');
const maxScroll = window.innerHeight;

const NUM_BLADES = 8;

// Build an octagon of a given radius centered at (50, 50)
function buildAperturePoints(radius) {
    const cx = 50, cy = 50;
    const points = [];
    for (let i = 0; i < NUM_BLADES; i++) {
        const angle = (Math.PI * 2 * i / NUM_BLADES) - Math.PI / 2;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return points.join(' ');
}

let ticking = false;

function updateScene() {
    const scrollPosition = window.scrollY;
    const progress = Math.min(scrollPosition / maxScroll, 1);

    // --- Aperture effect ---
    const easedProgress = 1 - Math.pow(1 - progress, 2);
    const holeRadius = easedProgress * 80;

    if (holeRadius < 0.5) {
        apertureHole.setAttribute('points', '50,50');
        bladeLines.setAttribute('points', '50,50');
    } else {
        const pts = buildAperturePoints(holeRadius);
        apertureHole.setAttribute('points', pts);
        bladeLines.setAttribute('points', pts);
    }

    // Fade out overlay in last 30%
    if (progress >= 0.98) {
        overlay.style.opacity = 0;
    } else if (progress > 0.7) {
        overlay.style.opacity = 1 - ((progress - 0.7) / 0.3);
    } else {
        overlay.style.opacity = 1;
    }

    // --- Background parallax (transform only, no position changes) ---
    const bgParallax = Math.min(scrollPosition, maxScroll) * 0.3;
    background.style.transform = `translateY(-${bgParallax}px) scale(1.1)`;

    // After aperture zone, slide the whole container up so it scrolls away
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

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScene);
        ticking = true;
    }
}, { passive: true });

// Set initial state on load
updateScene();
