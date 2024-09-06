// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_XUnLmQ2TfZgPjce_cUafQSUabYZjEM8",
  authDomain: "tap-tap-b3ae2.firebaseapp.com",
  databaseURL: "https://tap-tap-b3ae2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tap-tap-b3ae2",
  storageBucket: "tap-tap-b3ae2.appspot.com",
  messagingSenderId: "946870737286",
  appId: "1:946870737286:web:85688bf62a4b2de554b407",
  measurementId: "G-R4NFYR3EY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

document.addEventListener('DOMContentLoaded', () => {
    const authContainer = document.getElementById('authContainer');
    const gameContainer = document.getElementById('gameContainer');
    const achievementsContainer = document.getElementById('achievementsContainer');
    const authForm = document.getElementById('authForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const scoreElement = document.getElementById('score');
    const winCoinsButton = document.getElementById('winCoinsButton');
    const achievementsButton = document.getElementById('achievementsButton');
    const backButton = document.getElementById('backButton');
    const playersTableBody = document.querySelector('#playersTable tbody');
    let score = 0;
    let userId = '';

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                userId = userCredential.user.uid;
                loadPlayerData(userId);
                authContainer.style.display = 'none';
                gameContainer.style.display = 'block';
            })
            .catch((error) => {
                if (error.code === 'auth/user-not-found') {
                    auth.createUserWithEmailAndPassword(email, password)
                        .then((userCredential) => {
                            userId = userCredential.user.uid;
                            savePlayerData(userId, 0);
                            authContainer.style.display = 'none';
                            gameContainer.style.display = 'block';
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                } else {
                    console.error(error);
                }
            });
    });

    winCoinsButton.addEventListener('click', () => {
        score++;
        scoreElement.textContent = score;
        savePlayerData(userId, score);
    });

    achievementsButton.addEventListener('click', () => {
        loadTopPlayers();
        gameContainer.style.display = 'none';
        achievementsContainer.style.display = 'block';
    });

    backButton.addEventListener('click', () => {
        achievementsContainer.style.display = 'none';
        gameContainer.style.display = 'block';
    });

    function loadPlayerData(userId) {
        database.ref('players/' + userId).once('value')
            .then((snapshot) => {
                const data = snapshot.val();
                if (data) {
                    score = data.score;
                    scoreElement.textContent = score;
                }
            });
    }

    function savePlayerData(userId, score) {
        database.ref('players/' + userId).set({ score });
    }

    function loadTopPlayers() {
        database.ref('players').orderByChild('score').limitToLast(10).once('value')
            .then((snapshot) => {
                playersTableBody.innerHTML = '';
                const players = [];
                snapshot.forEach((childSnapshot) => {
                    players.push({
                        username: childSnapshot.key,
                        score: childSnapshot.val().score
                    });
                });
                players.reverse(); // Чтобы отобразить топ-10 в порядке убывания
                players.forEach((player) => {
                    const row = document.createElement('tr');
                    const usernameCell =
Только что
