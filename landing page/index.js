
tamanhoheader=document.querySelector('#header').offsetHeight;
topDoServicos=document.querySelector('#servicos').offsetTop;
topDoPaiNescessidade=document.querySelector('#pai-nescessidade').offsetTop;
topDoPaiMissao=document.querySelector('#pai-missao').offsetTop;
topDoFooter=document.querySelector('#footer').offsetTop;



document.querySelector("#menu-servicos").addEventListener('click',(event)=>{
    
    window.scrollTo({
    top:topDoServicos-(tamanhoheader/2),
    behavior:'smooth'
   }) 
})

document.querySelector("#menu-agendar-contato").addEventListener('click',(event)=>{
    
    window.scrollTo({
    top:topDoPaiNescessidade-(tamanhoheader/2),
    behavior:'smooth'
   }) 
})

document.querySelector("#menu-missao").addEventListener('click',(event)=>{
    
    window.scrollTo({
    top:topDoPaiMissao-(tamanhoheader/2),
    behavior:'smooth'
   }) 
})

document.querySelector("#menu-rodape").addEventListener('click',(event)=>{
    
    window.scrollTo({
    top:topDoFooter-(tamanhoheader/2),
    behavior:'smooth'
   }) 
})