import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuthService } from 'firebaseContainer/firebaseAuth'

import { userInfoAtom } from 'store/atom'
import Auth from './Auth'
import Home from './Home'
import Loading from 'components/Loading'
import Layout from 'components/Layout'
import SoloGame from './SoloGame'
import MultiGame from './RoomGame'
import GenreSelectPage from './SoloGame/GenreSelectPage'
import YearSelectPage from './SoloGame/YearSelectPage'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [init, setInit] = useState(true)
  const setUserInfo = useSetRecoilState(userInfoAtom)

  useEffect(() => {
    onAuthStateChanged(firebaseAuthService, (user) => {
      setInit(true)
      if (user) {
        setIsLogin(true)
        setUserInfo((prevInfo) => {
          return { ...prevInfo, userId: user.uid }
        })
        console.log(user)
      } else {
        setIsLogin(false)
      }
      setInit(false)
    })
  }, [setUserInfo])

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
      <Route path='soloGame/selectGenre' element={<GenreSelectPage />} />
      <Route path='soloGame/selectYear' element={<YearSelectPage />} />
      <Route path='roomGame' element={<MultiGame />} />
    </Routes>
  )
}

export default App
