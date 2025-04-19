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
console.log(Peso: ${peso} kg);
console.log(Altura: ${altura} m);
console.log(IMC: ${imc.toFixed(2)});
console.log(Classificação: ${classificacao}


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

