  //Variavel 
// let nome = "Esley"
// let sobrenome = "Leal"
// let nomecompleto = `Nome: ${nome} ${sobrenome}`;
// console.log(nomecompleto);



// Condicional if and else

// let idade = 21;

// if (idade > 17) {
    //console.log("Voce e maior de idade");
// } 
// else {
    // console.log("voce e menor de idade");
// }



   // >
   // <
   // ==
   // ===
   // >=
   // <=
   // !=



 // let idade = "20";

// if (idade == 20) {
    // idade = idade + 15; // concatenacao 
    // console.log("Idade adicionada com sucesso!");
    // console.log(idade);
// }

// let idade = 20;

// if (idade === 20) {
   // idade = idade + 15;
   // console.log ("Idade adicionada com sucesso!");
   // console.log(idade);
// }


// let nome = "Esley"
// let idade = 20
// console.log(nome)
 
// if (idade === 20) //{
   // console.log("Voce e maior de idade!");
// //}


// let idade = 56;

/* if(idade <= 12){
    console.log("Voce e uma crianca");
} else if(idade >= 13 && idade <= 17){
    console.log("Voce e um adolescente");
} else if(idade >= 18 && idade <= 55){
    console.log("Voce e adulto");
} else if(idade >= 56){
    console.log("Voce e um idoso");
}
*/

/* Desmitificando o if*/
/*let idade = 14

let adulto = idade >= 18 && idade < 60;

if(adulto){
    console.log("E adulto")
}
else{
    console.log("Nao e adulto")
}
*/


/*
let x = 10;
let y = 5;
console.log(x > y);


let w = "10";
let z = 10;
console.log(w === z);

let a = 10;
let b = 5;
console.log(a != b);

let preco = 46;

if(preco <= 45){
    console.log("esta barato")
}
else{
    console.log("esta caro")
}
*/


/*Condicional ternaria*/
/*
let ismember = false

let shipping = ismember ? 2 : 10;


console.log(ismember ? `Voce e membro` : `Voce nao e membro`);
console.log("Frete: " + shipping);
*/


/*
USO DO SWITCH
let profession = "ESPORTISTA";

console.log("Profissao: " + profession);

switch (profession){
    case `fiscal`:
        console.log(`Sua camisa sera VERDE`);
        break;
    case `bombeiro`:
        console.log(`Sua camisa sera VERMELHA`);
        break;
    case `policial`:
        console.log(`Sua camisa sera AZUL`);
        break;
    default:
        console.log(`Sua camisa sera PRETA`);
}
*/





/*introducao a funcoes*/

/*
function nomecompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}

let completo = nomecompleto("Esley", "Leal");
console.log(`Completo: ` + completo);
*/

/*
function maiorDeIdade(idade){
    if(idade >= 18){
        return true;
    }
    else{
        return false;
    }
}
*/

 /*Calcule a porcentagem entre dois numeros
 Exemplo: 25% de 40 é 10
 Formula de porcentagem (y / x) *100
 uso da funcao
 
 let x = 40
 let y = 10
 let pct = calcpct(x,y);
 console.log(`${pct}% de ${x} é {y}`);
 */

/*
function calcpct (x,y){
    return (y / x) * 100;
}

let x = 80;
let y = 10;
let pct = calcpct(x,y);
console.log(`${pct}% de ${x} é ${y}`);
*/




/*
let profession = `Sem profissao`
console.log("Profissao: " + profession);

switch(profession){
    case `fiscal`:
        console.log(`Sua camisa sera VERDE`)
        break;
    case `bombeiro`:
        console.log(`Sua camisa sera VERMELHA`);
        break;
    case `policial`:
        console.log(`Sua camisa sera AZUL`);
        break;
    default:
    console.log(`Sua camisa sera PRETA`)
    break;
}
*/



/*
function maiorDeidade(idade){
    if(idade >= 18){
        return true;
    } else{
        return false;
    }
}

let idade = 18;
let resultado = maiorDeidade(idade);
console.log(resultado);

if (resultado){
    console.log(`É maior de idade`);
} else{
    console.log(`É menor de idade`);
}
*/



/*
function calcpct(x,y){
    return (y / x) * 100;
}

let x = 40;
let y = 10;
let pct = calcpct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

/*
function calcularImovel(metragem, quartos){
    let m2 = 3000;
    let preco = 0;
    
    switch(quartos){
        case 1:
            preco = metragem * m2
        default:

        break;
        case 2:
            preco = metragem * (m2 * 1.2);

        break;
        case 3:
            preco = metragem * (m2 * 1.5);
        break;
    }
    return preco;
}


let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);
*/



/*
function validar(usuario, senha){
    if(usuario === `Esley` && senha === `123`){
        return true;
    } else {
        return false;
    }
}

let usuario = `Esley`;
let senha = `123`;
let validacao = validar(usuario, senha);
 
if(validacao){
    console.log(`Acesso concedido.`);
} else{
    console.log(`Acesso Negado`);
}
*/




function calcularDizimo() {
    const valor = document.getElementById('valor').value;
    const dizimo = valor * 0.1;
    document.getElementById('resultado').innerHTML = `10% do meu salário é: ${dizimo}`;
  }

  function limparCampos() {
    document.getElementById('valor').value = "";
    document.getElementById('resultado').innerHTML = "";
  }

  







































































































































































