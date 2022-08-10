function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    }
    else if (randomNumber === 1) {
        return 'paper';
    }
    else if (randomNumber === 2) {
        return 'scissors';

    }
        
}

let computerSelection = getComputerChoice()





let playerSelection = 'sciSsors';



function rockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'Draw'
    }

    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return 'You lose, paper beats rock'
    }

    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return 'You win, paper beats rock'
    }

    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        return 'You win, scissors beats paper'
    }

    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        return 'You lose, scissors beats paper'
    }

    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return 'You win, rock beats scissors'
    }

    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        return 'You lose, rock beats scissors'
    }

    else
        return 'Error'
}


console.log(rockPaperScissors(playerSelection, computerSelection));


function game() {

}


























































//function getComputerChoice () {
   // let randomNumber = (Math.floor(Math.random()*3));
   
   // switch (randomNumber) {
     //   case 0:
     //   return 'rock';

     //   case 1: 
    //    return 'paper';

    //    case 2: 
    //    return 'scissors';
   // }






   // if (randomNumber === 0){
   //     return 'Rock';
   //   }
   //   else if (randomNumber === 1){
  //      return 'Paper';
   //   }
  //    else if (randomNumber === 2){
  //    return 'Scissors';
   //   }
//}


//console.log (getComputerChoice())

//use math.random to select an integer from 0 to 1 and let it be multiplied by 3 to give you the numbers 0 to 2 at random
//assign the random numbers to return rock paper or scissors