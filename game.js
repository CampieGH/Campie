import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your Firebase project configuration
import firebaseConfig from './firebase-config.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Your game logic goes here
// For example, you can start by setting up your canvas and game loop

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Example: Draw a rectangle on the canvas
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);
//Finish
