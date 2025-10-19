import React from 'react'
import { motion } from 'framer-motion'

export const FeaturedDishes = () => {
  return (
    <section className="py-20 bg-base-100">
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
            আমাদের বিশেষ খাবার
          </motion.h2>
          <motion.p 
            className="text-xl text-base-content font-play"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Discover our signature dishes crafted with love and tradition
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
              title: "Kacchi Biryani",
              description: "Aromatic basmati rice layered with tender mutton, cooked to perfection with traditional spices.",
              price: "৳450"
            },
            {
              src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
              title: "Hilsa Curry",
              description: "Fresh hilsa fish cooked in rich mustard gravy, a Bengali delicacy that melts in your mouth.",
              price: "৳380"
            },
            {
              src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
              title: "Mishti Doi",
              description: "Traditional sweet yogurt dessert, perfectly creamy and infused with cardamom essence.",
              price: "৳120"
            }
          ].map((dish, index) => (
            <motion.div 
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.figure 
                className="px-4 pt-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={dish.src}
                  alt={dish.title}
                  className="rounded-xl h-64 w-full object-cover"
                />
              </motion.figure>
              <div className="card-body">
                <motion.h3 
                  className="card-title text-primary font-play"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  {dish.title}
                </motion.h3>
                <motion.p 
                  className="text-base-content"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                >
                  {dish.description}
                </motion.p>
                <motion.div 
                  className="card-actions justify-between items-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <span className="text-2xl font-bold text-accent">{dish.price}</span>
                  <motion.button 
                    className="btn btn-primary btn-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}