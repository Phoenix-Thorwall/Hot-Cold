function initialize() {
    outputGuess = document.getElementById("guess");
    outputNumGuess = document.getElementById("numGuess");
    outputVictory = document.getElementById("victory");
    newRound();
    display();
}

function newRound() {
    answer = Math.floor((Math.random() * 100) + 1);
    guess = 50;
    numGuess = 5;
    display();
}

function display() {
    outputNumGuess.innerHTML = "Guesses Left: " + numGuess;
    outputGuess.innerHTML = "Guess: " + guess;
}



function addNum(n){
    if(guess + parseInt(n) <= 100){
        guess += parseInt(n);
        display();
    }   
}

function subtractNum(n){
    if(guess - parseInt(n) >= 0){
        guess -= parseInt(n);
        display();
    }
}

function submitGuess(){
    if (guess != answer){
        numGuess--;
        display();
        addRow("history");
    } else{
        outputVictory.innerHTML = "YOU GUESSED CORRECTLY YAYYYYYY";
    }
}

function addRow(tableID){
    let tableRef = document.getElementById(tableID);

    let newRow = tableRef.insertRow(-1);
    let guessCell = newRow.insertCell(0);
    let hintCell = newRow.insertCell(1);

    guessCell.innerHTML = guess;
    
    let range = Math.abs(answer - guess);

    if (range <= 5){
        hintCell.innerHTML = "Very Hot";
    } else if (range >= 6 && range <= 8){
        hintCell.innerHTML = "Hot";
    } else if (range >= 9 && range <= 15){
        hintCell.innerHTML = "Very Warm";
    } else if (range >= 16 && range <= 20){
        hintCell.innerHTML = "Warm";
    } else if (range >= 21 && range <= 30){
        hintCell.innerHTML = "Cool";
    } else if (range >= 31 && range <= 40){
        hintCell.innerHTML = "Very Cool";
    } else if (range >= 41 && range <= 55){
        hintCell.innerHTML = "Cold";
    } else if (range >= 55){
        hintCell.innerHTML = "Very Cold";
    }
}
