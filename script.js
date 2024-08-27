// Adicionar evento de click nos links da navegação
document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href');
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Adicionar evento de envio do formulário
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensagem = document.querySelector('textarea').value;
    // Enviar dados para o servidor ou realizar ação desejada
    console.log(nome, email, mensagem);
  });