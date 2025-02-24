let SvgLetraSfundo = document.querySelector("#svg-letra-s-fundo");
let SvgLetraMfundo = document.querySelector("#svg-letra-m-fundo");
let SvgLetraDfundo = document.querySelector("#svg-letra-d-fundo");

let transformAtualS = getComputedStyle(SvgLetraSfundo).transform;
let transformAtualM = getComputedStyle(SvgLetraMfundo).transform;
let transformAtualD = getComputedStyle(SvgLetraDfundo).transform;
  


function transitionedLetraSFundo(){
    if (SvgLetraSfundo.style.transform.slice(-18) == "translateY(-1.5vh)") {
          
        SvgLetraSfundo.style.transform = transformAtualS + "  translateY(1.5vh)";
      } else {
          
          
        SvgLetraSfundo.style.transform = transformAtualS + " translateY(-1.5vh)";
      }
  }
let subirDescerLetraS = async () => {
    transformAtualS = getComputedStyle(SvgLetraSfundo).transform;
  
    SvgLetraSfundo.style.transform = transformAtualS + ' translateY(-1.5vh)' 
  
    SvgLetraSfundo.addEventListener("transitionend", transitionedLetraSFundo)
  };


  function transitionedLetraMFundo(){
    if (SvgLetraMfundo.style.transform.slice(-18) == "translateY(-1.5vh)") {
          
        SvgLetraMfundo.style.transform = transformAtualM + "  translateY(1.5vh)";
      } else {
          
          
        SvgLetraMfundo.style.transform = transformAtualM + " translateY(-1.5vh)";
      }
  }

  
  let subirDescerLetraM = async () => {
   
    SvgLetraMfundo.style.transform = transformAtualM + ' translateY(-1.5vh)' 
  
    SvgLetraMfundo.addEventListener("transitionend", transitionedLetraMFundo);
  };

  function transitionedLetraDFundo(){
    if (SvgLetraDfundo.style.transform.slice(-18) == "translateY(-1.5vh)") {
          
        SvgLetraDfundo.style.transform = transformAtualD + "  translateY(1.5vh)";
      } else {
          
          
        SvgLetraDfundo.style.transform = transformAtualD + " translateY(-1.5vh)";
      }
  }

  let subirDescerLetraD = async () => {
    transformAtualD = getComputedStyle(SvgLetraDfundo).transform;
  
    SvgLetraDfundo.style.transform = transformAtualD + ' translateY(-1.5vh)' 
  
    

    SvgLetraDfundo.addEventListener("transitionend", 
        transitionedLetraDFundo
        );
  };


  //alert(window.innerWidth+'x'+window.innerHeight)
  window.addEventListener('resize',()=>{
    SvgLetraSfundo.removeEventListener('transitionend',transitionedLetraSFundo)
    subirDescerLetraS();
    
    SvgLetraMfundo.removeEventListener('transitionend',transitionedLetraMFundo)
    subirDescerLetraM();
    
    SvgLetraDfundo.removeEventListener('transitionend',transitionedLetraDFundo)
    subirDescerLetraD();
    
    
    
  })
  
    subirDescerLetraS();
    subirDescerLetraM();
    subirDescerLetraD();
    
  

    //aqui vou fazer a parte de quando clicar no menu hamburguer

    let menu = document.querySelector("#menu")
    

    let menuHamburguer = document.querySelector("#menu-hamburger")
    
    menuHamburguer.addEventListener('click',()=>{
    menu.style.display="block"
    menu.style.position="absolute"
    
    menuHamburguer.style.opacity="0";
    menuHamburguer.style.display="none";  
    })

    let iconFecharMenu = document.querySelector("#icon-fechar-menu")
    iconFecharMenu.addEventListener('click',()=>{
      
      menu.style.display="none"
      menuHamburguer.style.display="block"
      menuHamburguer.style.opacity="1"

    })

    document.addEventListener("click",(e)=>{
      let clicouFora = !menu.contains(e.target) && !menuHamburguer.contains(e.target);
      if(clicouFora){
        menu.style.display="none"
        menuHamburguer.style.display="block"
        menuHamburguer.style.opacity="1"
        
      }
      
    })

    //aqui começa a funcao de click nos menus

    document.querySelector("#span-menu-home").addEventListener('click',()=>{
      window.location.href='../../'
    })

    document.querySelector("#span-menu-projetos-backend").addEventListener('click',()=>{
      window.location.href='../projetosBackEnd/projetosBackend.html'
    })
    
    //aqui começa as funçõe de click nos cards

    document.querySelector("#div-card-prisioner").addEventListener('click',()=>{
      window.location.href='../projetosBackEnd/nishiconsult/nishiconsult.html'
    })

    document.querySelector("#div-card-ma-consultoria").addEventListener('click',()=>{
      window.location.href='https://www.maconsultoriahospitalar.com.br'
    })