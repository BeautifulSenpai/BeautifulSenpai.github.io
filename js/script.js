let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelector('header .navbar');

window.onscroll = () => {
    const top = window.scrollY;
  
    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
  
      if (top >= offset && top < offset + height) {

        const curActive = navLinks.querySelector(".active");
        if (curActive) {
          curActive.classList.remove("active");
        }
  
        const navLink = navLinks.querySelector(`[href*='#${sec.id}']`);
        if (navLink) {
          navLink.classList.add('active');
        }

        return;
      }
    }
  };



menuIcon.addEventListener('touchstart', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

function changeLanguage(language) {
  const elements = document.querySelectorAll('[data-translate]');
  const placeholders = document.querySelectorAll('[data-translate-placeholder]');

  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    const translation = translations[language][key];

    const fragment = document.createDocumentFragment();

    Array.from(el.childNodes).forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        fragment.appendChild(document.createTextNode(translation));
      } else {
        fragment.appendChild(node.cloneNode(true));
      }
    });

    el.innerHTML = '';
    el.appendChild(fragment);
  });

  placeholders.forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    el.setAttribute('placeholder', translations[language][key]);
  });

  document.getElementById('selected-language').textContent = language === 'en' ? 'English' :
                                                             language === 'ru' ? 'Russian' :
                                                             language === 'zh' ? 'Chinese' :
                                                             'Japanese';

  changeAnimationText(language);
}

function changeAnimationText(language) {
  const textAnimation = document.querySelector('.text-animation span');
  if (textAnimation) {
      const animationCSS = `
          @keyframes words {
              0%, 20% { content: "${translations[language]['text-1']}"; }
              21%, 40% { content: "${translations[language]['text-2']}"; }
              41%, 60% { content: "${translations[language]['text-3']}"; }
              61%, 80% { content: "${translations[language]['text-4']}"; }
              81%, 100% { content: "${translations[language]['text-5']}"; }
          }
      `;
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = animationCSS;
      document.head.appendChild(styleSheet);
  }
}


document.querySelectorAll('.dropdown-menu li').forEach(item => {
  item.addEventListener('click', (e) => {
      const language = e.target.textContent.toLowerCase();
      changeLanguage(language);
  });
});
