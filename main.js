function computerPlay(){
    let randNum = Math.floor(Math.random() * 3);
    if(randNum >= 0 && randNum < 1){
        return 'Rock';
    }
    if(randNum >= 1 && randNum < 2){
        return 'Paper';
    }
    if(randNum >= 2){
        return 'Scissors';
    }
}

function playRound(playerSelection, cpuSelection){
    if(playerSelection == 'Rock' && cpuSelection == 'Scissors'){
        return `You Win! ${playerSelection} beats ${cpuSelection}`;
    }
    if(playerSelection == 'Scissors' && cpuSelection == 'Paper'){
        return `You Win! ${playerSelection} beats ${cpuSelection}`;
    }
    if(playerSelection == 'Paper' && cpuSelection == 'Rock'){
        return `You Win! ${playerSelection} beats ${cpuSelection}`;
    }
    if(cpuSelection == 'Rock' && playerSelection == 'Scissors'){
        return `You Lose :( ${cpuSelection} beats ${playerSelection}`;
    }
    if(cpuSelection == 'Paper' && playerSelection == 'Rock'){
        return `You Lose :( ${cpuSelection} beats ${playerSelection}`;
    }
    if(cpuSelection == 'Scissors' && playerSelection == 'Paper'){
        return `You Lose :( ${cpuSelection} beats ${playerSelection}`;
    }
    else{
        return `Tie Game! Both Chose ${playerSelection}`;
    }
}

function game(){
    console.log(playRound('Rock', computerPlay()));
    console.log(playRound('Paper', computerPlay()));
    console.log(playRound('Scissors', computerPlay()));
    console.log(playRound('Rock', computerPlay()));
    console.log(playRound('Paper', computerPlay()));
}

game();