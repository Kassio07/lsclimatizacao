(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#menu');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 20);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu?.classList.toggle('open', !open); header?.classList.toggle('menu-open', !open);
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open'); header?.classList.remove('menu-open'); toggle?.setAttribute('aria-expanded', 'false');
  }));
  const base = 'https://wa.me/5561991471604?text=';
  document.querySelectorAll('.wa-link').forEach(link => {
    link.href = base + encodeURIComponent(link.dataset.message || 'Olá! Encontrei a LS pelo site e gostaria de solicitar informações sobre um serviço.');
    link.target = '_blank'; link.rel = 'noopener';
  });
  const comparison = document.querySelector('.comparison');
  const range = comparison?.querySelector('input[type="range"]');
  range?.addEventListener('input', event => comparison.style.setProperty('--position', `${event.target.value}%`));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const carousel = document.querySelector('.hero-carousel');
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots = [...document.querySelectorAll('.hero-dots button')];
  const previous = document.querySelector('.hero-prev');
  const next = document.querySelector('.hero-next');
  let currentSlide = 0;
  let carouselTimer;
  const showSlide = index => {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      const active = position === currentSlide;
      slide.classList.toggle('active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
    });
    dots.forEach((dot, position) => {
      const active = position === currentSlide;
      dot.classList.toggle('active', active);
      if (active) dot.setAttribute('aria-current', 'true'); else dot.removeAttribute('aria-current');
    });
  };
  const stopCarousel = () => clearInterval(carouselTimer);
  const startCarousel = () => {
    stopCarousel();
    if (!reduced && slides.length > 1) carouselTimer = setInterval(() => showSlide(currentSlide + 1), 6500);
  };
  if (carousel && slides.length) {
    showSlide(0); startCarousel();
    previous?.addEventListener('click', () => { showSlide(currentSlide - 1); startCarousel(); });
    next?.addEventListener('click', () => { showSlide(currentSlide + 1); startCarousel(); });
    dots.forEach((dot, index) => dot.addEventListener('click', () => { showSlide(index); startCarousel(); }));
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
    carousel.addEventListener('focusin', stopCarousel);
    carousel.addEventListener('focusout', event => { if (!carousel.contains(event.relatedTarget)) startCarousel(); });
    carousel.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') { showSlide(currentSlide - 1); startCarousel(); }
      if (event.key === 'ArrowRight') { showSlide(currentSlide + 1); startCarousel(); }
    });
  }
  const items = document.querySelectorAll('.reveal');
  if (!reduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: .12 }); items.forEach(item => observer.observe(item));
  } else items.forEach(item => item.classList.add('visible'));
  const instagramReel = document.querySelector('.instagram-reel[data-src]');
  if (instagramReel) {
    const loadInstagramReel = () => {
      if (!instagramReel.hasAttribute('src')) instagramReel.src = instagramReel.dataset.src;
    };
    if ('IntersectionObserver' in window) {
      const embedObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          loadInstagramReel();
          embedObserver.disconnect();
        }
      }, { rootMargin: '300px 0px' });
      embedObserver.observe(instagramReel);
    } else loadInstagramReel();
  }
  const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
})();
