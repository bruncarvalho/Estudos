let pessoa = {
  nome: 'Bruna',
  sobreNome: 'Carvalho',
  idade: 34,
  social:{
    instagram: {
      url:'@bruna',
      seguidores: 900},
    facebook: 'bruninha'
  }
};

  function pegarNomeCompleto({nome, sobreNome}) {
    
    return `${nome} ${sobreNome}`;
  }

  console.log(pegarNomeCompleto(pessoa));
