class Contabancaria {
  #saldo;
  #senha; //camppo privado

  constructor(titular, saldoInicial, senha) {
    this.titular = titular;
    this.#saldo = saldoInicial;
    this.#senha = senha;
  }

  // Getter para leitura controlada
  get saldo() {
    //ira retornar o saldo
    return `R$ ${this.#saldo.toFixed(2)}`;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depositado: R$ ${valor}`);
    }
  }

  sacar(valor, senhaInformada) {
    if (senhaInformada !== this.#senha) {
      console.log(`Senha Incorreta`);
    }

    if (valor > this.#saldo) {
      console.log(`Saldo insuficiente`);
      return;
    }

    this.#saldo -= valor;
    console.log(`Saque de R$ ${valor} realizado`);

    console.log(`O saldo restante é de R$: ${this.#saldo}`);
  }
}
debugger;

const minhaConta = new Contabancaria("Mario", 100, 123456);

minhaConta.depositar(100);
minhaConta.sacar(80, 123456);
