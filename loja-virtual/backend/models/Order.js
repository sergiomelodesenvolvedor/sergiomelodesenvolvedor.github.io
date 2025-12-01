// Modelo simples (placeholder)
class Order {
  constructor(row) {
    this.id = row.id;
    this.cliente_nome = row.cliente_nome;
    this.cliente_email = row.cliente_email;
    this.total = row.total;
    this.status = row.status;
    this.data_criacao = row.data_criacao;
  }
}

module.exports = Order;
