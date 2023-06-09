// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyDUoOvEHAy2u93FJdEZOIMvNc7FVj0zzyI',
	authDomain: 'airland-9c55f.firebaseapp.com',
	projectId: 'airland-9c55f',
	storageBucket: 'airland-9c55f.appspot.com',
	messagingSenderId: '950391872961',
	appId: '1:950391872961:web:40c3157f0aba3381b26340',
	measurementId: 'G-PKRM4MYBT2'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const firebaseDb = getFirestore(FirebaseApp)
export const firebaseStorage = getStorage(FirebaseApp)
