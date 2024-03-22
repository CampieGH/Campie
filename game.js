// Import Firebase SDK
import firebase from 'firebase/app';
import 'firebase/firestore'; // Import Firestore module

// Your Firebase project configuration
import firebaseConfig from './firebase-config.json';

// Initialize Firebase with your Firebase project configuration
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database service
const db = firebase.firestore();

// Example: Write data to Firestore
function writeToFirestore() {
  const data = {
    playerName: "Player1",
    score: 1000
  };

  // Add a new document with a generated ID
  db.collection("players").add(data)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

// Example: Read data from Firestore
function readFromFirestore() {
  db.collection("players").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

// Example usage of Firebase Firestore in your game
// You can call these functions based on your game logic

// writeToFirestore(); // Example: Write data to Firestore
// readFromFirestore(); // Example: Read data from Firestore

// Get references to HTML elements
const canvas = document.getElementById('game-canvas');
const virtualControls = document.getElementById('virtual-controls');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to match the viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define player object
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 20,
    height: 20,
    speed: 5,
};

// Function to update game state
function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player
    ctx.fillStyle = '#fff';
    ctx.fillRect(player.x - player.width / 2, player.y - player.height / 2, player.width, player.height);

    // Update player position based on input
    // TODO: Implement player movement logic here

    // Update camera position to follow the player
    const cameraX = player.x - canvas.width / 2;
    const cameraY = player.y - canvas.height / 2;

    // Translate canvas to simulate camera movement
    ctx.translate(-cameraX, -cameraY);

    // Additional game logic goes here

    // Reset canvas translation
    ctx.translate(cameraX, cameraY);
}

// Function to handle virtual button clicks
function handleVirtualButtonClick(direction) {
    // TODO: Implement player movement based on virtual button clicks
}

// Event listener for virtual button clicks
virtualControls.addEventListener('click', (event) => {
    if (event.target.id === 'up-btn') {
        handleVirtualButtonClick('up');
    } else if (event.target.id === 'left-btn') {
        handleVirtualButtonClick('left');
    } else if (event.target.id === 'down-btn') {
        handleVirtualButtonClick('down');
    } else if (event.target.id === 'right-btn') {
        handleVirtualButtonClick('right');
    }
});

// Function to handle keyboard input for player movement
function handleKeyboardInput(event) {
    // TODO: Implement player movement based on keyboard input
}

// Event listener for keyboard input
window.addEventListener('keydown', handleKeyboardInput);

// Function to handle mouse input for player movement
function handleMouseInput(event) {
    // TODO: Implement player movement based on mouse input
}

// Event listener for mouse input
canvas.addEventListener('mousemove', handleMouseInput
