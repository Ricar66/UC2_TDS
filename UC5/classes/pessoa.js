// entendendo prototipos na pratica 

function pessoa(nome){
    this.nome
}

pessoa.prototype.falar = function(){
    console.log(`Ola meu nome é ${this.nome}`)
}

const Joao = new pessoa(nome)
console.log(Joao._proto_=== pessoa.prototype);