import { atom } from 'recoil'

export const userInfoAtom = atom({
  key: 'userInfo',
  default: {
    userId: '',
    userNickname: '',
  },
})

export const selectInfoAtom = atom({
  key: 'selectInfo',
  default: {
    genre: '',
    year: '',
  },
})
