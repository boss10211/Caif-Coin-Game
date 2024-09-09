let score = 0;
const rewardMessage = 'Вы зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN';

let achievements = JSON.parse(localStorage.getItem('achievements')) || [];

// Загрузка баллов из localStorage
if (localStorage.getItem('totalScore')) {
    score = parseInt(localStorage.getItem('totalScore'));
    document.getElementById('score').textContent = score;
}

document.getElementById('coin').addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = score;
    localStorage.setItem('totalScore', score);
    checkForPrize();
});

document.getElementById('winCoinsButton').addEventListener('click', () => {
    window.location.href = 'caif coin game.html'; // Путь к вашей другой игре
});

document.getElementById('achievementsButton').addEventListener('click', () => {
    displayAchievements();
    document.getElementById('achievementsModal').style.display = 'block';
});

document.getElementById('closeModalButton').addEventListener('click', () => {
    document.getElementById('prizeModal').style.display = 'none';
});

document.getElementById('closeAchievementsButton').addEventListener('click', () => {
    document.getElementById('achievementsModal').style.display = 'none';
});

document.getElementById('resetButton').addEventListener('click', () => {
    score = 0;
    achievements = [];
    localStorage.removeItem('totalScore');
    localStorage.removeItem('achievements');
    document.getElementById('score').textContent = score;
    document.getElementById('gameOverModal').style.display = 'none';
});

function checkForPrize() {
    if (score % 100000 === 0 && score !== 0) {
        let promoCode = generatePromoCode();
        document.getElementById('prizeMessage').textContent = `Поздравляем! ${rewardMessage}. Ваш промокод: ${promoCode}`;
        document.getElementById('prizeModal').style.display = 'block';
        achievements = [{ reward: rewardMessage, promoCode: promoCode }]; // Сохраняем только последнее достижение
        localStorage.setItem('achievements', JSON.stringify(achievements));
        sendTelegramMessage(rewardMessage, promoCode);
    }
}

function generatePromoCode() {
    return 'PROMO' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function sendTelegramMessage(reward, promoCode) {
    const adminChatId = '5920944588';
    const botToken = '7234287467:AAGaT2z1qI-rdIf2RzTZmJRrqnqK5z4pJb4';
    const message = `Игрок выиграл ${reward}. Промокод: ${promoCode}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${adminChatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.ok) {
                console.log('Message sent successfully');
            } else {
                console.error('Error sending message:', data);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = '';
    if (achievements.length > 0) {
        const achievement = achievements[0];
        const listItem = document.createElement('li');
        listItem.textContent = ` ${achievement.reward}. Промокод: ${achievement.promoCode}`;
        achievementsList.appendChild(listItem);
    }
}

// Отображение достижений при загрузке страницы
displayAchievements();
