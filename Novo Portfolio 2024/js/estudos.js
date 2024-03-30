// Abre a modal e exibe a imagem ampliada
function openModal(src) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = src;
}

// Fecha a modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
/*
document.querySelectorAll('.imagem-grade img').forEach(img => {
    img.addEventListener('click', function() {
        const imgAmpliada = document.createElement('img');
        imgAmpliada.src = this.src;
        imgAmpliada.classList.add('imagem-ampliada');
        document.body.appendChild(imgAmpliada);
        imgAmpliada.addEventListener('click', function() {
            document.body.removeChild(this);
        });
    });
}); */

