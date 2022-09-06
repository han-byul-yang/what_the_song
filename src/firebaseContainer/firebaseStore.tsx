import { firebaseApp } from 'firebaseContainer'
import { getFirestore } from 'firebase/firestore'

export const firebaseStoreService = getFirestore(firebaseApp)
