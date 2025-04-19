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

