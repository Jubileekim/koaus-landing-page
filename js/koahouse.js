const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('[data-mailto]').forEach((button) => {
  button.addEventListener('click', () => {
    const subject = encodeURIComponent('Koaus U.S. Launch Pilot Inquiry');
    const body = encodeURIComponent(
      'Brand name:\nWebsite or Instagram:\nProduct category:\nCurrent U.S. sales status:\nWhat do you want to test?\n'
    );
    window.location.href = `mailto:hello@koaus.com?subject=${subject}&body=${body}`;
  });
});
