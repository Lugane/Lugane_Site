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