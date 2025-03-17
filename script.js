const blades = document.querySelectorAll('.blade');
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const photos = document.querySelectorAll('.photo');
const maxScroll = window.innerHeight;


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const progress = Math.min(scrollPosition / maxScroll, 1);
    
    // Aperture effect
    const scaleFactor = 1 - (progress * 0.6);
    const translateFactor = progress * 300;
    const opacity = progress < 0.6 ? 1 : (1 - ((progress - 0.6) / 0.4));
    
    blades.forEach((blade, index) => {
        const baseRotation = index * 60;
        blade.style.transform = `
            rotate(${baseRotation}deg)
            scale(${scaleFactor})
            translateY(-${translateFactor}px)
        `;
        blade.style.opacity = opacity;


        if (progress === 1) {
            blade.style.transform = `
                rotate(${baseRotation}deg)
                scale(0.1)
                translateY(-300px)
            `;
            blade.style.opacity = '0';
        }
    });


    // Main background parallax
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


    if (scrollPosition < maxScroll) {
        blades.forEach(blade => {
            blade.style.opacity = `${opacity}`;
        });
    } else {
        blades.forEach(blade => {
            blade.style.opacity = '0';
        });
    }


    // Parallax for additional photos
    photos.forEach((photo, index) => {
        const speed = 0.2 + (index * 0.1); // Different speeds: 0.2, 0.3, 0.4, 0.5, 0.6
        const photoTranslate = (scrollPosition - maxScroll) * speed;
        if (scrollPosition > maxScroll) {
            photo.style.transform = `translateY(-${photoTranslate}px)`;
        } else {
            photo.style.transform = `translateY(0)`;
        }
    });
});