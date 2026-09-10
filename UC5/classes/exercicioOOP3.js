// Classe Abstrata/Base Produto:
// Atributos privados #id, #nome, #preco.
// Getters para os atributos.
// Método calcularDesconto().
// Classes Filhas (Herança e Polimorfismo):
// ProdutoFisico: adiciona peso e calcula frete. Sobrescreve calcularDesconto().
// ProdutoDigital: adiciona tamanhoArquivo. Sobrescreve calcularDesconto() (desconto maior por não ter frete).
// Classe Carrinho:
// Gere a lista de produtos (adicionar, remover).
// Calcula o total aplicando os descontos polimórficos de cada produto.
// Classe Utilitária Validador (static):
// Método estático para validar se o preço de um produto é válido antes de adicionar.

class produto {

    #id;
    #nome;
    #preco;

  constructor(idproduto, nomeproduto, precoproduto) {
    this.#id = idproduto;
    this.#nome = nomeproduto;
    this.#preco = precoproduto;
  }

 get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get preco() {
        return this.#preco;
    }

  calcularDesconto() {
    return this.#preco
  }
}

class ProdutoFisico extends Produto {

    constructor(idproduto, nomeproduto, precoproduto, peso, valorFrete) {

        super(idproduto, nomeproduto, precoproduto);

        this.peso = peso;
        this.valorFrete = valorFrete;

        
    }

    calcularDesconto() {
        return this.preco - (this.preco * 0.20);
    }
}

class ProdutoDigital extends Produto {

    constructor(idproduto, nomeproduto, precoproduto, tamanhoArquivo) {

        super(idproduto, nomeproduto, precoproduto);

        this.tamanhoArquivo = tamanhoArquivo;
    }

    calcularDesconto() {
        return this.preco - (this.preco * 0.50);
    }
}

class carrinho {
  #produto = [];

  adicionarProduto(produto) {
    this.#produto.push(produto);
  }
  get produto() {
    return this.#produto;
  }

  removerProduto(id) {
    this.#produto = this.produto.filter((produto) => produto.id !== id);
  }

  calcularTotal() {

    let total = 0;

    for (let produto of this.#produtos) {

        total += produto.calcularDesconto();

    }

    return total;
}
}

const NovoProduto = new produto(1, "Livro", 100);
const novoCarrinho = new carrinho()
console.log(NovoProduto);
novoCarrinho.adicionarProduto("Novo Produto")
novoCarrinho.adicionarProduto("carrinho2")
console.log(novoCarrinho)
const prodFisico = new produtoFisico("10kg", "Livro", 100)
console.log(prodFisico)

