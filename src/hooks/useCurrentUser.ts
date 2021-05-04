import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { firebase, auth } from '../firebase/client'

export const useCurrentUser = (): {
  isLoading: boolean
  currentUser: firebase.User | undefined
  setCurrentUser: Dispatch<SetStateAction<firebase.User | undefined>>
} => {
  const [currentUser, setCurrentUser] = useState<firebase.User | undefined>(undefined)
  const isLoading = currentUser === undefined;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(undefined)
      }
    })
  }, [])

  return { isLoading, currentUser, setCurrentUser }
}