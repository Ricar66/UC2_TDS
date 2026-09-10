 
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    // método público
    exibirDados() {
        console.log(`Nome: ${this.nome} | Salário: R$: ${this.salario}`);
    }
}
// subclass vai receber atributo e método da classe pai através do "extends"
class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario) // executa o construtor da classe pai (Funcionario) garantido que os atributos herdados sejam inicializados corretamente
        this.departamento = departamento;
    }
    // método específico
    gerenciarEquipe() {
        console.log(`${this.nome} está gerenciando o departamento: ${this.departamento}`);
    }
}
const funcionarioComum = new Funcionario("Vitor", 5000);
const funcionarioGerente = new Gerente("Stanley", 15000, "Tigrinho");
funcionarioComum.exibirDados();
funcionarioGerente.gerenciarEquipe();
funcionarioGerente.exibirDados();
 