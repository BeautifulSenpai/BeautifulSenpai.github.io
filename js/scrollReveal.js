ScrollReveal ({
    reset: false,
    distance: '60px',
    duration: 2500,
    delay: 400
});
ScrollReveal().reveal('.home-img', {delay: 100, origin: 'left'});
ScrollReveal().reveal('.home-content h1, .text-animation', {delay: 100, origin: 'right'});
ScrollReveal().reveal('.social-icons, .btn-group, .timeline-item, .form-contact', {delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.heading, .services-container', {delay: 100, origin: 'top'});