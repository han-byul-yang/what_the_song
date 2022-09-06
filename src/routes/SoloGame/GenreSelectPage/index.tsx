import SelectButton from 'components/SelectPage/SelectButton'

const genreInitialType = ['BALLAD', 'KPOP', 'HIPOP', 'POPSONG']

const GenreSelectPage = () => {
  return genreInitialType.map((genre, i) => {
    const genreKey = `genre-${i}`
    return <SelectButton key={genreKey} buttonName={genre} type='genre' />
  })
}

export default GenreSelectPage
