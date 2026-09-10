// EXERCICIO:
// Desafio: Criar um sistema de Gerenciamento de Biblioteca.
// Classe Livro: título, autor, paginas, paginasLidas.
// Método ler(paginas): atualiza o total lido.
// Método progresso(): exibe a porcentagem lida do livro.
// Classe Biblioteca: guarda uma lista de livros e permite adicionar e listar livros.


class Livro{
    //Constructir constroi os atributos
    constructor (titulo, autor, paginas, paginasLidas){
        
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
        this.paginasLidas = paginasLidas
    }
    

    //Metodo sao as funçoes (Obejto)
    ler(leitura){
       this.paginasLidas += leitura

       if(this.paginasLidas > this.paginas){
          this.paginasLidas = this.paginas
       }
       console.log(`O Total de paginas lidas é ${this.paginasLidas}`)

    }
    
    progresso(){
        const porcentagem = console.log(`O progresso de paginas lidas é ${((this.paginas / this.paginasLidas) * 100).toFixed(2)}%`)
        return `${porcentagem}`
    }
}

class Biblioteca{
    constructor (nome){
    this.nome = ""
    this.livros  = []
    }
    //Adicionar uma instancia de Livro ao array
    adicionaLivros(livro){
    this.livros.push(livro)
    console.log(`Livro Adicionado "${livro.titulo}" a biblioteca ${this.nome}.`)
}

  //exibir todosos livros e seus progresso
  listarLivros(){
console.log(`/n === LISTA DE LIVROS: ${this.nome.toUpperCase()} ===`)

    if(this.livros.length === 0 ){
        console.log(`A biblioteca esta vazia`)
    }

    this.livros.forEach((livro, index) => {
        console.log(
            `${index + 1}. "${livro.titulo}" (${livro.autor})` +
            `- Progrsso ${livro.progresso()} [${livro.paginasLidas}/ ${livro.paginas} pags]`
        )
    })
  }
}

//testando
//Criar biblioteca

const minhaBiblioteca = new Biblioteca("Senac")

//Objetos
const livro1 = new Livro("Livro 1", "Miguel", 500, 0

)
const livro2 = new Livro("Livro 2", "Joao", 300, 50)
const livro3 = new Livro("Livro 3", "Ricardo", 300, 50) 

console.log("------ Adicionando Livros--------")
minhaBiblioteca.adicionaLivros(livro1)
minhaBiblioteca.adicionaLivros(livro2)
minhaBiblioteca.adicionaLivros(livro3)


console.log("------Simular Leitura-------")
livro1.ler(300)
livro2.ler(100)
livro3.ler(10)

console.log("------ estatus da leitura-------")
minhaBiblioteca.listarLivros()