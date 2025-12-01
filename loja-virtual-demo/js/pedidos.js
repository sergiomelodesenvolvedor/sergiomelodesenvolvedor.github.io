document.addEventListener('DOMContentLoaded', async () => {
  await carregarPedidos();
});

async function carregarPedidos() {
  const container = document.getElementById('pedidos-list');
  
  try {
    container.innerHTML = '<p>Carregando pedidos...</p>';
    const pedidos = await buscarPedidos();
    
    if (pedidos.length === 0) {
      container.innerHTML = '<p>Você ainda não tem pedidos.</p>';
      return;
    }
    
    // Buscar itens de cada pedido
    const pedidosCompletos = await Promise.all(
      pedidos.map(async (pedido) => {
        const itens = await buscarItensPedido(pedido.id);
        return { ...pedido, itens };
      })
    );
    
    container.innerHTML = pedidosCompletos.map(pedido => {
      const data = new Date(pedido.data_criacao).toLocaleString('pt-BR');
      const statusClass = `status-${pedido.status}`;
      
      return `
        <div class="pedido-card">
          <h3>Pedido #${pedido.id}</h3>
          <div class="pedido-info">
            <div>
              <p><strong>Data:</strong> ${data}</p>
              <p><strong>Cliente:</strong> ${pedido.cliente_nome}</p>
              <p><strong>Email:</strong> ${pedido.cliente_email}</p>
            </div>
            <div>
              <p><strong>Total:</strong> R$ ${parseFloat(pedido.total).toFixed(2)}</p>
              <p><strong>Status:</strong> <span class="status-badge ${statusClass}">${pedido.status}</span></p>
            </div>
          </div>
          ${pedido.itens && pedido.itens.length > 0 ? `
            <div class="pedido-itens">
              <h4>Itens:</h4>
              <ul>
                ${pedido.itens.map(item => `
                  <li>
                    ${item.produto_nome || `Produto #${item.produto_id}`} - 
                    Qtd: ${item.quantidade} x R$ ${parseFloat(item.preco_unitario).toFixed(2)} = 
                    R$ ${(item.quantidade * parseFloat(item.preco_unitario)).toFixed(2)}
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
    
  } catch (err) {
    console.error(err);
    container.innerHTML = '<p>Erro ao carregar pedidos. Tente novamente.</p>';
  }
}
