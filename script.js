// Jednoduchý skript pro automatické střídání fotek
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Schováme všechny slidy (odebereme třídu active)
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Ukážeme aktuální slide
    slides[slideIndex - 1].classList.add('active');

    // Spustí se znovu za 4 sekundy (4000 ms)
    setTimeout(showSlides, 4000);
}

// Spuštění po načtení stránky
document.addEventListener('DOMContentLoaded', showSlides);
