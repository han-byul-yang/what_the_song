import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuthService } from 'firebaseContainer/firebaseAuth'

import { userIdAtom } from 'store/atom'
import Auth from './Auth'
import Home from './Home'
import Loading from 'components/Loading'
import Layout from 'components/Layout'
import SoloGame from './SoloGame'
import MultiGame from './RoomGame'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [init, setInit] = useState(true)
  const setUserId = useSetRecoilState(userIdAtom)

  useEffect(() => {
    onAuthStateChanged(firebaseAuthService, (user) => {
      setInit(true)
      if (user) {
        setIsLogin(true)
        setUserId(user.uid)
        console.log(user)
      } else {
        setIsLogin(false)
      }
      setInit(false)
    })
  }, [setUserId])

  return (
    <Routes>
      {init ? (
        <Route path='/' element={<Loading />} />
      ) : (
        <Route element={<Layout />}>
          {isLogin ? <Route path='/' element={<Home />} /> : <Route path='/' element={<Auth />} />}
        </Route>
      )}
      <Route path='soloGame' element={<SoloGame />} />
      <Route path='roomGame' element={<MultiGame />} />
    </Routes>
  )
}

export default App
