let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#sbmt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultparas")

const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Plaese enter valid number");
    } else if (guess < 1) {
        alert("Please enter number is more than 1")
    }
    else if (guess > 100) {
        alert("Please enter number is less than 100")
    }
    else {
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`game is over random no was = ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess===randomNumber){
    displayMessage(`you guessed it right number`);
    endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`you are TOOO low`);
    }
    else if(guess > randomNumber){
        displayMessage(`you are TOOO high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML+=`${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `${message}`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game </h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();

}
function newGame(){
    const newGamebtn = document.querySelector("#newGame");
    newGamebtn.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}