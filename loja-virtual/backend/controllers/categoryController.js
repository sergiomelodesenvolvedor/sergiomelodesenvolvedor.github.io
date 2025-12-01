const db = require('../config/database');

async function getAll(req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM categorias');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar categorias' });
  }
}

module.exports = { getAll };
