const blades = document.querySelectorAll('.blade');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const photos = document.querySelectorAll('.photo');
const maxScroll = window.innerHeight;


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const progress = Math.min(scrollPosition / maxScroll, 1);

    // --- Aperture iris effect ---
    // Blades rotate open and pull outward from center as you scroll.
    // progress 0 = fully closed, progress 1 = fully open.
    const openAngle = progress * 30;          // each blade rotates up to 30deg open
    const pullBack = progress * 40;           // blades translate away from center
    // Opacity: fully visible until 50% scroll, then fade out over remaining 50%
    const opacity = progress < 0.5 ? 1 : Math.max(0, 1 - ((progress - 0.5) / 0.5));

    blades.forEach((blade) => {
        const baseAngle = parseFloat(blade.getAttribute('data-angle'));
        const rotation = baseAngle + openAngle;
        // Use SVG transform (operates in viewBox coordinate space)
        blade.setAttribute('transform',
            `rotate(${rotation} 50 50) translate(0 -${pullBack})`
        );
        blade.style.opacity = opacity;
    });

    // If we've scrolled past the aperture zone, ensure blades are fully hidden
    if (progress >= 0.98) {
        blades.forEach((blade) => {
            blade.style.opacity = 0;
        });
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
    photos.forEach((photo, index) => {
        const speed = 0.2 + (index * 0.1);
        const photoTranslate = (scrollPosition - maxScroll) * speed;
        if (scrollPosition > maxScroll) {
            photo.style.transform = `translateY(-${photoTranslate}px)`;
        } else {
            photo.style.transform = 'translateY(0)';
        }
    });
});
