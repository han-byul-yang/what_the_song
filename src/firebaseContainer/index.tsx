import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyChfwAHlGNZApymXBGtkKiMfHb2agktpqw',
  authDomain: 'what-the-song-ff3a5.firebaseapp.com',
  projectId: 'what-the-song-ff3a5',
  storageBucket: 'what-the-song-ff3a5.appspot.com',
  messagingSenderId: '445134981134',
  appId: '1:445134981134:web:6014517ef98f033c35945f',
  measurementId: 'G-K9HV6S3F4E',
}

export const firebaseApp = initializeApp(firebaseConfig)
