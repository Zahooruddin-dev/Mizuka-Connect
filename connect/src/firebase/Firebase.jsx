// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

