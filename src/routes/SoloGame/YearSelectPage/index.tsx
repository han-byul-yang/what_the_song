import { useSetRecoilState } from 'recoil'

import { selectInfoAtom } from 'store/atom'
import SelectButton from 'components/SelectButton'

const yearInitialType = ['1980', '1990', '2000', '2010', '2020']

const YearSelectPage = () => {
  const setSelectedInfo = useSetRecoilState(selectInfoAtom)

  const genreButtonList = yearInitialType.map((year, i) => {
    const yearKey = `year-${i}`

    const handleYearButtonClick = () => {
      setSelectedInfo((prevSelect) => {
        return { ...prevSelect, year }
      })
    }
    return <SelectButton key={yearKey} buttonName={year} handleClick={handleYearButtonClick} />
  })

  return (
    <>
      <div>원하시는 연도를 선택해주세요</div>
      {genreButtonList}
    </>
  )
}

export default YearSelectPage
