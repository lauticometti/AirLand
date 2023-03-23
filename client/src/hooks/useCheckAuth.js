import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase'
import { Logout, signIn } from '../redux'

export const useCheckAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(Logout())
      const { uid, displayName, email } = user
      dispatch(signIn({ uid, displayName, email }))
    })
  }, [])

}