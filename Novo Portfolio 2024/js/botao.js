const scrollToTopButton = document.getElementById("scrollToTopButton");

// Mostrar o botão quando a ppagina rolada
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Rolar suavemente para o topo quando o botão clicado
scrollToTopButton.addEventListener("click", function () {
    // Verifique se a propriedade "behavior" suportada
    if ('scrollBehavior' in document.documentElement.style) {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } else {
        // Se "scroll-behavior" não suportado, pode usar o "scrollIntoView"
        const body = document.body;
        const html = document.documentElement;
        const top = body.scrollTop || html.scrollTop;

        window.scroll({
            top: 0,
            left: top,
            behavior: 'smooth',
        });
    }
});