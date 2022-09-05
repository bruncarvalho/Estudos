class Livro{
constructor (nome, editora, paginas) {
  this.nome = nome
  this.editora = editora
  this.paginas = paginas
}
  anunciarTitutlo(){
    console.log(`Título: ${this.nome}`)
  }
  descreverTítuo(){
    console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas}`)
  }
}

//Chamando a função
/*
const NodeJS = new Livro('Primeiros passos com NodeJS','Casa do Código', 195)
NodeJS.anunciarTitutlo()
NodeJS.descreverTítuo()*/

//HERANÇA -> quando criamos algo em específico que herde as propriedades/recursos de sua classe já criada

//Outra classe

class LivroColecao extends Livro {
  constructor(nome, nomeColecao) {
    super(nome)
    this.nomeColecao = nomeColecao
  }
  descreverColecao(){
  console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
 }
}

const LogicaDeProgramacao = new LivroColecao('Lógico de Programação', 'Comece a Programar')
LogicaDeProgramacao.descreverColecao()
