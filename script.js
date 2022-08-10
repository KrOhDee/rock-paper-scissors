let compScore = 0
let playerScore = 0

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = arrOfChoices[randomNum];
    return compChoice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied! You both picked rock.'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {    
        playerScore++
        return 'You win! Rock beats scissors!'
        
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {    
        compScore++
        return 'You lose! paper beats rock!'
        
    }
   else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked paper.'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {    
        playerScore++
        return 'You win! Paper beats rock!'
        
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {    
        compScore++
        return 'You lose! Scissors beats paper!'
        
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {   
        return 'You tied! You both picked scissors' 
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {    
        playerScore++
        return 'You win! Scissors beats paper!'
        
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {    
        compScore++
        return 'You lose! Rock beats scissors!'
        
    }

}




const game = () => {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, paper, or scissors?', 'Choose').toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}
 
if (playerScore < compScore) {
    return 'You lost to the computer.'
}
else if (playerScore > compScore) {
    return 'You beat the computer.'
}
else {
    return 'You tied with the computer.'
}
}

console.log(game());






 





































































