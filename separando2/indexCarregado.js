let divTodasAsPartes = document.querySelector("#div-todas-as-partes");

window.addEventListener("load", () => {
  setTimeout(() => {
    divTodasAsPartes.style.display = "block";
  }, 9000 /* 9000 */);

  setTimeout(() => {
    divTodasAsPartes.style.opacity = "1";
    // Configuração do Typed.js
    var options1 = {
      strings: ["", "Desenvolvedor Web <br/> Full Stack"],
      typeSpeed: 25, // Velocidade de digitação em milissegundos
      backSpeed: 50, // Velocidade de apagar em milissegundos
      startDelay: 800, // Atraso antes de começar a digitar em milissegundos
      loop: false, // Se deve repetir a animação
      showCursor: false,
    };

    var options2 = {
      strings: ["", "Websites responsivos e dinâmicos"],
      typeSpeed: 25, // Velocidade de digitação em milissegundos
      backSpeed: 50, // Velocidade de apagar em milissegundos
      startDelay: 4200, // Atraso antes de começar a digitar em milissegundos
      loop: false, // Se deve repetir a animação
      showCursor: false,
    };

    // Inicializa o Typed.js no elemento com o ID "typed-output"
    var typed = new Typed("#h1-desenvolvedor-web-full-stack", options1);
    var typed2 = new Typed("#h3-websites-responsivos-e-dinamicos", options2);
  }, 9100 /* 9100 */);
});

let line1 = document.querySelector("#line1");
let svgCanto1 = document.querySelector("#svg-canto-1");
let circleFora1 = document.querySelector("#circle-fora-1");
let circleDentro1 = document.querySelector("#circle-dentro-1");
let colTudoMinhaHistoria = document.querySelector("#col-tudo-minha-historia");
//aqui estou ajustando a primeira linha do canto para redimensionar de acordo com o tamanho da tela
setTimeout(() => {
  let divTudoMinhaHistoriaConteudo = document.querySelector(
    "#div-tudo-minha-historia-conteudo"
  );
  line1.setAttribute("y2", "1000vh");
  circleFora1.setAttribute("cy", divTudoMinhaHistoriaConteudo.offsetHeight / 2);
  circleDentro1.setAttribute(
    "cy",
    divTudoMinhaHistoriaConteudo.offsetHeight / 2
  );

  svgCanto1.style.height = divTudoMinhaHistoriaConteudo.offsetHeight;
}, 10000);

//aqui estou fazendo a logica para responsivisar para landscape e portrait, a linha do canto
let controleAlturaAnteriorOuProxima = 0;

window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    let divTudoMinhaHistoriaConteudo2 = document.querySelector(
      "#div-tudo-minha-historia-conteudo"
    );

    line1.setAttribute("y2", "1000vh");
    circleFora1.setAttribute(
      "cy",
      divTudoMinhaHistoriaConteudo2.offsetHeight / 2
    );
    circleDentro1.setAttribute(
      "cy",
      divTudoMinhaHistoriaConteudo2.offsetHeight / 2
    );

    svgCanto1.style.height = divTudoMinhaHistoriaConteudo2.offsetHeight;
  }, 10);
});

//aqui acaba a logica para responsivisar a linha do canto (portrait e landscape)
console.log(window.innerWidth);
console.log(window.innerHeight);

//aqui começa a logica para responsivisar a linha do canto mas no envento resize

window.addEventListener("resize", () => {
  setTimeout(() => {
    let divTudoMinhaHistoriaConteudo2 = document.querySelector(
      "#div-tudo-minha-historia-conteudo"
    );

    line1.setAttribute("y2", "1000vh");
    circleFora1.setAttribute(
      "cy",
      divTudoMinhaHistoriaConteudo2.offsetHeight / 2
    );
    circleDentro1.setAttribute(
      "cy",
      divTudoMinhaHistoriaConteudo2.offsetHeight / 2
    );

    svgCanto1.style.height = divTudoMinhaHistoriaConteudo2.offsetHeight;
  }, 10);
});

//a partir daqui vou fazer a parte de rolar o conteudo para cima quando usar o scroll

function calcularPosicaoRelativaAPagina(elemento) {
  var posicao = 0;

  while (elemento) {
    posicao += elemento.offsetTop;
    elemento = elemento.offsetParent;
  }

  return posicao;
}

let divQueSeEsconde = document.querySelector("#div-que-se-esconde");
let posicaoPagina = 0;
let ultimoTempoDoWhell = 0;

