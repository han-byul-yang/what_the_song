import SelectButton from 'components/SelectPage/SelectButton'

const yearInitialType = ['1980', '1990', '2000', '2010', '2020']

const YearSelectPage = () => {
  return yearInitialType.map((year, i) => {
    const yearKey = `year-${i}`
    return <SelectButton key={yearKey} buttonName={year} type='year' />
  })
}

export default YearSelectPage
