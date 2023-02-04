const canva = document.getElementById('canva');
const time = document.getElementById('time');
const score = document.getElementById('score');
const endScreen = document.getElementById('endscreen');
virusPop();
function virusPop() {
    let virus = new Image();
    virus.src = "./images/virus.png";

    virus.classList.add('virus');
    virus.style.top = Math.random() * 500 + 'px';
    virus.style.left = Math.random() * 500 + 'px';
    let x, y;
    x = y = (Math.random() * 45) + 30;
    virus.style.setProperty('--x', `${x}px`);
    virus.style.setProperty('--y', `${y}px`);
    canva.appendChild(virus)

}