let score = 0;
const prizes = [
    { points: 10, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁от CAIF COIN ' },
    { points: 20, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁от CAIF COIN' },
    { points: 30, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 40, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 50, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 60, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 70, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 80, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 90, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 100, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 110, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 120, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 130, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 140, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 150, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 160, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 170, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 180, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 190, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 200, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 210, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 220, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 230, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 240, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points  250, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 260, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 270, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 280, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 290, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 300, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 310, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 320, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 330, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 340, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 350, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 360, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 370, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 380, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 390, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 400, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 410, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 420, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 430, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 440, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 450, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 460, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 470, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 480, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 490, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 500, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 510, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 520, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 530, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 540, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 550, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 560, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 570, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 580, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 590, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 600, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 610, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 620, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 630, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 640, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 650, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 660, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 670, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 680, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 690, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 700, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 710, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 720, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 730, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 740, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 750, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 760, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 770, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 780, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 790, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 800, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 810, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 820, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 830, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 840, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 850, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 860, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 870, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 880, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 890, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 900, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 910, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 920, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 930, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 940, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 950, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 960, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 970, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 980, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 990, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' },
    { points: 1100, reward: 'ВЫ зарегистрированы в МЕГА РОЗЫГРЫШ🎁 от CAIF COIN' }
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
            document.getElementById('prizeMessage').textContent = `🎆ПОЗДРАВЛЯЕМ🎆! Ваш приз🎁 ${prize.reward}. Ваш промокод🏷: ${promoCode} ❗️СКОПИРУЙТЕ ЭТО СООБЩЕНИЯ И ОТПРАВЬТЕ ОПЕРАТОРУ KETT ДЛЯ АКТИВАЦИИ ВАШЕГО ПРИЗА❗️`;
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
