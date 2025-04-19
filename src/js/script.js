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

