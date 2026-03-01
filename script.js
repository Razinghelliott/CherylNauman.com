const apertureHole = document.getElementById('apertureHole');
const bladeLines = document.getElementById('bladeLines');
const overlay = document.querySelector('.aperture-overlay');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const photos = document.querySelectorAll('.photo');
const maxScroll = window.innerHeight;

const NUM_BLADES = 8;

// Build an octagon (or n-gon) of a given radius centered at (50, 50)
function buildAperturePoints(radius) {
    const cx = 50, cy = 50;
    const points = [];
    for (let i = 0; i < NUM_BLADES; i++) {
        // Offset by half a segment so flat edge is on top
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
    // Hole grows from 0 radius to 80 (well beyond viewport edges)
    // Use an eased progress for a more natural feel
    const easedProgress = 1 - Math.pow(1 - progress, 2); // ease-out quad
    const holeRadius = easedProgress * 80;

    if (holeRadius < 0.5) {
        // Fully closed - just a point
        apertureHole.setAttribute('points', '50,50');
        bladeLines.setAttribute('points', '50,50');
    } else {
        const pts = buildAperturePoints(holeRadius);
        apertureHole.setAttribute('points', pts);
        bladeLines.setAttribute('points', pts);
    }

    // Fade out the entire overlay in the last 30% of scroll
    if (progress > 0.7) {
        const fadeProgress = (progress - 0.7) / 0.3;
        overlay.style.opacity = 1 - fadeProgress;
    } else {
        overlay.style.opacity = 1;
    }

    // Hide completely when done
    if (progress >= 0.98) {
        overlay.style.opacity = 0;
    }

    // --- Main background parallax ---
    const bgTranslate = scrollPosition * 0.3;
    if (scrollPosition <= maxScroll) {
        background.style.transform = `translateY(-${bgTranslate}px) scale(1.1)`;
        container.style.position = 'fixed';
        container.style.top = '0';
    } else {
        container.style.position = 'absolute';
        container.style.top = `${maxScroll}px`;
        background.style.transform = `translateY(-${maxScroll * 0.3}px) scale(1.1)`;
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

// Run once on load to set initial state
updateScene();
