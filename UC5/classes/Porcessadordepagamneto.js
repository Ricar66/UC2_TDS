class processadorDePagamento{
    //campos privados (Só acessiveis na classe)

    #saldo = 1000;
    #limite = 500;

    // Metodo publico: única interface que o cliente conehece
    processar(valor, cartao){

        // verificando o cartao 
        if(!this.#validarCartao(cartao)) return "Cartão Invalido";
        if(!this.#verificarSaldo(valor)) return "Saldo Insuficiente";

        this.#registrarTransacao(valor);
        this.#enviarRecibo(valor);
        return "Pagamento Aprovado"
    }

    //passos internos oucultos
    #validarCartao(cartao){
        console.log(`Validando  cartão...`)
        return cartao?.numero && cartao?.validade > new Date();
    }

    #verificarSaldo(valor){
        console.log(`Verificando Saldo`)
        return valor <= this.#saldo + this.#limite
    }

    #registrarTransacao(valor){
        console.log(`Registrando Transação`)
        this.#saldo -= valor;
    }

    #enviarRecibo(valor){
        console.log(`Recibo enviado para o cliente: R$ ${valor.toFixed()}`)

    }

}

const meuPagamento = new processadorDePagamento();
const cartao = {numero:"1234 5678", validade: new Date("2026-12-31")}
console.log(meuPagamento.processar(200, cartao))


