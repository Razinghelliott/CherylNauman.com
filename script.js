const blades = document.querySelectorAll('.blade');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const photos = document.querySelectorAll('.photo');
const maxScroll = window.innerHeight;


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const progress = Math.min(scrollPosition / maxScroll, 1);

    // --- Aperture iris effect ---
    // Each blade rotates around the center to create widening gaps (like a real iris).
    // progress 0 = closed (blades overlapping, fully covering viewport)
    // progress 1 = open (blades rotated apart, faded out)
    const openAngle = progress * 25;  // each blade rotates up to 25deg to open

    // Opacity: hold fully visible until 40% scroll, then fade to 0
    const opacity = progress < 0.4 ? 1 : Math.max(0, 1 - ((progress - 0.4) / 0.6));

    blades.forEach((blade) => {
        const baseAngle = parseFloat(blade.getAttribute('data-angle'));
        const rotation = baseAngle + openAngle;
        blade.setAttribute('transform', `rotate(${rotation} 50 50)`);
        blade.style.opacity = opacity;
    });

    // Ensure fully hidden once scroll completes
    if (progress >= 0.95) {
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
