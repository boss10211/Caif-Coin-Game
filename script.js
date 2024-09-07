let score = 0;
const prizes = [
    { points: 1100, reward: '5% скидка' },
    { points: 1110, reward: '10% скидка' },
    { points: 1120, reward: '20% скидка' },
    { points: 1130, reward: '25% скидка' },
    { points: 1150, reward: '50% скидка' },
    { points: 1160, reward: '0.5 грамм' },
    { points: 1170, reward: '0.7 грамм' },
    { points: 1180, reward: '1 грамм' }
];

// Загрузка баллов из localStorage
if (localStorage.getItem('totalScore')) {
    score = parseInt(localStorage.getItem('totalScore'));
    document.getElementById('score').textContent = score;
    updatePrizes();
}

document.getElementById('coin').addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = score;
    localStorage.setItem('totalScore', score);
    updatePrizes();
});

document.getElementById('winCoinsButton').addEventListener('click', () => {
    window.location.href = 'caif coin game.html'; // Путь к вашей другой игре
});

function updatePrizes() {
    const prizeList = document.getElementById('prizeList');
    prizeList.innerHTML = ''; // Очистить список призов

    prizes.forEach(prize => {
        if (score >= prize.points) {
            const listItem = document.createElement('li');
            listItem.textContent = `${prize.points} очков - ${prize.reward}`;
            prizeList.appendChild(listItem);
        }
    });
}
