import { FormEvent, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

import { firebaseAuthService } from 'firebaseContainer/firebaseAuth'
import { firebaseDB } from 'firebaseContainer/firebaseDB'
import { userIdAtom } from 'store/atom'

const Auth = () => {
  const [authData, setAuthData] = useState({ email: '', nickname: '', password: '' })
  const [newAccount, setNewAccount] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const userId = useRecoilValue(userIdAtom)

  const handleAuthChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    if (name === 'email')
      setAuthData((prevData) => {
        return { ...prevData, email: value }
      })
    if (name === 'password')
      setAuthData((prevData) => {
        return { ...prevData, password: value }
      })
    if (name === 'nickname')
      setAuthData((prevData) => {
        return { ...prevData, nickname: value }
      })
  }

  const handleAuthSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (newAccount) {
        await createUserWithEmailAndPassword(firebaseAuthService, authData.email, authData.password)
        addDoc(collection(firebaseDB, `${userId}`), {
          nickname: authData.nickname,
        })
      } else await signInWithEmailAndPassword(firebaseAuthService, authData.email, authData.password)
    } catch (error) {
      if (error instanceof Error) setErrorMessage(error.message)
    }
  }

  const handleFormChangeClick = () => {
    setNewAccount((prevState) => !prevState)
  }

  return (
    <>
      <form onSubmit={handleAuthSumbit}>
        <input
          type='email'
          name='email'
          placeholder='이메일을 입력해주세요'
          value={authData.email}
          onChange={handleAuthChange}
        />
        {newAccount && <input type='text' name='nickname' value={authData.nickname} onChange={handleAuthChange} />}
        <input
          type='password'
          name='password'
          placeholder='패스워드를 입력해주세요'
          value={authData.password}
          onChange={handleAuthChange}
        />
        <input type='submit' />
      </form>
      <button type='button' onClick={handleFormChangeClick}>
        {newAccount ? '계정이 없으신가요?' : '계정이 이미 있습니다'}
      </button>
    </>
  )
}

export default Auth

// addDoc DB 닉네임 저장, 텍스트 저장, 점수 저장 등 객체로 만들어쓸 수도 있음
// 이메일, 비번 오류 처리
