import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-base-100 to-base-300">
      <motion.div
        className="text-center max-w-lg mx-auto p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated 404 */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold text-primary font-mina mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Error Text */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-base-content mb-4 font-mina"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          পৃষ্ঠা পাওয়া যায়নি
        </motion.h2>
        
        <motion.p
          className="text-lg text-base-content opacity-70 mb-8 font-play"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </motion.p>

        {/* Animated Food Icons */}
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {['🍕', '🍔', '🍜'].map((emoji, index) => (
            <motion.div
              key={index}
              className="text-4xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: index * 0.3 
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="space-y-4 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/">
            <motion.button
              className="btn btn-primary btn-lg w-full font-play"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </motion.button>
          </Link>
          
          <Link to="/all-foods">
            <motion.button
              className="btn btn-outline btn-lg w-full font-play mt-4" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Browse Foods
            </motion.button>
          </Link>
        </motion.div>

        {/* Back Link */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => window.history.back()}
            className="link link-primary font-play"
          >
            ← Go back to previous page
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}