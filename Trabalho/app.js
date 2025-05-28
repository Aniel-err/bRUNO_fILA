class Pedido {
  constructor(numero, descricao) {
    this.numero = numero;
    this.descricao = descricao;
    this.proximo = null;
  }
}

class Fila {
  constructor() {
    this.inicio = null;
    this.fim = null;
  }

  enfileirar(pedido) {
    if (this.fim === null) {
      this.inicio = pedido;
      this.fim = pedido;
    } else {
      this.fim.proximo = pedido;
      this.fim = pedido;
    }
  }

  desenfileirar() {
    if (this.inicio === null) return null;
    const removido = this.inicio;
    this.inicio = this.inicio.proximo;
    if (this.inicio === null) this.fim = null;
    return removido;
  }

 
}

