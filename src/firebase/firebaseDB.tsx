import { firebaseApp } from 'firebase'
import { getFirestore } from 'firebase/firestore'

export const firebaseDB = getFirestore(firebaseApp)
