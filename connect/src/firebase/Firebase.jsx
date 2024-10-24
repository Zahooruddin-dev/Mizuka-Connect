// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBXLhTdRtJ61GD7g95rM5x7ouruXFXW63A',
	authDomain: 'mizuka-connect.firebaseapp.com',
	projectId: 'mizuka-connect',
	storageBucket: 'mizuka-connect.appspot.com',
	messagingSenderId: '149346108359',
	appId: '1:149346108359:web:277ee18105937871dacfe2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);