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

    // Banner rotativo
    const slides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if(i === index) {
          slide.classList.add('active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });
    }
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    setInterval(nextSlide, 6000);

    // Botão voltar ao topo
    const btnTopo = document.getElementById('btn-topo');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 160) {
        btnTopo.style.display = 'flex';
      } else {
        btnTopo.style.display = 'none';
      }
    });
    btnTopo.addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
      document.getElementById('maincontent').focus();
    });

    // Frase do dia
    const frases = [
      "A educação é a arma mais poderosa para mudar o mundo. - Nelson Mandela",
      "A criatividade é a inteligência se divertindo. - Albert Einstein",
      "Não espere por uma oportunidade, crie você mesmo. - George Bernard Shaw",
      "A leitura é para a mente o que o exercício é para o corpo.",
      "A palavra tem poder de transformar realidades."
    ];
    function fraseAleatoria() {
      const idx = Math.floor(Math.random() * frases.length);
      return frases[idx];
    }
    const fraseDiaEl = document.getElementById('frase-dia');
    fraseDiaEl.textContent = fraseAleatoria();