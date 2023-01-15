function generateRandomNumberFrom1to6() {

    return Math.floor(Math.random()*6) + 1;
}

function changeDice(playerNumber, randomNumber) {

    let randomImageSource = "images/dice" + randomNumber + ".png";
    document.querySelectorAll("img")[playerNumber].setAttribute("src", randomImageSource);

}

function declareWinner(player1Score, player2Score){

    if(player1Score>player2Score){
        document.querySelector(".container h1").textContent = "🏆Player 1 Won";
    }
    else if(player1Score<player2Score){
        document.querySelector(".container h1").textContent = "Player 2 Won🏆";
    }
    else{
        document.querySelector(".container h1").textContent = "Draw";
    }

}

let player1 = 0;
let player2 = 1;
let player1RandomNumber = generateRandomNumberFrom1to6();
let player2RandomNumber = generateRandomNumberFrom1to6();

changeDice(player1, player1RandomNumber);
changeDice(player2, player2RandomNumber);

declareWinner(player1RandomNumber, player2RandomNumber);
