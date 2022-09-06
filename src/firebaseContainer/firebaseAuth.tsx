import { firebaseApp } from 'firebaseContainer'
import { getAuth } from 'firebase/auth'

export const firebaseAuthService = getAuth(firebaseApp)
