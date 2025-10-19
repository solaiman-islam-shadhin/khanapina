import React from 'react'
import { motion } from 'framer-motion'
import { ImSpoonKnife } from "react-icons/im";
export const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} border-4 border-primary/20 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-t-primary rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-primary font-mina text-lg p-2"><ImSpoonKnife size={30} /></span>
        </motion.div>
      </div>

      <motion.p
        className="text-base-content font-play"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {text}
      </motion.p>

      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
      </div>
    </div>
  )
}

export const FullScreenLoader = ({ text = 'Loading খানাপিনা...' }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-base-100 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LoadingSpinner size="xl" text={text} />
      </motion.div>
    </motion.div>
  )
}