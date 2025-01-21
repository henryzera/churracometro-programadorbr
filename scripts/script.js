let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
resultado.style.display = 'none';

function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao;

    let qtdTotalCarne = carnePP(duracao.value) * adultos + (carnePP(inputDuracao.value)/2 * criancas);
    console.log(qtdTotalCarne);
    let qtdTotalCerveja = cervejaPP(duracao.value) * adultos;
    console.log(qtdTotalCerveja);
    let qtdTotalBebida = bebidaPP(duracao.value) * adultos + (bebidaPP(inputDuracao.value)/2 * criancas);
    console.log(qtdTotalBebida);

    resultado.style.display = 'flex';
    resultado.innerHTML = `<p>${qtdTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida/2000)} Pet's 2L de Bebida</p>`

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }
    else{
        return 400;
    }

}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}