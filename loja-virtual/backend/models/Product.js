// Modelo simples (placeholder). As consultas são feitas diretamente nos controllers.
class Product {
  constructor(row) {
    this.id = row.id;
    this.nome = row.nome;
    this.preco = row.preco;
    this.descricao = row.descricao;
    this.imagem = row.imagem;
    this.categoria_id = row.categoria_id;
    this.estoque = row.estoque;
    this.ativo = row.ativo;
  }
}

module.exports = Product;
