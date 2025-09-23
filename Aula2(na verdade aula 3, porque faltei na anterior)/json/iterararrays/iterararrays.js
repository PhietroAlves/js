const dados = {
    alunos:[
        {nome: "Ariã", numeroChamada:1},
        {nome: "Arthur", numeroChamada:2},
        {nome: "Beatriz", numeroChamada:3},
    ]
};

dados.alunos.forEach(aluno=>{
    console.log(`Número da chamada: ${aluno.numeroChamada}, Nome do aluno: ${aluno.nome}`)
});