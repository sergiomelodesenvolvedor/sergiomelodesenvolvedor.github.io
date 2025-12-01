const db = require('../config/database');

async function seed() {
  try {
    // Limpar dados existentes
    await db.query('DELETE FROM itens_pedido');
    await db.query('DELETE FROM pedidos');
    await db.query('DELETE FROM produtos');
    await db.query('DELETE FROM categorias');
    
    // Resetar auto_increment
    await db.query('ALTER TABLE categorias AUTO_INCREMENT = 1');
    await db.query('ALTER TABLE produtos AUTO_INCREMENT = 1');
    await db.query('ALTER TABLE pedidos AUTO_INCREMENT = 1');
    await db.query('ALTER TABLE itens_pedido AUTO_INCREMENT = 1');
    console.log('✓ Dados antigos removidos');

    // Inserir categorias
    await db.query(`
      INSERT INTO categorias (nome, descricao) VALUES
      ('Eletrônicos', 'Produtos eletrônicos e tecnologia'),
      ('Roupas', 'Vestuário e acessórios'),
      ('Livros', 'Livros e publicações'),
      ('Casa', 'Itens para casa e decoração')
    `);
    console.log('✓ Categorias inseridas');

    // Inserir produtos
    await db.query(`
      INSERT INTO produtos (nome, preco, descricao, imagem, categoria_id, estoque, ativo) VALUES
      -- Eletrônicos
      ('Notebook Dell Inspiron', 3499.99, 'Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM, 256GB SSD', 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop', 1, 10, true),
      ('MacBook Pro 14"', 12999.00, 'MacBook Pro 14 polegadas, Chip M3, 16GB RAM, 512GB SSD', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop', 1, 5, true),
      ('Mouse Logitech MX Master', 389.90, 'Mouse sem fio Logitech MX Master 3, Design ergonômico, 7 botões', 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop', 1, 50, true),
      ('Teclado Mecânico RGB', 599.00, 'Teclado mecânico RGB, switches blue, ABNT2', 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop', 1, 25, true),
      ('Smartphone Samsung Galaxy', 1899.00, 'Samsung Galaxy A54 5G, 128GB, Câmera 50MP', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop', 1, 15, true),
      ('iPhone 15 Pro', 7999.00, 'iPhone 15 Pro 256GB, Câmera 48MP, Titânio', 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop', 1, 8, true),
      ('Fone Bluetooth Sony', 899.00, 'Fone de ouvido Bluetooth Sony WH-1000XM5, Cancelamento de ruído', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop', 1, 30, true),
      ('Smart TV 50" Samsung', 2499.00, 'Smart TV LED 50" 4K UHD Samsung, HDR, WiFi', 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop', 1, 12, true),
      ('Tablet iPad Air', 4999.00, 'iPad Air 10.9", 64GB, WiFi, Chip M1', 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop', 1, 20, true),
      ('Webcam Logitech C920', 449.00, 'Webcam Full HD 1080p, microfone estéreo', 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=300&fit=crop', 1, 40, true),
      
      -- Roupas
      ('Camiseta Básica Branca', 49.90, 'Camiseta 100% algodão, manga curta, várias cores', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop', 2, 100, true),
      ('Camiseta Estampada', 79.90, 'Camiseta com estampa exclusiva, algodão premium', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=300&fit=crop', 2, 80, true),
      ('Calça Jeans Slim', 159.90, 'Calça jeans skinny, corte moderno, stretch', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop', 2, 60, true),
      ('Jaqueta Jeans', 249.90, 'Jaqueta jeans clássica, 100% algodão', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop', 2, 35, true),
      ('Moletom com Capuz', 139.90, 'Moletom confortável com capuz e bolso canguru', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop', 2, 70, true),
      ('Vestido Floral', 189.90, 'Vestido floral leve, perfeito para o verão', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop', 2, 45, true),
      ('Blazer Social', 299.90, 'Blazer feminino alfaiataria, cores neutras', 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=300&fit=crop', 2, 25, true),
      ('Tênis Esportivo', 349.90, 'Tênis para corrida, amortecimento premium', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop', 2, 50, true),
      ('Camisa Social', 129.90, 'Camisa social masculina, tecido antiamarrota', 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop', 2, 55, true),
      ('Short Jeans', 99.90, 'Short jeans confortável, cintura média', 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop', 2, 90, true),
      
      -- Livros
      ('JavaScript: The Good Parts', 65.00, 'Livro essencial sobre JavaScript por Douglas Crockford', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop', 3, 30, true),
      ('Clean Code', 89.90, 'Um manual de boas práticas em programação por Robert C. Martin', 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop', 3, 20, true),
      ('Design Patterns', 95.00, 'Padrões de projeto reutilizáveis', 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop', 3, 25, true),
      ('Python Crash Course', 79.90, 'Introdução prática à programação em Python', 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&h=300&fit=crop', 3, 40, true),
      ('O Poder do Hábito', 44.90, 'Por que fazemos o que fazemos na vida e nos negócios', 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop', 3, 50, true),
      ('Sapiens', 54.90, 'Uma breve história da humanidade por Yuval Noah Harari', 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop', 3, 35, true),
      ('1984 - George Orwell', 39.90, 'Clássico da literatura distópica', 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&h=300&fit=crop', 3, 60, true),
      ('O Hobbit', 49.90, 'A jornada de Bilbo Bolseiro por J.R.R. Tolkien', 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=300&fit=crop', 3, 45, true),
      ('Thinking Fast and Slow', 59.90, 'Daniel Kahneman sobre tomada de decisões', 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=300&fit=crop', 3, 28, true),
      ('The Lean Startup', 69.90, 'Como criar empresas inovadoras por Eric Ries', 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop', 3, 32, true),
      
      -- Casa
      ('Almofada Decorativa', 39.90, 'Almofada 45x45cm, tecido suave, estampa moderna', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=300&fit=crop', 4, 80, true),
      ('Luminária de Mesa LED', 149.00, 'Luminária LED com ajuste de intensidade e temperatura', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop', 4, 40, true),
      ('Tapete Geométrico', 189.00, 'Tapete 2x1.5m, design geométrico moderno', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=300&fit=crop', 4, 25, true),
      ('Jogo de Panelas', 399.00, 'Conjunto com 5 panelas antiaderentes', 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&h=300&fit=crop', 4, 30, true),
      ('Cafeteira Elétrica', 259.00, 'Cafeteira programável 12 xícaras', 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop', 4, 35, true),
      ('Espelho Redondo', 129.90, 'Espelho decorativo 60cm com moldura dourada', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=300&fit=crop', 4, 20, true),
      ('Vaso Decorativo', 89.90, 'Vaso de cerâmica artesanal, 30cm altura', 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=300&fit=crop', 4, 50, true),
      ('Quadro Abstrato', 199.00, 'Quadro canvas 60x80cm, arte moderna', 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop', 4, 15, true),
      ('Organizador de Mesa', 79.90, 'Porta-canetas e organizador em bambu', 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400&h=300&fit=crop', 4, 60, true),
      ('Difusor de Aromas', 119.00, 'Difusor ultrassônico com LED colorido', 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop', 4, 45, true)
    `);
    console.log('✓ Produtos inseridos');

    console.log('\n🎉 Seed completo! Banco populado com sucesso.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Erro ao popular o banco:', err);
    process.exit(1);
  }
}

seed();
