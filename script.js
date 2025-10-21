// --- GESTION SLIDERS ---
document.querySelectorAll('.creations-container').forEach(container => {
    const slides = container.querySelectorAll('.creation-slide');
    const prevBtn = container.querySelector('.prev-creation');
    const nextBtn = container.querySelector('.next-creation');
    let current = 0;

    // Slider images internes
    slides.forEach(slide => {
        const images = slide.querySelectorAll('.images-container img');
        const prevImg = slide.querySelector('.prev-img');
        const nextImg = slide.querySelector('.next-img');
        let currentImg = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        }
        prevImg?.addEventListener('click', () => {
            currentImg = (currentImg - 1 + images.length) % images.length;
            showImage(currentImg);
        });
        nextImg?.addEventListener('click', () => {
            currentImg = (currentImg + 1) % images.length;
            showImage(currentImg);
        });
        showImage(currentImg);
    });

    // Slider création principale
    function showSlide(index) {
        slides.forEach((s, i) => {
            s.style.display = i === index ? 'flex' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });
    nextBtn.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    showSlide(current);
});

// --- GESTION MUSIQUE ---
const musique = document.getElementById('musique');
const btn = document.getElementById('toggleMusic');

btn.addEventListener('click', () => {
    if (musique.paused) {
        musique.play();
        btn.textContent = "Couper la musique";
    } else {
        musique.pause();
        btn.textContent = "Jouer la musique";
    }
});