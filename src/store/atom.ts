import { atom } from 'recoil'

export const userIdAtom = atom({
  key: 'userId',
  default: '',
})

export const selectInfoAtom = atom({
  key: 'selectInfo',
  default: {
    genre: '',
    year: '',
  },
})
