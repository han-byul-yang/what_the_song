import { firebaseApp } from 'firebaseContainer'
import { getFirestore } from 'firebase/firestore'

export const firebaseDB = getFirestore(firebaseApp)
