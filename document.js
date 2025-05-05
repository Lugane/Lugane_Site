document.addEventListener('DOMContentLoaded', () => {
    // Efeito de rolagem suave para os links de navegação
    const links = document.querySelectorAll('.nav a');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: 'smooth'
        });
      });
    });
  });

  document.querySelectorAll('.flecha_direita, .flecha_esquerda').forEach(flecha => {
    flecha.addEventListener('click', () => {
      const sliderId = flecha.dataset.slider;
      const slider = document.getElementById(sliderId);
      const scrollAmount = 320;
  
      if (flecha.classList.contains('flecha_direita')) {
        slider.scrollLeft += scrollAmount;
      } else {
        slider.scrollLeft -= scrollAmount;
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function () {
      // Aguarda um pouquinho antes de limpar (para garantir que o envio ocorra)
      setTimeout(() => {
        form.reset(); // Limpa todos os campos do formulário
      }, 100); // 100ms é tempo suficiente
    });
  });
  