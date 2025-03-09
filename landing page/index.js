
tamanhoheader = document.querySelector('#header').offsetHeight;
topDoServicos = document.querySelector('#servicos').offsetTop;
topDoPaiNescessidade = document.querySelector('#pai-nescessidade').offsetTop;
topDoPaiMissao = document.querySelector('#pai-missao').offsetTop;
topDoFooter = document.querySelector('#footer').offsetTop;



document.querySelector("#menu-servicos").addEventListener('click', (event) => {

    window.scrollTo({
        top: topDoServicos - (tamanhoheader / 2),
        behavior: 'smooth'
    })
})

document.querySelector("#menu-agendar-contato").addEventListener('click', (event) => {

    window.scrollTo({
        top: topDoPaiNescessidade - (tamanhoheader / 2),
        behavior: 'smooth'
    })
})

document.querySelector("#menu-missao").addEventListener('click', (event) => {

    window.scrollTo({
        top: topDoPaiMissao - (tamanhoheader / 2),
        behavior: 'smooth'
    })
})

document.querySelector("#menu-rodape").addEventListener('click', (event) => {

    window.scrollTo({
        top: topDoFooter - (tamanhoheader / 2),
        behavior: 'smooth'
    })
})



//aqui vou fazer a função de fechar e abrir o menu

document.querySelector("#icone-humburger").addEventListener('click', () => {
    document.querySelector("#menu-lista").style.height = "94vw"
    document.querySelector("#icone-humburger").style.opacity = "0"
})

document.querySelector("#li-icone-fechar").addEventListener('click', () => {
    document.querySelector("#menu-lista").style.height = "0vw"
    document.querySelector("#icone-humburger").style.opacity = "1"
})


//aqui vou fazer os efeitos quando o scroll alcançar os elementos

window.addEventListener('scroll', () => {

    if (window.innerWidth <= "424"){
    let topDoElementoambiental = document.querySelector('#pai-servico-ambiental').getBoundingClientRect().top

    if (topDoElementoambiental <= 775) {
        document.querySelector('#pai-servico-ambiental').style.filter = "blur(0)"
        document.querySelector('#pai-servico-ambiental').style.top = "30vw"
    }


    let topDoElementoSaude = document.querySelector('#pai-servico-saude').getBoundingClientRect().top
   
    if (topDoElementoSaude <= 775) {
        document.querySelector('#pai-servico-saude').style.filter = "blur(0)"
        document.querySelector('#pai-servico-saude').style.top = "40vw"
    }


    let topDoElementoSeguranca = document.querySelector('#pai-servico-seguranca').getBoundingClientRect().top
   
    if (topDoElementoSeguranca <= 775) {
        document.querySelector('#pai-servico-seguranca').style.filter = "blur(0)"
        document.querySelector('#pai-servico-seguranca').style.top = "50vw"
    }

    let topDoPaiNescessidade2 = document.querySelector('#pai-nescessidade').getBoundingClientRect().top
    console.log(topDoPaiNescessidade2)
    if (topDoPaiNescessidade2 <= 618) {
        document.querySelector('#pai-nescessidade').style.filter = "blur(0)"
        
    }
}


    

})


