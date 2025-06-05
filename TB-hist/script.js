// Funcionalidade "Leia mais": mostra ou oculta o conteúdo extra da seção
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(event) {
        const details = event.target.nextElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });
});

// Funcionalidade dos botões do menu: abrir automaticamente os detalhes
document.querySelectorAll('.navbar a[data-target]').forEach(link => {
    link.addEventListener('click', function(event) {
        const targetId = link.getAttribute('data-target');
        const details = document.getElementById(targetId);
        if (details) {
            // Espera um pouco para a rolagem acontecer antes de mostrar o conteúdo
            setTimeout(() => {
                details.style.display = 'block';
            }, 100);
        }
    });
});