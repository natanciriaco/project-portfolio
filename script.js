document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os elementos principais
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.project-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // 2. Variável para rastrear o projeto atual
    let currentIndex = 0;
    const totalItems = items.length;

    // 3. Função para atualizar a visualização do carrossel
    function updateCarousel() {
        // Calcula o quanto a trilha precisa ser movida para a esquerda (em %)
        // Se currentIndex = 1, move -100% (para mostrar o segundo item)
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    }

    // 4. Ouvinte de evento para o botão 'Próximo'
    nextBtn.addEventListener('click', () => {
        // Avança para o próximo item, mas volta para o 0 se estiver no último (loop)
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    // 5. Ouvinte de evento para o botão 'Anterior'
    prevBtn.addEventListener('click', () => {
        // Volta para o item anterior, ou para o último se estiver no 0 (loop)
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // Garante que o primeiro item seja exibido ao carregar (inicializa a posição)
    updateCarousel();
});