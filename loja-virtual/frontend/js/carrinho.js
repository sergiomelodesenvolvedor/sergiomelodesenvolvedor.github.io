document.addEventListener('DOMContentLoaded', () => {
  renderizarCarrinho();
  
  document.getElementById('finalizar').addEventListener('click', () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    if (carrinho.length === 0) {
      alert('Carrinho vazio!');
      return;
    }
    window.location.href = 'checkout.html';
  });
});

function renderizarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  const container = document.getElementById('carrinho-list');
  const totalContainer = document.getElementById('carrinho-total');
  
  if (carrinho.length === 0) {
    container.innerHTML = '<p>Seu carrinho está vazio.</p>';
    totalContainer.innerHTML = '';
    return;
  }
  
  container.innerHTML = carrinho.map(item => {
    const preco = parseFloat(item.preco);
    const quantidade = parseInt(item.quantidade);
    const subtotal = preco * quantidade;
    
    return `
    <div class="carrinho-item">
      <div>
        <h3>${item.nome}</h3>
        <p>R$ ${preco.toFixed(2)} x ${quantidade}</p>
        <p><strong>Subtotal: R$ ${subtotal.toFixed(2)}</strong></p>
      </div>
      <div>
        <label>Qtd: 
          <input type="number" min="1" value="${quantidade}" 
                 onchange="atualizarQuantidade(${item.id}, this.value)">
        </label>
        <button onclick="removerItem(${item.id})">Remover</button>
      </div>
    </div>
  `;
  }).join('');
  
  const total = calcularTotal();
  totalContainer.innerHTML = `<h3>Total: R$ ${total.toFixed(2)}</h3>`;
}

function atualizarQuantidade(produtoId, novaQuantidade) {
  const quantidade = parseInt(novaQuantidade, 10);
  if (quantidade < 1) return;
  
  const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  const item = carrinho.find(i => i.id === produtoId);
  if (item) {
    item.quantidade = quantidade;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
  }
}

function removerItem(produtoId) {
  removerDoCarrinho(produtoId);
  renderizarCarrinho();
}
