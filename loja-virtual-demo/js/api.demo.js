// API demo (mock) - sem backend
// Mantém a mesma interface de js/api.js do projeto original

const API_BASE = '';

// Dados mockados
const MOCK_CATEGORIAS = [
  { id: 1, nome: 'Eletrônicos' },
  { id: 2, nome: 'Roupas' },
  { id: 3, nome: 'Livros' },
  { id: 4, nome: 'Casa' }
];

const MOCK_PRODUTOS = [
  // Eletrônicos
  { id: 1, nome: 'Notebook Dell Inspiron', preco: 3499.99, descricao: 'Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM, 256GB SSD', imagem: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop', categoria_id: 1, estoque: 10 },
  { id: 2, nome: 'MacBook Pro 14"', preco: 12999.00, descricao: 'MacBook Pro 14 polegadas, Chip M3, 16GB RAM, 512GB SSD', imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop', categoria_id: 1, estoque: 5 },
  { id: 3, nome: 'Mouse Logitech MX Master', preco: 389.90, descricao: 'Mouse sem fio Logitech MX Master 3, Design ergonômico, 7 botões', imagem: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop', categoria_id: 1, estoque: 50 },
  { id: 4, nome: 'Teclado Mecânico RGB', preco: 599.00, descricao: 'Teclado mecânico RGB, switches blue, ABNT2', imagem: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop', categoria_id: 1, estoque: 25 },
  { id: 5, nome: 'Smartphone Samsung Galaxy', preco: 1899.00, descricao: 'Samsung Galaxy A54 5G, 128GB, Câmera 50MP', imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop', categoria_id: 1, estoque: 15 },
  { id: 6, nome: 'iPhone 15 Pro', preco: 7999.00, descricao: 'iPhone 15 Pro 256GB, Câmera 48MP, Titânio', imagem: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop', categoria_id: 1, estoque: 8 },
  { id: 7, nome: 'Fone Bluetooth Sony', preco: 899.00, descricao: 'Fone de ouvido Bluetooth Sony WH-1000XM5, Cancelamento de ruído', imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop', categoria_id: 1, estoque: 30 },
  { id: 8, nome: 'Smart TV 50" Samsung', preco: 2499.00, descricao: 'Smart TV LED 50" 4K UHD Samsung, HDR, WiFi', imagem: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop', categoria_id: 1, estoque: 12 },
  { id: 9, nome: 'Tablet iPad Air', preco: 4999.00, descricao: 'iPad Air 10.9", 64GB, WiFi, Chip M1', imagem: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop', categoria_id: 1, estoque: 20 },
  { id: 10, nome: 'Webcam Logitech C920', preco: 449.00, descricao: 'Webcam Full HD 1080p, microfone estéreo', imagem: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=300&fit=crop', categoria_id: 1, estoque: 40 },
  
  // Roupas
  { id: 11, nome: 'Camiseta Básica Branca', preco: 49.90, descricao: 'Camiseta 100% algodão, manga curta, várias cores', imagem: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop', categoria_id: 2, estoque: 100 },
  { id: 12, nome: 'Camiseta Estampada', preco: 79.90, descricao: 'Camiseta com estampa exclusiva, algodão premium', imagem: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=300&fit=crop', categoria_id: 2, estoque: 80 },
  { id: 13, nome: 'Calça Jeans Slim', preco: 159.90, descricao: 'Calça jeans skinny, corte moderno, stretch', imagem: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop', categoria_id: 2, estoque: 60 },
  { id: 14, nome: 'Jaqueta Jeans', preco: 249.90, descricao: 'Jaqueta jeans clássica, 100% algodão', imagem: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop', categoria_id: 2, estoque: 35 },
  { id: 15, nome: 'Moletom com Capuz', preco: 139.90, descricao: 'Moletom confortável com capuz e bolso canguru', imagem: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop', categoria_id: 2, estoque: 70 },
  { id: 16, nome: 'Vestido Floral', preco: 189.90, descricao: 'Vestido floral leve, perfeito para o verão', imagem: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop', categoria_id: 2, estoque: 45 },
  { id: 17, nome: 'Blazer Social', preco: 299.90, descricao: 'Blazer feminino alfaiataria, cores neutras', imagem: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=300&fit=crop', categoria_id: 2, estoque: 25 },
  { id: 18, nome: 'Tênis Esportivo', preco: 349.90, descricao: 'Tênis para corrida, amortecimento premium', imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop', categoria_id: 2, estoque: 50 },
  { id: 19, nome: 'Camisa Social', preco: 129.90, descricao: 'Camisa social masculina, tecido antiamarrota', imagem: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop', categoria_id: 2, estoque: 55 },
  { id: 20, nome: 'Short Jeans', preco: 99.90, descricao: 'Short jeans confortável, cintura média', imagem: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop', categoria_id: 2, estoque: 90 },
  
  // Livros
  { id: 21, nome: 'JavaScript: The Good Parts', preco: 65.00, descricao: 'Livro essencial sobre JavaScript por Douglas Crockford', imagem: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop', categoria_id: 3, estoque: 30 },
  { id: 22, nome: 'Clean Code', preco: 89.90, descricao: 'Um manual de boas práticas em programação por Robert C. Martin', imagem: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop', categoria_id: 3, estoque: 20 },
  { id: 23, nome: 'Design Patterns', preco: 95.00, descricao: 'Padrões de projeto reutilizáveis', imagem: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop', categoria_id: 3, estoque: 25 },
  { id: 24, nome: 'Python Crash Course', preco: 79.90, descricao: 'Introdução prática à programação em Python', imagem: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&h=300&fit=crop', categoria_id: 3, estoque: 40 },
  { id: 25, nome: 'O Poder do Hábito', preco: 44.90, descricao: 'Por que fazemos o que fazemos na vida e nos negócios', imagem: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop', categoria_id: 3, estoque: 50 },
  { id: 26, nome: 'Sapiens', preco: 54.90, descricao: 'Uma breve história da humanidade por Yuval Noah Harari', imagem: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop', categoria_id: 3, estoque: 35 },
  { id: 27, nome: '1984 - George Orwell', preco: 39.90, descricao: 'Clássico da literatura distópica', imagem: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&h=300&fit=crop', categoria_id: 3, estoque: 60 },
  { id: 28, nome: 'O Hobbit', preco: 49.90, descricao: 'A jornada de Bilbo Bolseiro por J.R.R. Tolkien', imagem: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=300&fit=crop', categoria_id: 3, estoque: 45 },
  { id: 29, nome: 'Thinking Fast and Slow', preco: 59.90, descricao: 'Daniel Kahneman sobre tomada de decisões', imagem: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=300&fit=crop', categoria_id: 3, estoque: 28 },
  { id: 30, nome: 'The Lean Startup', preco: 69.90, descricao: 'Como criar empresas inovadoras por Eric Ries', imagem: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop', categoria_id: 3, estoque: 32 },
  
  // Casa
  { id: 31, nome: 'Almofada Decorativa', preco: 39.90, descricao: 'Almofada 45x45cm, tecido suave, estampa moderna', imagem: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=300&fit=crop', categoria_id: 4, estoque: 80 },
  { id: 32, nome: 'Luminária de Mesa LED', preco: 149.00, descricao: 'Luminária LED com ajuste de intensidade e temperatura', imagem: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop', categoria_id: 4, estoque: 40 },
  { id: 33, nome: 'Tapete Geométrico', preco: 189.00, descricao: 'Tapete 2x1.5m, design geométrico moderno', imagem: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=300&fit=crop', categoria_id: 4, estoque: 25 },
  { id: 34, nome: 'Jogo de Panelas', preco: 399.00, descricao: 'Conjunto com 5 panelas antiaderentes', imagem: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&h=300&fit=crop', categoria_id: 4, estoque: 30 },
  { id: 35, nome: 'Cafeteira Elétrica', preco: 259.00, descricao: 'Cafeteira programável 12 xícaras', imagem: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop', categoria_id: 4, estoque: 35 },
  { id: 36, nome: 'Espelho Redondo', preco: 129.90, descricao: 'Espelho decorativo 60cm com moldura dourada', imagem: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=300&fit=crop', categoria_id: 4, estoque: 20 },
  { id: 37, nome: 'Vaso Decorativo', preco: 89.90, descricao: 'Vaso de cerâmica artesanal, 30cm altura', imagem: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=300&fit=crop', categoria_id: 4, estoque: 50 },
  { id: 38, nome: 'Quadro Abstrato', preco: 199.00, descricao: 'Quadro canvas 60x80cm, arte moderna', imagem: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop', categoria_id: 4, estoque: 15 },
  { id: 39, nome: 'Organizador de Mesa', preco: 79.90, descricao: 'Porta-canetas e organizador em bambu', imagem: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400&h=300&fit=crop', categoria_id: 4, estoque: 60 },
  { id: 40, nome: 'Difusor de Aromas', preco: 119.00, descricao: 'Difusor ultrassônico com LED colorido', imagem: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop', categoria_id: 4, estoque: 45 }
];

const PEDIDOS_KEY = 'devshop_demo_pedidos';

function _loadPedidos() {
  try {
    return JSON.parse(localStorage.getItem(PEDIDOS_KEY) || '[]');
  } catch {
    return [];
  }
}

function _savePedidos(arr) {
  localStorage.setItem(PEDIDOS_KEY, JSON.stringify(arr));
}

function _novoId(arr) {
  const max = arr.reduce((m, p) => Math.max(m, p.id), 0);
  return max + 1;
}

async function buscarCategorias() {
  return MOCK_CATEGORIAS;
}

async function buscarProdutos(){
  return MOCK_PRODUTOS;
}

async function buscarProduto(id){
  const produto = MOCK_PRODUTOS.find(p => String(p.id) === String(id));
  if(!produto) throw new Error('Produto não encontrado');
  return produto;
}

async function criarPedido(dadosPedido){
  const pedidos = _loadPedidos();
  const itensDetalhados = (dadosPedido.itens || []).map(item => {
    const p = MOCK_PRODUTOS.find(pr => pr.id === item.produto_id);
    const preco = p ? parseFloat(p.preco) : 0;
    return {
      produto_id: item.produto_id,
      quantidade: item.quantidade || 1,
      preco_unitario: preco,
      produto_nome: p ? p.nome : `Produto #${item.produto_id}`
    };
  });
  const total = itensDetalhados.reduce((s, it) => s + it.quantidade * it.preco_unitario, 0);
  const pedido = {
    id: _novoId(pedidos),
    cliente_nome: dadosPedido.cliente_nome,
    cliente_email: dadosPedido.cliente_email,
    total,
    status: 'processando',
    data_criacao: new Date().toISOString(),
    itens: itensDetalhados
  };
  pedidos.push(pedido);
  _savePedidos(pedidos);
  return { id: pedido.id, total: pedido.total, status: pedido.status };
}

async function buscarPedidos(){
  // retorna sem itens (itens pelo endpoint dedicado)
  const pedidos = _loadPedidos();
  return pedidos.map(({ itens, ...rest }) => rest);
}

async function buscarItensPedido(pedidoId){
  const pedidos = _loadPedidos();
  const p = pedidos.find(pp => String(pp.id) === String(pedidoId));
  return p ? (p.itens || []) : [];
}
