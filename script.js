'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
const displayMessage= function(message){
    document.querySelector('.message').textContent= message;
}
const displayNumber= function(number){
    document.querySelector('.number').textContent=number;
}
const displayWidth= function(width){
    document.querySelector('.number').style.width=width;
}
const displatColor= function(color){
    document.querySelector('body').style.backgroundColor= color;
}
document.querySelector('.check').addEventListener('click', function() {
    const guess= Number (document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    //No guess
    if (!guess){
        displayMessage('Hint: 🚫 No Number!!!');
        //When player wins
    }else if(guess===secretNumber){
        displayMessage('🎉Correct Number!!!');
        displayNumber(secretNumber);

        displatColor('#60b347');
        displayWidth('10rem');
        if(score>highscore){
            highscore= score;
            document.querySelector('.highscore').textContent=highscore;
        }
        
        var firework='firework';
        if(!document.getElementById(firework)){
            var head=document.getElementsByTagName('head')[0];
            var link= document.createElement('link');
            link.id= firework;
            link.rel='stylesheet';
            link.href='firework.css';
            link.media='all';
            head.appendChild(link);
        }
        
        //When player guess too high from secretnumber
    }else if(guess!==secretNumber){
        if(score>1){
            displayMessage (guess> secretNumber? 'Hint: 📈 Too High!!!':'Hint: 📉 Too Low!!!');
        score--;
        document.querySelector('.score').textContent=score;
       displatColor('#fe0404');
        displayWidth('10rem');
        }else{
            displayMessage('😝You Lose The Game!!!');
            document.querySelector('.score').textContent=0;
            displatColor('#fe0404');
        displayWidth('10rem');
        }
        
    }
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    displayNumber(score);
    displayNumber('?');
    document.querySelector('.guess').value='';
    displatColor('#222');
        displayWidth('15rem');
});
