import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import AuthContext from '../../context/AuthContext'
import { FullScreenLoader } from '../ui/LoadingSpinner'

export const PrivateRoute = ({ children }) => {
  const { user, loading, initialized } = useContext(AuthContext)
  const location = useLocation()

  if (!initialized || loading) {
    return null
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}