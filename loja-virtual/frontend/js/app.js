let todosProdutos = [];
let categorias = [];

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Carregar categorias e produtos
    [categorias, todosProdutos] = await Promise.all([
      fetch(`${API_BASE || 'http://localhost:3000'}/api/categorias`).then(r => r.json()),
      buscarProdutos()
    ]);

    renderizarProdutosPorCategoria();
    configurarFiltros();
    atualizarContadorCarrinho();
  } catch (err) {
    console.error(err);
    document.getElementById('produtos-container').innerHTML = '<p>Erro ao carregar produtos.</p>';
  }
});

function configurarFiltros() {
  const botoes = document.querySelectorAll('.filtro-btn');
  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      botoes.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const categoriaId = btn.getAttribute('data-categoria');
      if (categoriaId === 'todas') {
        renderizarProdutosPorCategoria();
      } else {
        renderizarProdutosFiltrados(parseInt(categoriaId));
      }
    });
  });
}

function renderizarProdutosPorCategoria() {
  const container = document.getElementById('produtos-container');
  
  const html = categorias.map(categoria => {
    const produtosCategoria = todosProdutos.filter(p => p.categoria_id === categoria.id);
    if (produtosCategoria.length === 0) return '';
    
    return `
      <section class="categoria-secao">
        <h2>${categoria.nome}</h2>
        <div class="produtos-grid">
          ${produtosCategoria.map(p => criarCardProduto(p)).join('')}
        </div>
      </section>
    `;
  }).join('');
  
  container.innerHTML = html;
  configurarBotoesAdicionar();
}

function renderizarProdutosFiltrados(categoriaId) {
  const container = document.getElementById('produtos-container');
  const categoria = categorias.find(c => c.id === categoriaId);
  const produtosFiltrados = todosProdutos.filter(p => p.categoria_id === categoriaId);
  
  container.innerHTML = `
    <section class="categoria-secao">
      <h2>${categoria.nome}</h2>
      <div class="produtos-grid">
        ${produtosFiltrados.map(p => criarCardProduto(p)).join('')}
      </div>
    </section>
  `;
  
  configurarBotoesAdicionar();
}

function criarCardProduto(p) {
  return `
    <article class="produto-card">
      <img src="${p.imagem || 'https://via.placeholder.com/300x200'}" alt="${p.nome}">
      <div>
        <h3>${p.nome}</h3>
        <p class="preco">R$ ${parseFloat(p.preco).toFixed(2)}</p>
        <div class="actions">
          <a href="produto.html?id=${p.id}" class="btn btn-secundario">Ver Detalhes</a>
          <button class="btn btn-primario" data-id="${p.id}" data-nome="${p.nome}" data-preco="${p.preco}">Adicionar</button>
        </div>
      </div>
    </article>
  `;
}

function configurarBotoesAdicionar() {
  document.querySelectorAll('.btn-primario').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'));
      const nome = btn.getAttribute('data-nome');
      const preco = parseFloat(btn.getAttribute('data-preco'));
      adicionarAoCarrinho({ id, nome, preco, quantidade: 1 });
      atualizarContadorCarrinho();
      
      // Feedback visual
      btn.textContent = '✓ Adicionado';
      btn.style.background = '#10b981';
      setTimeout(() => {
        btn.textContent = 'Adicionar';
        btn.style.background = '';
      }, 1500);
    });
  });
}