let divTudoMinhaHistoriaConteudo = document.querySelector(
  "#div-tudo-minha-historia-conteudo"
);
let containerParte3 = document.querySelector("#container-parte-3");

//aqui estou ajustando o botão de scroll para rolar o conteudo para cima ou para baixo nos dispositivos desktop

if (window.innerWidth >= 992 && window.innerWidth <= 2000) {
  setTimeout(() => {
    let posicaoScrollParte2 =
      calcularPosicaoRelativaAPagina(divTudoMinhaHistoriaConteudo) -
      (window.innerHeight - divTudoMinhaHistoriaConteudo.offsetHeight) / 2; //conta para deixar o scroll centralizado na parte 2

    let posicaoScrollParte3 =
      calcularPosicaoRelativaAPagina(containerParte3) -
      (window.innerHeight - containerParte3.offsetHeight) / 2;

    divTodasAsPartes.addEventListener("wheel", (event) => {
      const agora = new Date().getTime();

      if (agora - ultimoTempoDoWhell > 500) {
        if (event.deltaY > 0) {
          if (posicaoPagina === 2) {
          } else {
            posicaoPagina += 1;
          }

          if (posicaoPagina === 0) {
            divQueSeEsconde.style.transform = `translateY(0px)`;
            posicaoPagina += 1;
          } else if (posicaoPagina === 1) {
            divQueSeEsconde.style.transform = `translateY(${-posicaoScrollParte2}px)`;
            console.log(posicaoPagina);
          } else if (posicaoPagina === 2) {
            divQueSeEsconde.style.transform = `translateY(${-posicaoScrollParte3}px)`;
            console.log(posicaoPagina);
          }
          console.log(posicaoPagina);
        }
        if (event.deltaY < 0) {
          if (posicaoPagina === 0) {
            divQueSeEsconde.style.transform = `translateY(0px)`;
          } else if (posicaoPagina === 1) {
            divQueSeEsconde.style.transform = `translateY(0px)`;
            posicaoPagina -= 1;
            console.log(posicaoPagina);
            console.log("lsdkjflkj");
          } else if (posicaoPagina === 2) {
            divQueSeEsconde.style.transform = `translateY(${-posicaoScrollParte2}px)`;
            posicaoPagina -= 1;
            console.log(posicaoPagina);
            console.log(posicaoScrollParte3);
          }
          console.log(posicaoPagina);
        }
        ultimoTempoDoWhell = agora;
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        if (posicaoPagina === 1) {
        } else {
          posicaoPagina += 1;
        }
        if (posicaoPagina === 0) {
          divQueSeEsconde.style.transform = `translateY(0px)`;
          posicaoPagina += 1;
        } else if (posicaoPagina === 1) {
          divQueSeEsconde.style.transform = `translateY(${-posicaoScrollParte2}px)`;
        }
      }

      if (event.key === "ArrowUp") {
        if (posicaoPagina === 0) {
        } else {
          posicaoPagina -= 1;
        }

        if (posicaoPagina === 0) {
          divQueSeEsconde.style.transform = `translateY(0px)`;
        } else if (posicaoPagina === 1) {
          divQueSeEsconde.style.transform = `translateY(0px)`;
          posicaoPagina -= 1;
        }
      }
    });
  }, 0/* 9500 */);
}

//aqui acaba a parte de ajustar a rolagem de tela para desktop

//aqui começa a parte de fazer o svg retangulo preencher frontend e backend


let rectMeusTrabalhos = document.querySelectorAll(".fillRect");

let svgButtonFrontEnd = document.querySelector("#svg-button-frontend");
let textFrontEnd = document.querySelector("#textFrontEnd");

svgButtonFrontEnd.addEventListener("mouseover", () => {
  rectMeusTrabalhos[0].setAttribute("width", "100%");
  textFrontEnd.setAttribute("fill", "white");
});

svgButtonFrontEnd.addEventListener("mouseout", () => {
  rectMeusTrabalhos[0].setAttribute("width", "0%");
  textFrontEnd.setAttribute("fill", "blue");
});

let svgButtonBackEnd = document.querySelector("#svg-button-backend");
let textBackEnd = document.querySelector("#textBackEnd");

svgButtonBackEnd.addEventListener("mouseover", () => {
  rectMeusTrabalhos[1].setAttribute("width", "100%");
  textBackEnd.setAttribute("fill", "white");
});

svgButtonBackEnd.addEventListener("mouseout", () => {
  rectMeusTrabalhos[1].setAttribute("width", "0%");
  textBackEnd.setAttribute("fill", "blue");
});