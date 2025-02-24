let xEstado = "menu";

//aqui vou fazer a parte de abrir o x do menu

let divMenuHrs = document.querySelector("#divMenuHrs");

let menuComOptions = document.querySelector("#menuComOptions");

let divHrMenuCelular = document.querySelector("#div-hr-menu-celular")

let divxcelular = document.querySelector("#div-x-celular");

divMenuHrs.addEventListener("click", async () => {
  console.log(divMenuHrs)
  if (xEstado === "menu") {
    document.querySelector("#menuComOptions").style.height = "40vh";
    document.querySelector("#menuComOptions").style.opacity = "1";
    document.querySelector("#hrMenuLinha1").style.width = "1.9vw";
    document.querySelector("#hrMenuLinha2").style.width = "1.9vw";
    document.querySelector("#hrMenuLinha1").style.transform = "rotate(-44deg)";
    document.querySelector("#hrMenuLinha2").style.transform = "rotate(44deg)";
    document.querySelector("#hrMenuLinha2").style.top = "-1.6vh";

    xEstado = "x";
  } else {
    menuComOptions.style.opacity = "0";
    menuComOptions.style.height = "0px";
    document.querySelector("#hrMenuLinha1").style.transform = "rotate(0deg)";
    document.querySelector("#hrMenuLinha2").style.transform = "rotate(0deg)";
    document.querySelector("#hrMenuLinha2").style.top = "0vh";
    document.querySelector("#hrMenuLinha1").style.width = "4vw";
    document.querySelector("#hrMenuLinha2").style.width = "3vw";
    xEstado = "menu";
  }
});



document.addEventListener("click", (event) => {
  if (
    !menuComOptions.contains(event.target) &&
    !divMenuHrs.contains(event.target) &&
    !divHrMenuCelular.contains(event.target) &&
    xEstado === "x"
  ) {
    menuComOptions.style.opacity = "0";
    menuComOptions.style.height = "0px";
    menuComOptions.style.width = "0px";

    document.querySelector("#hrMenuLinha1").style.transform = "rotate(0deg)";
    document.querySelector("#hrMenuLinha2").style.transform = "rotate(0deg)";
    document.querySelector("#hrMenuLinha2").style.top = "0vh";
    document.querySelector("#hrMenuLinha1").style.width = "4vw";
    document.querySelector("#hrMenuLinha2").style.width = "3vw";
    xEstado = "menu";
  }
});

divHrMenuCelular.addEventListener("click", ()=>{
  console.log(menuComOptions)
  menuComOptions.style.opacity = "1";
  menuComOptions.style.height = "60vh";
  menuComOptions.style.width = "80vw";
  xEstado = "x"
})



divxcelular.addEventListener("click",()=>{
  menuComOptions.style.opacity = "0";
  menuComOptions.style.width = "0px";
  menuComOptions.style.height = "0px";
  xEstado="menu"
})



async function getLanguageFromIp(){


  try{
      const response = await fetch("https://api.ipdata.co?api-key=cdc3dfda63544dcf952da93a67ac6eef2d9f94e302e1e2bea48bb359")
      const data = await response.json();
      return data.country_code.toLowerCase()
  }

  catch(error){
      console.error("Erro ao obter idioma do IP",error)
      return 'pt-BR'
  }

}

async function translate(language){    
  if(await language==="br"){
    let descricaoNishiconsult = document.querySelector("#descricao-nishiconsult")
    descricaoNishiconsult.innerHTML = "O sistema Prisioner Control tem como finalidade realizar o cadastro de pessoas detidas.<br /> Cada registro de detento pode ser consultado por usuários comuns ou inserido e <br />editado por usuários master. Além disso, o usuário master tem a capacidade de cadastrar novos <br /> usuários no banco de dados.<br/> Para a implementação deste projeto, foram empregadas as tecnologias:<br/> <b>HTML, CSS, JavaScript, Node.js e MySQL</b>.<br/> Abaixo, apresentamos um gif ilustrando o funcionamento do sistema."
  
    let h1NishiConsult = document.querySelector("#h1-nishi-consult");
    h1NishiConsult.innerText = "Prisioner Control";

    let linkMenuMyWorksFront = document.querySelector("#linkMenuMyWorksFront")
    linkMenuMyWorksFront.innerText = "Trabalhos Front-End";

    let linkMenuMyWorksBack = document.querySelector("#linkMenuMyWorksBack")
    linkMenuMyWorksBack.innerText = "Trabalhos Back-End"
  
  }}
  
  translate(getLanguageFromIp())