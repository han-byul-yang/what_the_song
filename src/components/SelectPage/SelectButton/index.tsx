import { MouseEventHandler } from 'react'
import { useSetRecoilState } from 'recoil'

import { selectInfoAtom } from 'store/atom'

interface ISelectButtonProps {
  buttonName: string
  type: string
}

const SelectButton = ({ buttonName, type }: ISelectButtonProps) => {
  const setSelectedName = useSetRecoilState(selectInfoAtom)

  const handleSelectButtonClick = () => {
    setSelectedName((prevSelect) => {
      return { ...prevSelect, [type]: buttonName }
    })
  }

  return (
    <button type='button' onClick={handleSelectButtonClick}>
      {buttonName}
    </button>
  )
}

export default SelectButton
