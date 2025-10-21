import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import AuthContext from '../../context/AuthContext'
import { FullScreenLoader } from '../ui/LoadingSpinner'

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <FullScreenLoader text="Checking authentication..." />
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}