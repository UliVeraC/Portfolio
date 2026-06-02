// Carrusel sobrio compartido por las páginas de proyecto.
// Genera los indicadores (dots) según el número real de slides y se
// autodesactiva cuando solo hay una imagen.
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('carousel');
    if (!root) return;

    const track = root.querySelector('[data-carousel-track]');
    const slides = track ? Array.from(track.children) : [];
    if (!track || slides.length === 0) return;

    const btnPrev = root.querySelector('[data-carousel-prev]');
    const btnNext = root.querySelector('[data-carousel-next]');
    const dotsWrap = root.querySelector('[data-carousel-dots]');

    // Una sola imagen: oculta controles e indicadores, no hay nada que rotar.
    if (slides.length < 2) {
        [btnPrev, btnNext, dotsWrap].forEach((el) => el && el.classList.add('hidden'));
        return;
    }

    // Genera un dot por slide.
    const dots = slides.map((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Ir a la imagen ${i + 1}`);
        dot.className =
            'h-2 w-2 rounded-full bg-faint transition-all data-[active=true]:w-5 data-[active=true]:bg-accent';
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
        return dot;
    });

    let index = 0;
    let autoplayId = null;
    const INTERVAL = 4500;

    function goTo(i) {
        index = (i + slides.length) % slides.length;
        track.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach((d, di) => (d.dataset.active = String(di === index)));
    }
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    btnNext && btnNext.addEventListener('click', next);
    btnPrev && btnPrev.addEventListener('click', prev);

    root.tabIndex = 0;
    root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
    });

    // Swipe táctil
    let startX = 0, deltaX = 0, touching = false;
    track.addEventListener('touchstart', (e) => {
        touching = true; startX = e.touches[0].clientX; deltaX = 0;
        clearInterval(autoplayId);
    }, { passive: true });
    track.addEventListener('touchmove', (e) => {
        if (touching) deltaX = e.touches[0].clientX - startX;
    }, { passive: true });
    track.addEventListener('touchend', () => {
        touching = false;
        if (Math.abs(deltaX) > 50) (deltaX < 0 ? next() : prev());
        startAutoplay();
    });

    function startAutoplay() {
        clearInterval(autoplayId);
        autoplayId = setInterval(next, INTERVAL);
    }
    root.addEventListener('mouseenter', () => clearInterval(autoplayId));
    root.addEventListener('mouseleave', startAutoplay);

    goTo(0);
    startAutoplay();
});

// Volver a la home conservando la posición de scroll: si llegamos aquí desde
// el index, usamos history.back() (el navegador restaura el scroll exacto, p. ej.
// la card del proyecto). Si no hay ese historial, el href `index.html#exp` sirve
// de respaldo y aterriza en la sección Experiencia.
document.addEventListener('DOMContentLoaded', () => {
    const ref = document.referrer;
    if (!ref || history.length < 2) return;
    let fromHome = false;
    try {
        const path = new URL(ref, location.href).pathname;
        fromHome = path.endsWith('/index.html') || path.endsWith('/');
    } catch (_) { /* referrer inválido: usamos el href de respaldo */ }
    if (!fromHome) return;

    document.querySelectorAll('[data-back]').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            history.back();
        });
    });
});
