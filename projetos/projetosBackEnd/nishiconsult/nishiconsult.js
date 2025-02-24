let menu = document.querySelector("#menu")


let menuHamburguer = document.querySelector("#menu-hamburger")

menuHamburguer.addEventListener('click', () => {
  menu.style.display = "block";
  menu.style.position = "absolute";

  menuHamburguer.style.opacity = "0";
  menuHamburguer.style.display = "none";
})

let iconFecharMenu = document.querySelector("#icon-fechar-menu")
iconFecharMenu.addEventListener('click', () => {

  menu.style.display = "none"
  menuHamburguer.style.display = "block"
  menuHamburguer.style.opacity = "1"

})

document.addEventListener("click", (e) => {
  let clicouFora = !menu.contains(e.target) && !menuHamburguer.contains(e.target);
  if (clicouFora) {
    menu.style.display = "none"
    menuHamburguer.style.display = "block"
    menuHamburguer.style.opacity = "1"

  }

})


document.querySelector("#li-home").addEventListener('click',()=>{
    window.location.href="../../../index.html"
})


document.querySelector("#li-projetos-backend").addEventListener('click',()=>{
    window.location.href="../projetosBackend.html"
})

document.querySelector("#li-projetos-frontend").addEventListener('click',()=>{
    window.location.href="../../projetosFrontEnd/projetosFrontend.html"
})

