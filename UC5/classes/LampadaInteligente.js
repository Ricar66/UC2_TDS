// Desafio: Sistema de Controle de Dispositivos Smart Home.
// Criar classe LampadaInteligente com controle de brilho (#brilho privado, de 0 a 100).
// Usar Getters/Setters para validar que o brilho não seja menor que 0 nem maior que 100.
// Criar métodos para ligar(), desligar() e ajustarCor().


class LampadaInteligente {

    #brilho = 0

    constructor(brilho, lampada = false) {
        this.brilho = brilho
        this.ligada = lampada
    }

    get brilho() {
        return this.#brilho
    }

    set brilho(valor) {

        if (valor < 0 || valor > 100) {
            throw new RangeError("O brilho deve estar entre 0 e 100")
        }

        this.#brilho = valor
    }

    ligar() {
        this.ligada = true
        console.log("A lâmpada foi ligada")
    }

    desligar() {
        this.ligada = false
        console.log("A lâmpada foi desligada")
    }

    verificarEstado() {

        if (this.ligada) {
            console.log("A lâmpada está ligada")
        } else {
            console.log("A lâmpada está desligada")
        }
    }

    ajustarCor() {

        if (this.#brilho < 30) {
            console.log("A cor da lâmpada é azul")

        } else if (this.#brilho < 70) {
            console.log("A cor da lâmpada é laranja")

        } else {
            console.log("A cor da lâmpada é roxa")
        }
    }
}


const brilhodalampada = new LampadaInteligente(100, false)

brilhodalampada.verificarEstado()
brilhodalampada.ligar()
brilhodalampada.verificarEstado()
brilhodalampada.ajustarCor()