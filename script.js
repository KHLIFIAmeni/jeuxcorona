const canva = document.getElementById('canva');
const time = document.getElementById('time');
const score = document.getElementById('score');
const endScreen = document.getElementById('endscreen');

var days = 60;
var count = 0;
play = false;

function start() {
    count = 0;
    days = 60;

    canva.innerHTML = ''
    score.innerHTML = count;
    time.innerHTML = days;
    play ? '' : game();
    paly = true;
    function game() {
        let timeReminder = Math.round(Math.random()) * 1000;


        setTimeout(() => {
            if (count === 60) {
                success();
            }
            else if (canva.childElementCount < 70) {
                virusPop();
                game();
            }
            else {
                gameOver();
            }
        }, timeReminder)
    }




}

function virusPop() {
    let virus = new Image();
    virus.src = "./images/virus.png";

    virus.classList.add('virus');
    virus.style.top = Math.random() * 600 + 'px';
    virus.style.left = Math.random() * 400 + 'px';
    let x, y;
    x = y = (Math.random() * 45) + 30;
    virus.style.setProperty('--x', `${x}px`);
    virus.style.setProperty('--y', `${y}px`);

    let trX, trY;

    trX = Math.random() * 400;
    trY = Math.random() * 600;
    console.log(trX);
    virus.style.setProperty('--trX', `${trX}%`)
    virus.style.setProperty('--trY', `${trY}%`)
    canva.appendChild(virus)

}
//remove virus

document.addEventListener('click', function (e) {
    let targetElement = e.target || e.srcElemnt;

    if (targetElement.classList.contains('virus')) {
        targetElement.remove();
        count++;
        days--;
        score.innerHTML = count;
        time.innerHTML = days
    }
})

function gameOver() {
    endScreen.innerHTML = `<div class="gameOver">Game Over votre score est ${count}<br>Il vous reste ${days} jours de confinnement</div>`;
    endScreen.style.visibility = 'visible';
    play = false;

}
function success() {
    endScreen.innerHTML = `<div class="gameOver">Bravo !!!! Super votre score est ${count}</div>`;
    endScreen.style.visibility = 'visible';
    play = false;
}
endScreen.addEventListener('click', () => {
    endScreen.style.visibility = 'hidden';
})