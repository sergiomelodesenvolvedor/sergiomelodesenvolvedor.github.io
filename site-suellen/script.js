
function toggleMenu() {
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('close-menu');
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        closeBtn.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        closeBtn.style.display = 'none';
        document.body.style.overflow = '';
    }
}

document.getElementById('close-menu').onclick = function () {
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
    this.style.display = 'none';
    document.body.style.overflow = '';
};

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function (e) {
    const menu = document.getElementById('menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.getElementById('close-menu');
    if (
        menu.classList.contains('active') &&
        !menu.contains(e.target) &&
        !menuToggle.contains(e.target) &&
        e.target !== closeBtn
    ) {
        menu.classList.remove('active');
        closeBtn.style.display = 'none';
        document.body.style.overflow = '';
    }
});



function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Zoom nas imagens dos produtos
document.querySelectorAll('.produtos-imgs img').forEach(img => {
    img.addEventListener('click', function () {
        const overlay = document.getElementById('img-overlay');
        const overlayImg = document.getElementById('overlay-img');
        overlayImg.src = this.src;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

document.getElementById('close-overlay').onclick = function () {
    document.getElementById('img-overlay').classList.remove('active');
    document.body.style.overflow = '';
};

// Fecha overlay ao clicar fora da imagem
document.getElementById('img-overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
    }
});
