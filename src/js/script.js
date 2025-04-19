// Exercício 1

//Variável com valor undefined
let fruta;
console.log("A fruta se chama:" fruta);  //Saída como: undefined

//Variável com valor vazio
let cor = null;
console.log("A cor escolhida é:" cor);  //Saída como: string vazia

//Variável com valor
let idade = 18;
console.log("A idade é igual a:" idade)  //Saída como: 18


//Exercício 2

let a = 12;
let b = "12";
let c = 8;

cconsole.log("a != c:", a != c);        // true (10 é diferente de 5)
console.log("a == b:", a == b);         // true (valores iguais, tipos diferentes)
console.log("a === b:", a === b);       // false (valores iguais, tipos diferentes)
console.log("a >= c:", a >= c);         // true (10 é maior ou igual a 5)


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


//Exercício 9

//Variavel string
let variavelstring = "321.12";
//Variavel convertida para float
let convertido = pareseFloat(variavelstring);
//Apresentando tipo de variavel entre Float e Int
if (!Number.isInteger(convertido)) {
    console.log("float")
} 
else {
    console.log("int")
}
//Valor da variavel e seu tipo 
console.log(convertido);
console.log(typeof convertido);

