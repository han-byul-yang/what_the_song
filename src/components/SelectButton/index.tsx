import { MouseEventHandler } from 'react'

interface ISelectButtonProps {
  buttonName: string
  handleClick: MouseEventHandler<HTMLButtonElement>
}

const SelectButton = ({ buttonName, handleClick }: ISelectButtonProps) => {
  return (
    <button type='button' onClick={handleClick}>
      {buttonName}
    </button>
  )
}

export default SelectButton
