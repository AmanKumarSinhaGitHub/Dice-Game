function generateRandomNumberFrom1to6() {

    let randomNumber = Math.random();
    randomNumber *= 6;
    randomNumber = Math.floor(randomNumber);
    randomNumber++;

    return randomNumber;
}

function changeDice(playerNumber, randomNumber) {


    if (randomNumber === 1) {
        document.querySelectorAll('img')[playerNumber].setAttribute("src", "/images/dice1.png");
    }
    else if (randomNumber === 2) {
        document.querySelectorAll('img')[playerNumber].setAttribute("src", "/images/dice2.png");
    }
    else if (randomNumber === 3) {
        document.querySelectorAll('img')[playerNumber].setAttribute("src", "/images/dice3.png");
    }
    else if (randomNumber === 4) {
        document.querySelectorAll('img')[playerNumber].setAttribute("src", "/images/dice4.png");
    }
    else if (randomNumber === 5) {
        document.querySelectorAll('img')[playerNumber].setAttribute("src", "/images/dice5.png");
    }
    else {
        document.querySelectorAll('img')[playerNumber].setAttribute("src", "/images/dice6.png");

    }

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