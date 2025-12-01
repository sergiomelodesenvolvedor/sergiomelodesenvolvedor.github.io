const db = require('../config/database');

async function createOrder(req, res) {
  const conn = await db.getConnection();
  try {
    const { cliente_nome, cliente_email, itens } = req.body;
    if (!cliente_nome || !cliente_email || !Array.isArray(itens) || itens.length === 0) {
      return res.status(400).json({ error: 'Dados do pedido inválidos' });
    }

    await conn.beginTransaction();
    const [result] = await conn.query(
      'INSERT INTO pedidos (cliente_nome, cliente_email, total) VALUES (?, ?, ?)',
      [cliente_nome, cliente_email, 0]
    );
    const pedidoId = result.insertId;

    let total = 0;
    for (const item of itens) {
      const [prodRows] = await conn.query('SELECT preco, estoque FROM produtos WHERE id = ?', [item.produto_id]);
      if (prodRows.length === 0) throw new Error('Produto não encontrado: ' + item.produto_id);
      const preco = prodRows[0].preco;
      const estoque = prodRows[0].estoque || 0;
      if (item.quantidade > estoque) throw new Error('Estoque insuficiente para produto: ' + item.produto_id);

      const subtotal = preco * item.quantidade;
      total += subtotal;

      await conn.query(
        'INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario) VALUES (?, ?, ?, ?)',
        [pedidoId, item.produto_id, item.quantidade, preco]
      );

      await conn.query('UPDATE produtos SET estoque = estoque - ? WHERE id = ?', [item.quantidade, item.produto_id]);
    }

    await conn.query('UPDATE pedidos SET total = ? WHERE id = ?', [total, pedidoId]);
    await conn.commit();
    res.status(201).json({ id: pedidoId, total });
  } catch (err) {
    await conn.rollback();
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar pedido', details: err.message });
  } finally {
    conn.release();
  }
}

async function getAll(req, res) {
  try {
    const [pedidos] = await db.query('SELECT * FROM pedidos ORDER BY data_criacao DESC');
    res.json(pedidos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar pedidos' });
  }
}

async function getOrderItems(req, res) {
  try {
    const pedidoId = req.params.id;
    const [itens] = await db.query(`
      SELECT ip.*, p.nome as produto_nome 
      FROM itens_pedido ip
      LEFT JOIN produtos p ON ip.produto_id = p.id
      WHERE ip.pedido_id = ?
    `, [pedidoId]);
    res.json(itens);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar itens do pedido' });
  }
}

module.exports = { createOrder, getAll, getOrderItems };
