// Exercício 1

//Variável com valor undefined
let fruta;
console.log(fruta);  //Saída como: undefined

//Variável com valor vazio
let cor = "";
console.log(cor);  //Saída como: string vazia

//Variável com valor
let idade = 18;
console.log(idade);  //Saída como: 18


//Exercício 2

let a = 12;
let b = "12";
let c = 8;

console.log("a != c:", a != c);        // true (12 é diferente de 8)
console.log("a == b:", a == b);         // true (valores iguais, tipos diferentes)
console.log("a === b:", a === b);       // false (valores iguais, tipos diferentes)
console.log("a >= c:", a >= c);         // true (12 é maior ou igual a 8)

// EXERCÍCIO 3
// Solicita os dados do usuário
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

// Calcula o IMC
let imc = peso / (altura * altura);
let classificacao;

// Usa switch com true para verificar a faixa de IMC
switch (true) {
    case (imc < 18.5):
        classificacao = "Abaixo do peso";
        break;
    case (imc >= 18.5 && imc <= 24.9):
        classificacao = "Peso ideal";
        break;
    case (imc > 24.9):
        classificacao = "Acima do peso";
        break;
    default:
        classificacao = "Valor inválido";
        break;
}

// Exibe os resultados no console
console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura} m`);
console.log(`IMC: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);

//EXERCÍCIO 4
// Estrutura de repetição até 50
for (let i = 1; i <= 50; i++) {
    console.log("O valor é:", i);
}

//Exercício 5

// Define os dados corretos do usuário no sistema
let usuarioCorreto = "admin";
let senhaCorreta = "1234";

// Solicita ao usuário o nome de usuário
let usuarioDigitado = prompt("Digite o nome de usuário:");
// Solicita ao usuário a senha
let senhaDigitada = prompt("Digite a senha:");

// Verifica se os dados digitados são iguais aos cadastrados
if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    // Se o nome e a senha estiverem certos, mostra mensagem de sucesso
    console.log("Login realizado com sucesso!");
} else {
     // Se estiver errado, mostra mensagem de erro
    console.log("Falha na autenticação.");
}

//Exercício 6

//recebendo as notas

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
console.log(nota1);
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
console.log(nota2);
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
console.log(nota3);
let nota4 = parseFloat(prompt("Digite a quarta nota: "));
console.log(nota4);
let nota5 = parseFloat(prompt("Digite a quinta nota: "));
console.log(nota5);
let nota6 = parseFloat(prompt("Digite a sexta nota: "));
console.log(nota6);
let nota7 = parseFloat(prompt("Digite a sétima nota: "));
console.log(nota7);

//media

let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;
// console.log(media.toFixed(1))

//if

if (media >= 6) {
    console.log("Parabéns você foi aprovado, sua média é:", media.toFixed(1));
  } else {
    console.log("Que pena! Você foi reprovado com a média:", media.toFixed(1));
  }


//Exercício 7

//adquirindo as informações do aluno

const nome = prompt("Digite seu nome:")
const idadeAluno = Number(prompt("Digite sua idade:"))
const curso = prompt("Digite seu curso:")
const ano = parseInt(prompt("Digite o ano:"))

//conectando com a tela

let resultado = document.getElementById("resultado")

//imprimindo as informações

resultado.innerHTML = 
  "Nome: " + nome + "<br>" +
  "Idade: " + idade + "<br>" +
  "Curso: " + curso + "<br>" +
  "Ano: " + ano

//Exercício 8

// Texto base
const texto = `Tecnologia é um produto da ciência e da engenharia que
envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.`;


// 1) Primeira posição de "em"
console.log("1) Primeira posição de 'em':", texto.indexOf("em"));


// 2) Última posição de "ia"
console.log("2) Última posição de 'ia':", texto.lastIndexOf("ia"));


// 3) Verifica se tem "ciência"
console.log("3) Contém 'ciência'?", texto.includes("ciência"));


// 4) Verifica se tem "métodos"
console.log("4) Contém 'métodos'?", texto.includes("métodos"));

//Exercício 9

//Variavel string
let variavelstring = "321.12";
//Variavel convertida para float
let convertido = parseFloat(variavelstring);
//Apresentando tipo de variavel entre Float e Int
if (!Number.isInteger(convertido)) {
    console.log("float");
} 
else {
    console.log("int");
}
//Valor da variavel e seu tipo 
console.log(convertido);
console.log(typeof convertido);

