// Serviços API
const API_BASE = 'http://localhost:3000';

async function buscarProdutos(){
  const res = await fetch(`${API_BASE}/api/produtos`);
  if(!res.ok) throw new Error('Erro ao buscar produtos');
  return await res.json();
}

async function buscarProduto(id){
  const res = await fetch(`${API_BASE}/api/produtos/${id}`);
  if(!res.ok) throw new Error('Produto não encontrado');
  return await res.json();
}

async function criarPedido(dadosPedido){
  const res = await fetch(`${API_BASE}/api/pedidos`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(dadosPedido)
  });
  if(!res.ok) throw new Error('Erro ao criar pedido');
  return await res.json();
}

async function buscarPedidos(){
  const res = await fetch(`${API_BASE}/api/pedidos`);
  if(!res.ok) throw new Error('Erro ao buscar pedidos');
  return await res.json();
}

async function buscarItensPedido(pedidoId){
  const res = await fetch(`${API_BASE}/api/pedidos/${pedidoId}/itens`);
  if(!res.ok) return [];
  return await res.json();
}
