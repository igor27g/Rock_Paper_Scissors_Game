// Variables  

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");


// Function responsibles for computer choice (rock, paper or scissors)
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Conver r in Rock and p in Paper
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}



//  Give a point for user, display win and green glow
function win(userChoice, computerChoice) {

    // Display word who used rock, paper and scissors (for example rock user beat scissors computers)
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();



    // Add point for user 
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beat  ${convertToWord(computerChoice)}${smallCompWord} You win!!!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
};

// Give a point for computer, display lost and red glow 
function lose(userChoice, computerChoice) {

    // Display word who used rock, paper and scissors
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();


    // Add point for computer
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses ${convertToWord(computerChoice)}${smallCompWord} You lost!!!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
};

// Dispaly draw and gray glow 
function draw(userChoice, computerChoice) {

    // Display word who used rock, paper and scissors
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();


    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals ${convertToWord(computerChoice)}${smallCompWord} It is a draw!!!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
};


// Rules game
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}


// Main function with addEventListener

function main() {
    rock_div.addEventListener('click', () =>
        game('r'));

    paper_div.addEventListener('click', function () {
        game('p');
    });

    scissors_div.addEventListener('click', function () {
        game('s');
    });
}



main();