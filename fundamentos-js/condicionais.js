let idade = 17;

if (idade >= 18){
    console.log("Pode comprar bebida alcoólica.")
}else{
    console.log("Venda proibida para menores de 18 anos.")
}

let horaAtual = 20; 

if (horaAtual >= 6 && horaAtual < 12){
    console.log("Bom dia!");
}else if(horaAtual >= 12 && horaAtual < 18){
    console.log("Boa tarde!");
}else{
    console.log("Boa noite!");
}

let opcao = 1;

switch (opcao) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Listar");
        break;
    case 3:
        console.log("Sair");
        break;
    default:
        console.log("Opção inválida");
        break;
}