import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { query, collection, getDocs } from 'firebase/firestore'

import { userInfoAtom } from 'store/atom'
import { firebaseStoreService } from 'firebaseContainer/firebaseStore'
import SelectButton from 'components/SelectButton'

const Home = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom)
  const navigate = useNavigate()

  const handleSoloGameClick = () => {
    navigate('/soloGame/selectGenre')
  }

  const handleRoomGameClick = () => {
    navigate('/roomGame')
  }

  useEffect(() => {
    const getUserNickname = async () => {
      const collectionQuery = query(collection(firebaseStoreService, 'userInfo'))
      const userInfoDocs = await getDocs(collectionQuery)
      userInfoDocs.forEach((docs) => {
        if (docs.data().userId === userInfo.userId)
          setUserInfo((prevInfo) => {
            return { ...prevInfo, userNickname: docs.data().nickname }
          })
      })
    }
    getUserNickname()
  }, [setUserInfo, userInfo.userId])

  return (
    <>
      <div>{userInfo.userNickname}님이 원하시는 플레이방식을 선택해주세요</div>
      <div>
        <SelectButton buttonName='개인' handleClick={handleSoloGameClick} />
        <SelectButton buttonName='방 만들기' handleClick={handleRoomGameClick} />
      </div>
    </>
  )
}

export default Home

// loading 처리
// 여기 db도 마찬가지로 객체화
