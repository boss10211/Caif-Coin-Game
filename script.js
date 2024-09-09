let score = 0;
const prizes = [
    { points: 1800, reward: 'Cкидка 5% ' },
    { points: 1810, reward: 'Cкидка 10%' },
    { points: 1820, reward: 'Cкидка 20%' },
    { points: 1830, reward: 'Cкидка 25%' },
    { points: 1840, reward: 'Cкидка 50%' },
    { points: 1850, reward: '0.5 грамм' },
    { points: 1860, reward: '0.7 грамм' },
    { points: 1870, reward: '1 грамм' }
];

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

function checkForPrize() {
    for (let prize of prizes) {
        if (score === prize.points) {
            let promoCode = generatePromoCode();
            document.getElementById('prizeMessage').textContent = `🎆ПОЗДРАВЛЯЕМ🎆! ${prize.reward}. Ваш промокод🏷 для участия: ${promoCode} ❗️СКОПИРУЙТЕ ЭТО СООБЩЕНИЯ И ОТПРАВЬТЕ ОПЕРАТОРУ KETT ДЛЯ ПОДТВЕРЖДЕНИЯ❗️`;
            document.getElementById('prizeModal').style.display = 'block';
            achievements.push({ reward: prize.reward, promoCode: promoCode });
            localStorage.setItem('achievements', JSON.stringify(achievements));
            sendTelegramMessage(prize.reward, promoCode);
            break;
        }
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
    achievements.forEach(achievement => {
        const listItem = document.createElement('li');
        listItem.textContent = `Вы выиграли ${achievement.reward}. Промокод: ${achievement.promoCode}`;
        achievementsList.appendChild(listItem);
    });
}

// Отображение достижений при загрузке страницы
displayAchievements();
