//criando a classe carro

class Carro{
    constructor(marca, modelo, ano, velocidade){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = 0 //atributo com valor padrao
    }
    acelerar(incremento){
        this.velocidade += incremento
        console.log(`O ${this.modelo} acelerou para ${this.velocidade} km/h`)
    }

    frear(){
        this.velocidade = 0
        console.log(`O ${this.modelo} parou`)
    }
}

const meuCarro = new Carro("Honda", "Corolla", 2022)
meuCarro.acelerar(150)
meuCarro.frear()