import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Link, } from 'react-router'


export const FeaturedDishes = () => {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    axios.get('https://restaurant-management-server-side-five.vercel.app/foods')
      .then((res) => {

        const sortedFoods = res.data.sort((a, b) => (b.purchse || 0) - (a.purchse || 0))
        setFoods(sortedFoods.slice(0, 6)) // Show only top 6 most purchased items
      })
      .catch((err) => {
        alert(err.message)
      })
  }, [])

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

    

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {foods.slice(0, 6).map((food, index) => (
            <motion.div
              key={food._id}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}

            >
              <motion.figure
                className="px-4 pt-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={food.foodImage}
                  alt={food.foodName}
                  className="rounded-xl h-64 w-full object-cover"
                  referrerPolicy='no-referrer'
                />
              </motion.figure>
              <div className="card-body">
                <motion.h3
                  className="card-title text-primary font-play"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {food.foodName}
                </motion.h3>
                <motion.p
                  className="text-base-content"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {food.description}
                </motion.p>
                <motion.div
                  className="card-actions justify-between items-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl font-bold text-primary">{food.price}৳</span>
                  <motion.button

                    className="btn btn-primary btn-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}

                  >
                    <Link to={`/food/${food._id}`}>View Details</Link>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom All Foods Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link to="/all-foods">
            <motion.button
              className="btn btn-primary btn-lg font-play px-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Foods →
            </motion.button>
          </Link>
        </motion.div>


      </div>
    </section>
  )
}