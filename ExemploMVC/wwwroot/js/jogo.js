
var gamerOneName = document.getElementById('gamerOne');
var gamerTwoName = document.getElementById('gamerTwo');

const playersName = document.querySelectorAll('input');
var form = document.getElementById('formulario');


const bannerLogin = document.querySelector('.container-banner');
const containerGlobal = document.querySelector('.container-fluid');



const gamersName = () => {


    for (let i = 0; i < 2; i++) {

        let playerOneName = playersName[0].value;
        let playerTwoName = playersName[1].value;


        console.log(playerOneName, playerTwoName);



        if (playerOneName && playerTwoName != "") {


            bannerLogin.style.display = "none";
            containerGlobal.style.display = "block";


            gamerOneName.innerText = playerOneName;
            gamerTwoName.innerText = playerTwoName;



        } else alert('preencha os dois campos!')
    }


}



form.addEventListener('submit', function(e) {


    gamersName();
    e.preventDefault();

})



function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}


var pontos1 = 0;
var pontos2 = 0;
var jogador1 = 1;
var jogador2 = 2;

document.getElementById('jogador1').innerHTML = 'Pontos:' + " " + pontos1;
document.getElementById('jogador2').innerHTML = 'Pontos:' + " " + pontos2;



function resultado(pontosGamerOne, pontosGamertwo) {


    if (pontosGamerOne == pontosGamertwo) {
        alert("Empate Tecnico!!");
        return false;
    }

    else if (pontosGamerOne == 21) {        
        return 1;
    }

    else if (pontosGamertwo == 21) {     
        return 2;
    }

    else if (pontosGamerOne > 21 && pontosGamertwo < 21) {      
        return 2;
    }

    else if (pontosGamerOne < 21 && pontosGamertwo > 21) {        
        return 1;
    }

    else if (pontosGamerOne > pontosGamertwo && pontosGamerOne <= 21) {       
        return 1;
    }

    else if (pontosGamerOne < pontosGamertwo && pontosGamertwo <= 21) {       
        return 2;
    }

    else if (pontosGamerOne > 21 || pontosGamertwo > 21) {
        alert("Ninguem venceu!");
        return 0;
    }

    else
        alert("ué que aconteceu!?");
        return 0;
}


let numero = 0; 
let btns = document.querySelectorAll('button');


const sortearLoop = () => {       

    for (let i of btns) {

        i.addEventListener('click', function () {


            numero = valorAleatorio();
            console.log(numero);

        })

    }



        btn_jogador1.addEventListener('click', function () {

            pontos1 = pontos1 + numero;
            document.getElementById('jogador1').innerHTML = 'Pontos:' + " " + pontos1;

            var cartas1 = document.getElementById("cartas1");
            $(cartas1).attr("src", '/images/' + numero + '.png');

            if (pontos1 > 21) {

                parar1();

            }


         
        
        });


        btn_jogador2.addEventListener('click', function () {

            pontos2 = pontos2 + numero;
            document.getElementById('jogador2').innerHTML = 'Pontos:' + " " + pontos2;


            var cartas2 = document.getElementById("cartas2");
            $(cartas2).attr("src", '/images/' + numero + '.png');

            if (pontos2 > 21) {

                parar2();
            }

        });

          

}



// Ação do botão PARAR do jogador 1//
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

function parar1() {


    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
}




function parar2() {

    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    let result = document.getElementById('resultado');
    resultado(pontos1, pontos2);

    switch (resultado(pontos1, pontos2)) {

        case 1:
            result.innerHTML = "Vencedor " + gamerOneName.innerText;
            alert("Jogador  " + gamerOneName.innerText + " Venceu!");
            break;

        case 2:
            result.innerHTML = "Vencedor " + gamerTwoName.innerText;
            alert("Jogador  " + gamerTwoName.innerText + " Venceu!");
            break;

        default:
            result.innerHTML = "Vencedor Mesa";

    }

   
}

function reiniciar() {

    var botao_reiniciar = document.getElementById("btn_reinicar");
    $(botao_reiniciar).attr(location.reload());

    pontos1 = 0;
    pontos2 = 0; 

}





sortearLoop();








