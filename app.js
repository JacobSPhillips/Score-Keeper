const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const p1Btn = document.querySelector('#p1Btn')
const p2Btn = document.querySelector('#p2Btn')
const resetBtn = document.querySelector('#resetBtn')
const winningScoreSelect = document.querySelector('#scoreSelect')

let p1Score = 0;
let p2Score = 0;
let winningScore = 1;
let isGameOver = false;

p1Btn.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p2Btn.disabled = true;
            p1Btn.disabled = true;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
        }
        p1Display.textContent = p1Score;
    }
})
p2Btn.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Btn.disabled = true;
            p1Btn.disabled = true;
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
        }
        p2Display.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset() {
    p2Btn.disabled = false;
    p1Btn.disabled = false;
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('winner', 'loser')
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
}