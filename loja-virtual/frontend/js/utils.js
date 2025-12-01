// Funções utilitárias para gerenciamento do carrinho (LocalStorage)
function adicionarAoCarrinho(produto){
  const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  const idx = carrinho.findIndex(i => i.id === produto.id);
  if(idx >= 0){
    carrinho[idx].quantidade += produto.quantidade || 1;
  } else {
    carrinho.push(produto);
  }
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function removerDoCarrinho(produtoId){
  let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  carrinho = carrinho.filter(i => i.id !== produtoId);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function calcularTotal(){
  const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  return carrinho.reduce((s, i) => s + (i.preco * i.quantidade), 0);
}

function atualizarContadorCarrinho(){
  const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  const count = carrinho.reduce((s, i) => s + i.quantidade, 0);
  const el = document.getElementById('cart-count');
  if(el) el.innerText = count;
}

if(typeof module !== 'undefined') module.exports = { adicionarAoCarrinho, removerDoCarrinho, calcularTotal, atualizarContadorCarrinho };
