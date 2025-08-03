document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');

    // Tenta tocar a música automaticamente
    backgroundMusic.play().catch(error => {
        // Se a reprodução automática for bloqueada (comum em navegadores modernos),
        // adiciona um evento para tocar quando o usuário interagir
        console.log("A reprodução automática da música foi bloqueada. Clique em qualquer lugar para iniciar.");
        document.body.addEventListener('click', function() {
            backgroundMusic.play().catch(e => console.error("Erro ao tentar tocar a música com interação:", e));
        }, { once: true }); // O evento só será acionado uma vez
    });
});