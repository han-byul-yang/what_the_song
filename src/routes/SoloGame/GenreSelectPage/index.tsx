import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

import { selectInfoAtom } from 'store/atom'
import SelectButton from 'components/SelectButton'

const genreInitialType = ['BALLAD', 'KPOP', 'HIPOP', 'POPSONG']

const GenreSelectPage = () => {
  const setSelectedInfo = useSetRecoilState(selectInfoAtom)
  const navigate = useNavigate()

  const genreButtonList = genreInitialType.map((genre, i) => {
    const genreKey = `genre-${i}`

    const handleGenreButtonClick = () => {
      setSelectedInfo((prevSelect) => {
        return { ...prevSelect, genre }
      })
      navigate('/soloGame/selectYear')
    }
    return <SelectButton key={genreKey} buttonName={genre} handleClick={handleGenreButtonClick} />
  })

  return (
    <>
      <div>원하시는 장르를 선택해주세요</div>
      {genreButtonList}
    </>
  )
}

export default GenreSelectPage
