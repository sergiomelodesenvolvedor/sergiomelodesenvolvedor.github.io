const db = require('../config/database');

async function getAll(req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM produtos WHERE ativo = 1');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM produtos WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
}

async function getByCategory(req, res) {
  try {
    const categoriaId = req.params.categoriaId;
    const [rows] = await db.query('SELECT * FROM produtos WHERE categoria_id = ? AND ativo = 1', [categoriaId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos por categoria' });
  }
}

module.exports = { getAll, getById, getByCategory };
