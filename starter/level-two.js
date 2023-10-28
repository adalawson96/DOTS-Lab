/*
 * DOTS: Level Two
 *
 */

const elements = document.querySelectorAll(".js-ball");
// const ball = document.querySelector('level-arena js-arena');
const scoreDisplay = document.getElementsByClassName('.level-header__score');
const levelWinner = document.getElementsByClassName('.level-winner');
let score = 0;


console.log(elements)

for(let i = 0; i < elements.length ; i++){
    elements[i].addEventListener('click', function(){
        score += 10;
        scoreDisplay.innerText = score;
        console.log("Score incremented by 10. New score: " + score);
        
        if(score >= 100){
          levelWinner.style.opacity = 1;
        } else {
            console.log('Score:', score);
        }

    })
}