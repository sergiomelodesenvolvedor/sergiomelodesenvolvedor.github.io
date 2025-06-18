
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