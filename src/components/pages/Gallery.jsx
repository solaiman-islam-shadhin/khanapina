import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export const Gallery = () => {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80', alt: 'Delicious Pizza' },
    { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80', alt: 'Pancakes with Berries' },
    { src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80', alt: 'Grilled Steak' },
    { src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80', alt: 'Colorful Salad' },
    { src: 'https://www.wasabiko.com/wp-content/uploads/2023/02/Wasabiko-Sushi-Poke-Manassas-Virginia-Web-Menu-Header-Platter.jpg', alt: 'Sushi Platter' },
    { src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80', alt: 'Burger and Fries' },
    { src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80', alt: 'Pasta Dish' },
    { src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80', alt: 'Tacos' },
    { src: 'https://glebekitchen.com/wp-content/uploads/2018/08/koreanramenfront.jpg', alt: 'Ramen Bowl' },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80', alt: 'Fresh Seafood' },
    { src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80', alt: 'Traditional Sweets' },
    { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80', alt: 'Gourmet Dish' }
  ]

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-8 px-4">
      <div className="container mx-auto">
        {/* Simple Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-play mb-4">Food Gallery</h1>
          <p className="text-base-content opacity-70 text-lg max-w-2xl mx-auto">
            Explore our delicious collection of mouth-watering dishes. Click on any image to view in full size.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              whileHover={{ y: -2 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-100">
            <div className="stat">
              <div className="stat-title font-play">Total Images</div>
              <div className="stat-value text-primary">{galleryImages.length}</div>
              <div className="stat-desc">High quality food photos</div>
            </div>
            <div className="stat">
              <div className="stat-title font-play">Categories</div>
              <div className="stat-value text-primary">8+</div>
              <div className="stat-desc">Different food types</div>
            </div>
            <div className="stat">
              <div className="stat-title font-play">Resolution</div>
              <div className="stat-value text-primary">HD</div>
              <div className="stat-desc">Crystal clear images</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={galleryImages}
      />
    </div>
  )
}