
let textTitle = document.querySelector("#sergio-melo-desenvolvedor-text");
let textSubTitle = document.querySelector("#apaixonado-por-tecnologia-text");
let divCarregamento = document.querySelector(".div-carregamento");


function AumentaOpacity() {

  let svglogo = document.querySelector("#svg-logo")

  setTimeout(() => {
    svglogo.style.
      city = "1"
  }, 1000)




  setTimeout(() => {
    //alert(window.innerWidth+"x"+window.innerHeight)



    textTitle.addEventListener("animationend", function () {
      // A ação que você quer realizar após a animação
      textSubTitle.style.opacity = "1";
    });

    let strokeDashOffSet = 0;
    function animaLogo() {
      requestAnimationFrame(animaLogo);
      strokeDashOffSet += 3;
      document.querySelector("#svg-logo").style.strokeDashoffset = strokeDashOffSet;
    }
    setTimeout(() => {
      animaLogo();
    }, 2000);
  }, 1000)
}

let divLoad = document.querySelector("#div-load");

if (sessionStorage.getItem("primeira_visita") !== "s") {
  divLoad.style.display="block"
  AumentaOpacity()
  


  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      divLoad.style.opacity = "0";
      console.log("teaste")
    }, 6000);

    setTimeout(() => {
      divLoad.style.display = "none";
    }, 8500);
  });
  sessionStorage.setItem("primeira_visita", "s")
  sessionStorage.setItem('carregou',true)
}else{
  divLoad.style.display = "none";
}

