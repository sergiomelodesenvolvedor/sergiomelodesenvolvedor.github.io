
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
        let h1FullStackWeb = document.querySelector(".h1FullStackWeb")
        h1FullStackWeb.innerText = "Desenvolvedor Web Full-Stack";

        let sectionDescricao = document.querySelector(".sectionDescricao");
        sectionDescricao.innerText = "Eu desenvolvo sites completos e responsivos que trazem valores aos seus negócios."
        
        let spanExperienciaFrontEnd = document.querySelector(".spanExperienciaFrontEnd")
        spanExperienciaFrontEnd.innerHTML = "Experiência comprovada no <br/>desenvolvimento de Websites Frontend."

        let spanExperienciaBackEnd = document.querySelector(".spanExperienciaBackEnd")
        spanExperienciaBackEnd.innerHTML = "Experiência na criação de Websites<br/> backend (MYSQL, NODE.JS e MONGODB)."

        let h1Contactme = document.querySelector(".h1Contactme")
        h1Contactme.innerText = "Contate-me";

        let h1MeusProjetosFrontend = document.querySelector(".h1MeusProjetosFrontend")
        h1MeusProjetosFrontend.innerText = "Projetos Front-End"

        let h1MeusProjetosBackend = document.querySelector(".h1MeusProjetosBackend")
        h1MeusProjetosBackend.innerText = "Projetos Back-End"

        let spanDescricaoTrabalhosFrontend = document.querySelector(".spanDescricaoTrabalhosFrontend")
        spanDescricaoTrabalhosFrontend.innerText = "Aqui estão todos meus projetos Front-End."
        
        let spanDescricaoTrabalhosBackend = document.querySelector(".spanDescricaoTrabalhosBackend")
        spanDescricaoTrabalhosBackend.innerText = "Aqui estão todos meus projetos Back-End."

        let textFrontEnd1 = document.querySelectorAll(".textFrontEnd")
        textFrontEnd1[0].textContent = "Ver trabalhos"

        let textFrontEnd2 = document.querySelectorAll(".textFrontEnd")
        textFrontEnd2[1].textContent = "Ver trabalhos"

        let h1AboutMe = document.querySelector(".h1AboutMe")
        h1AboutMe.innerText = "Então, quem sou eu?"

        let spanDescricaoAboutme = document.querySelector(".spanDescricaoAboutme")
        spanDescricaoAboutme.innerText = "Meu nome é Sergio, um entusiasta apaixonado pelo desenvolvimento web full-stack, com formação na Trybe e estudos em andamento na área de Ciência da Computação. Minha jornada me permitiu adquirir experiência tanto no front-end, com foco na experiência do usuário, quanto no desenvolvimento robusto de back-end. Estou constantemente em busca de conhecimento e ansioso para colaborar em projetos inovadores. Juntos, podemos criar algo incrível!"
    
    }   

    
}



document.addEventListener("DOMContentLoaded", async ()=>{
    
    await translate(getLanguageFromIp())
    
    if(window.innerWidth>980){
        
        let headerNome = document.querySelector(".headerNome")
        headerNome.style.top = "5vh";
        headerNome.style.opacity = "1";
        
        let h1FullStackWeb = document.querySelector(".h1FullStackWeb")
        h1FullStackWeb.style.left = "0vw";
        h1FullStackWeb.style.opacity="1"

        let sectionDescricao = document.querySelector(".sectionDescricao")
        sectionDescricao.style.top = "-4vh";
        sectionDescricao.style.opacity = "1"
    
        let imgFotoJunior = document.querySelector(".imgFotoJunior");
        imgFotoJunior.style.opacity="1";
        
        let h1Contactme = document.querySelector(".h1Contactme");
        h1Contactme.style.top = "20vh";
        h1Contactme.style.opacity = "1"

        let divEmail = document.querySelector(".divEmail");
        divEmail.style.opacity="1";

        let divWhatssap = document.querySelector(".divWhatssap")
        divWhatssap.style.opacity = "1";

        let spanExperienciaFrontEnd = document.querySelector(".spanExperienciaFrontEnd")
        spanExperienciaFrontEnd.style.opacity = "1"

        let spanExperienciaBackEnd = document.querySelector(".spanExperienciaBackEnd")
        spanExperienciaBackEnd.style.opacity = "1"
    }
    

});


