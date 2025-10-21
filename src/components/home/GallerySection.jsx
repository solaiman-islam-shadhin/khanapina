import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'

export const GallerySection = () => {
  const [loadedImages, setLoadedImages] = useState({})

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }))
  }
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-bold text-primary font-mina mb-4"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            রেস্তোরাঁর পরিবেশ
          </motion.h2>
          <motion.p 
            className="text-xl text-base-content font-play"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Experience the warm and inviting atmosphere of our restaurant
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=400&fit=crop",
              title: "Dining Area"
            },
            {
              src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=400&fit=crop",
              title: "Open Kitchen"
            },
            {
              src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=400&fit=crop",
              title: "Private Dining"
            },
            {
              src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=400&fit=crop",
              title: "Outdoor Seating"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {!loadedImages[index] && (
                <div className="skeleton w-full h-64 absolute inset-0 z-10"></div>
              )}
              <motion.img 
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover"
                onLoad={() => handleImageLoad(index)}
                style={{ opacity: loadedImages[index] ? 1 : 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute bottom-4 left-4 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-semibold">{item.title}</h3>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button 
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/gallery" className="font-play">View Full Gallery</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}