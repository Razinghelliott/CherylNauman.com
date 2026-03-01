const blades = document.querySelectorAll('.blade');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const photos = document.querySelectorAll('.photo');
const maxScroll = window.innerHeight;

// Cache base angles so we don't read the DOM every frame
const baseAngles = Array.from(blades).map(b => parseFloat(b.getAttribute('data-angle')));

let ticking = false;

function updateScene() {
    const scrollPosition = window.scrollY;
    const progress = Math.min(scrollPosition / maxScroll, 1);

    // --- Aperture iris effect ---
    const openAngle = progress * 25;
    const opacity = progress < 0.4 ? 1 : Math.max(0, 1 - ((progress - 0.4) / 0.6));
    const finalOpacity = progress >= 0.95 ? 0 : opacity;

    for (let i = 0; i < blades.length; i++) {
        const rotation = baseAngles[i] + openAngle;
        blades[i].setAttribute('transform', `rotate(${rotation} 50 50)`);
        blades[i].setAttribute('opacity', finalOpacity);
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
