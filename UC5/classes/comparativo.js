

//Abordagem Procediral (Dados e Funçoes separados)
//Os dados ficam em um objeto simples {Estrutura} 

const contaProcedural = {titular: 'Ana', Saldo: 100}

// A função é isolada e recebe os dados do argumento 
function depositar(conta, valor) {
    conta.saldo += valor
}

//Execução passa o dado para a função 

depositar(contaProcedural, 50);
console.console.log(`Procedural: ${contaProcedural.titular} tem R$${contaProcedural.saldo}`);
//------------------------------------ "" ------------------------------------------------------- 

//Abordagem Orientada a objtos (Dados e comportamentos Unidos)
// classe (molde) encapsula o estado (atributos) e o compotamnetos (metodos)

class contaBancaria{
    constructor(titular,saldo){

        this.titular = titular; //atributo 
        this.saldo = saldo;  //atributo
    }

    depositar(valor){  //metodo
      this.saldo += valor;
}
}

//Execução: instanciar o objeto e chamar o seu metodo 

const contaPoo = new contaBancaria('Ana', 100)
contaPoo.depositar(50);

console.log(`POO: ${contaPOO.titular} tem R$ ${contaPOO.saldo}`)

