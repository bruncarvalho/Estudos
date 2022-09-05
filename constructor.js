/*
  Function() Constructor

  * expressão new
  * criar um novo objeto
  * this keword
  
  */

  function Person(name) {
    this.name = name  //dentro da função, temos uma palavra especial chamada this, esse this aqui dentro, sempre vai se referenciar ao bruna que está la fora por exemplo.
  }
    const bruna = new Person('Bruna')  //quando usamos a expressão new, seguida da função, a função se torna uma função construtora que irá retornar um objeto
    console.log(bruna)

    /* Resumo:
    Temos a expressão new, que será utilizada na frente da função, que automaticamente irá retornar um objeto.
    Dentro do escopo, iremos fazer o molde do objeto utilizando a palavra chave this.

    */