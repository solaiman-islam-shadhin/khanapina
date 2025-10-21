import React, { createContext, useState, useEffect } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import auth from '../Firebase/Firebase.config'
import Swal from 'sweetalert2'
import { FullScreenLoader } from '../components/ui/LoadingSpinner'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [manualUser, setManualUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [initialized, setInitialized] = useState(false)
  const [minLoadingTime, setMinLoadingTime] = useState(false)
  const provider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true)
    provider.setCustomParameters({
      prompt: 'select_account'
    })
    return signInWithPopup(auth, provider)
      .then((result) => {
        setLoading(false)
        return result;
      }).catch((error) => {
        setLoading(false)
        console.error('Google login error:', error)
        throw error
      });
  }

  const Toast=()=>{
      const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Signed in successfully"
            });
  }
  const Toast2=()=>{
      const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Account Created successfully"
            });
  }
  const Toast3=()=>{
      const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Item Purchased successfully"
            });
  }

  const SignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const createuser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    // Minimum 2-second loading time
    const minTimer = setTimeout(() => {
      setMinLoadingTime(true)
    }, 2000)

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      
      // Only set initialized when both auth is ready and min time has passed
      if (minLoadingTime) {
        setInitialized(true)
      }
    })

    return () => {
      clearTimeout(minTimer)
      unsubscribe()
    }
  }, [])

  // Set initialized when min loading time passes and auth is ready
  useEffect(() => {
    if (minLoadingTime && !loading) {
      setInitialized(true)
    }
  }, [minLoadingTime, loading])

  // Don't render children until Firebase auth is initialized and min time has passed
  if (!initialized) {
    return <FullScreenLoader />
  }

  const authInfo = {
    user,
    loading,
    SignIn,
    createuser,
    logOut,
    setUser,
    googleLogin,
    Toast,
    Toast2,
    manualUser,
    setManualUser,
    initialized,
    Toast3
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext