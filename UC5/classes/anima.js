 
class Animal {
    emitirSom() {
        console.log("Som genérico de animal...");
    }
}
class Cachorro extends Animal {
    // sobrescrita (polimorfismo)
    emitirSom() {
        console.log("Au Au!");
    }
}
class CalculadoraMatematica {
    // método estático
    static somar(a, b) {
        return a + b;
    }
}
const novoAnimal = new Animal();
const rex = new Cachorro();
novoAnimal.emitirSom();
rex.emitirSom();
console.log(CalculadoraMatematica.somar(5,5)); // Não precisa do "new"
        