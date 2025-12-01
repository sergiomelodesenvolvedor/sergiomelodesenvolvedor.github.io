const express = require('express');
const cors = require('cors');
const path = require('path');

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const categoriesRouter = require('./routes/categories');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/produtos', productsRouter);
app.use('/api/pedidos', ordersRouter);
app.use('/api/categorias', categoriesRouter);

// Servir frontend estático
app.use(express.static(path.join(__dirname, '..', 'frontend')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
