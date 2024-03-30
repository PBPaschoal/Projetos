const scrollToTopButton = document.getElementById("scrollToTopButton");

// Mostrar o botÃ£o quando a pÃ¡gina Ã© rolada
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Rolar suavemente para o topo quando o botÃ£o Ã© clicado
scrollToTopButton.addEventListener("click", function () {
    // Verifique se a propriedade "behavior" Ã© suportada
    if ('scrollBehavior' in document.documentElement.style) {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } else {
        // Se "scroll-behavior" nÃ£o Ã© suportado, vocÃª pode usar o mÃ©todo "scrollIntoView"
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