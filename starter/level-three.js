/*
 * DOTS: Level Three
 *
 */
let score = 0;
const ball = document.querySelector('.js-ball');
const scoreDisplay = document.getElementsByClassName('.js-score');
const levelWinner = document.getElementsByClassName('.level-winner');


ball.addEventListener('click', function() {
    // some logic for updating score and checking for a win here
    // increment the score by 10
    score += 10;
    // Update the score display to show the updated score
    scoreDisplay.innerText = score;
     // Log the score to the console for verification
    console.log("Score incremented by 10. New score: " + score);
    
    if(score >= 100){
        levelWinner.style.opacity = 1;
    } else{
        console.log('Score:', score);
    }
  });