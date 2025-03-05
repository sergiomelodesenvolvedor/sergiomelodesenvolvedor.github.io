let divTodasAsPartes = document.querySelector("#div-todas-as-partes");

window.addEventListener("load", () => {
    if(sessionStorage.getItem('carregou')=='true'){
    setTimeout(() => {
      divTodasAsPartes.style.display = "block";
      
    }, 9000 /* 9000 */);
  }else{
    divTodasAsPartes.style.display = "block";
    
    
  }
 
  
  if(sessionStorage.getItem('carregou')=='true'){
    sessionStorage.removeItem('carregou')
    
  setTimeout(() => {
    divTodasAsPartes.style.opacity = "1";
    // Configuração do Typed.js
    var options1 = {
      strings: ["", "Desenvolvedor Web <br/> Full Stack"],
      typeSpeed: 25, // Velocidade de digitação em milissegundos
      backSpeed: 55, // Velocidade de apagar em milissegundos
      startDelay: 800, // Atraso antes de começar a digitar em milissegundos
      loop: false, // Se deve repetir a animação
      showCursor: true,
    };

    var options2 = {
      strings: ["", "Websites responsivos e dinâmicos"],
      typeSpeed: 25, // Velocidade de digitação em milissegundos
      backSpeed: 55, // Velocidade de apagar em milissegundos
      startDelay: 5000, // Atraso antes de começar a digitar em milissegundos
      loop: false, // Se deve repetir a animação
      showCursor: false,
    };

    // Inicializa o Typed.js no elemento com o ID "typed-output"
    var typed = new Typed("#h1-desenvolvedor-web-full-stack", options1);
    var typed2 = new Typed("#h3-websites-responsivos-e-dinamicos", options2);
  }, 9100 /* 9100 */);
  
}
else{


  setTimeout(() => {
    divTodasAsPartes.style.opacity = "1";
    // Configuração do Typed.js
    var options1 = {
      strings: ["", "Desenvolvedor Web <br/> Full Stack"],
      typeSpeed: 25, // Velocidade de digitação em milissegundos
      backSpeed: 50, // Velocidade de apagar em milissegundos
      startDelay: 800, // Atraso antes de começar a digitar em milissegundos
      loop: false, // Se deve repetir a animação
      showCursor: true,
    };

    var options2 = {
      strings: ["", "Websites responsivos e dinâmicos"],
      typeSpeed: 25, // Velocidade de digitação em milissegundos
      backSpeed: 50, // Velocidade de apagar em milissegundos
      startDelay: 5000, // Atraso antes de começar a digitar em milissegundos
      loop: false, // Se deve repetir a animação
      showCursor: false,
    };

    // Inicializa o Typed.js no elemento com o ID "typed-output"
    var typed = new Typed("#h1-desenvolvedor-web-full-stack", options1);
    var typed2 = new Typed("#h3-websites-responsivos-e-dinamicos", options2);
  }, 100 /* 9100 */);
}


});







let containerParte3 = document.querySelector("#container-parte-3");

let containerParte4 = document.querySelector("#container-parte-4");

let containerParte5 = document.querySelector("#container-parte-5");






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

svgButtonFrontEnd.addEventListener('click', () => {
  window.location.href = "projetos/projetosFrontEnd/projetosFrontend.html"
})

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

svgButtonBackEnd.addEventListener('click', () => {
  window.location.href = "projetos/projetosBackEnd/projetosBackend.html"
})

let linkTopoSobreMim = document.querySelector("#link-topo-sobre-mim");

let linkTopoMeusProjetos = document.querySelector("#link-topo-meus-projetos");

let linkTopoContateMe = document.querySelector("#link-topo-contate-me");

let linkTopoRodape = document.querySelector("#link-topo-rodape");

linkTopoSobreMim.addEventListener("click", () => {
  var posicaoScrollParte2 =
    calcularPosicaoRelativaAPagina(divTudoMinhaHistoriaConteudo) -
    (window.innerHeight - divTudoMinhaHistoriaConteudo.offsetHeight) / 2; //conta para deixar o scroll centralizado na parte 2

  divQueSeEsconde.style.transform = `translateY(${-posicaoScrollParte2}px)`;
  posicaoPagina = 1;
});

linkTopoMeusProjetos.addEventListener("click", () => {
  var posicaoScrollParte3 =
    calcularPosicaoRelativaAPagina(containerParte3) -
    (window.innerHeight - containerParte3.offsetHeight) / 2; //conta para deixar o scroll centralizado na parte 3

  divQueSeEsconde.style.transform = `translateY(${-posicaoScrollParte3}px)`;
  posicaoPagina = 2;
});

