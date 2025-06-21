const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.querySelectorAll('a');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
  const isOpen = navMenu.classList.contains('open');
  navLinks.forEach(link => link.tabIndex = isOpen ? 0 : -1);
  if (isOpen) {
    navLinks[0].focus();
  } else {
    hamburger.focus();
  }
}

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keydown', e => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMenu();
  }
});

navLinks.forEach(link => link.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navMenu.classList.remove('open');
  navLinks.forEach(link => link.tabIndex = -1);
  hamburger.focus();
}));

// Botão voltar ao topo
const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', () => {
  if (window.scrollY > 160) {
    btnTopo.style.display = 'flex';
  } else {
    btnTopo.style.display = 'none';
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('maincontent').focus();
});
