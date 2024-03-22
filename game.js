import firebase from 'firebase/app';
import 'firebase/firestore';

// Read Firebase configuration from firebase-config.json
import firebaseConfig from './firebase-config.json';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database service
const db = firebase.firestore();

// Example usage of Firebase Firestore in your game
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

// Your game logic goes here
// You can start implementing your game mechanics