linkTopoContateMe.addEventListener("click", () => {
  var posicaoScrollParte4 =
    calcularPosicaoRelativaAPagina(containerParte4) -
    (window.innerHeight - containerParte4.offsetHeight) / 2; //conta para deixar o scroll centralizado na parte 4

  divQueSeEsconde.style.transform = `translateY(${-posicaoScrollParte4}px)`;
  posicaoPagina = 3;
});

linkTopoRodape.addEventListener("click", () => {
  var posicaoScrollParte5 =
    calcularPosicaoRelativaAPagina(containerParte5) -
    (window.innerHeight - containerParte5.offsetHeight) / 2; //conta para deixar o scroll centralizado na parte 5

  divQueSeEsconde.style.transform = `translateY(${-posicaoScrollParte5}px)`;
  posicaoPagina = 4;
});

//aqui vou fazer a parte de rolar a pagina quando clicar nos links do rodape para tela grande

let linkHomeRodape = document.querySelector("#link-home-rodape");

let linkSobreMimRodape = document.querySelector("#link-sobre-mim-rodape");

let linkMeusTrabalhosRodape = document.querySelector(
  "#link-meus-trabalhos-rodape"
);

linkHomeRodape.addEventListener("click", () => {
  divQueSeEsconde.style.transform = `translateY(0px)`;
  posicaoPagina = 0;
});

linkSobreMimRodape.addEventListener("click", () => {
  if (window.innerWidth >= 1080) {
    var posicaoScrollParte2 =
      calcularPosicaoRelativaAPagina(divTudoMinhaHistoriaConteudo) -
      (window.innerHeight - divTudoMinhaHistoriaConteudo.offsetHeight) / 2; //conta para deixar o scroll centralizado na parte 2

    divQueSeEsconde.style.transform = `translateY(${-posicaoScrollParte2}px)`;
    posicaoPagina = 1;
  } else {
    var posicaoScrollParte2 = calcularPosicaoRelativaAPagina(
      divTudoMinhaHistoriaConteudo
    );

    window.scrollTo({
      top: posicaoScrollParte2,
      behavior: 'smooth'
    })

  }
});

linkMeusTrabalhosRodape.addEventListener("click", () => {
  if (window.innerWidth >= 1080) {
    var posicaoScrollParte3 =
      calcularPosicaoRelativaAPagina(containerParte3) -
      (window.innerHeight - containerParte3.offsetHeight) / 2; //conta para deixar o scroll centralizado na parte 3

    divQueSeEsconde.style.transform = `translateY(${-posicaoScrollParte3}px)`;
    posicaoPagina = 2;
  } else {
    var posicaoScrollParte3 = calcularPosicaoRelativaAPagina(containerParte3);
    window.scrollTo({
      top: posicaoScrollParte3,
      behavior: 'smooth'
    })
  }
});

//aqui estou fazendo a função para enviar o e-mail

function sendEmail() {
  const nome = document.querySelector("#inputNome").value;
  const email = document.querySelector("#inputEmail").value;
  const mensagem = document.querySelector("#text-area-mensagem").value;
  const mailtoLink = `mailto:sergiomelo.desenvolvedor@gmail.com?subject=Contato%20de%20${encodeURIComponent(
    nome
  )}&body=${encodeURIComponent(
    mensagem
  )}%0A%0AResponder%20para%20${encodeURIComponent(email)}`;

  window.location.href = mailtoLink;
  alert(nome + " " + email + " " + mensagem);
}
buttonEnviarMensagem.addEventListener("click", sendEmail);


//click no menu hamburguer para celular

document.querySelector("#menu-hamburguer").addEventListener('click',()=>{
  document.querySelector("#menu-tela-pequena").style.height="95vw"
  document.querySelector("#menu-hamburguer").style.visibility="hidden"
})

document.querySelector("#icone-fechar").addEventListener('click',()=>{
  document.querySelector("#menu-tela-pequena").style.height="0vw"
  document.querySelector("#menu-hamburguer").style.visibility="visible"
})

document.querySelector('body').addEventListener('click',(e)=>{
  if(!e.target.matches("#menu-tela-pequena, #menu-hamburguer,#li-menu-home,#li-menu-projetos,#li-menu-contato,#li-menu-rodape")){
   document.querySelector("#menu-tela-pequena").style.height="0vw"
  document.querySelector("#menu-hamburguer").style.visibility="visible"
  console.log(e.target)
  }  
})


