import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import moment from 'moment'

export const ReviewsSection = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios.get('https://restaurant-management-server-side-five.vercel.app/reviews')
      .then((res) => {
        // Sort by rating (highest first) and take top 3
        const topReviews = res.data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3)
        setReviews(topReviews)
      })
      .catch((err) => {
        console.error('Error fetching reviews:', err)
        // Fallback to static data if API fails
        setReviews([
          {
            userName: "Rashida Ahmed",
            userPhoto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
            reviewText: "The biryani here is absolutely incredible! Reminds me of my grandmother's cooking. The flavors are authentic and the service is excellent.",
            rating: 5,
            reviewDate: new Date().toISOString()
          },
          {
            userName: "Karim Hassan",
            userPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
            reviewText: "Amazing experience! The hilsa curry was perfectly cooked and the ambiance is so welcoming. Will definitely come back with family.",
            rating: 5,
            reviewDate: new Date().toISOString()
          },
          {
            userName: "Fatima Khan",
            userPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
            reviewText: "Best Bengali restaurant in the city! The mishti doi is heavenly and the staff is so friendly. Highly recommended for authentic taste.",
            rating: 5,
            reviewDate: new Date().toISOString()
          }
        ])
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
          transition={{ duration: 0.2 }}
        >
          <motion.h2 
            className="text-5xl font-bold text-primary font-mina mb-4"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            গ্রাহকদের মতামত
          </motion.h2>
          <motion.p 
            className="text-xl text-base-content font-play"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            What our valued customers say about us
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={review._id || index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl hover:border-primary hover:border-1 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              
            >
              <div className="card-body">
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <div className="rating rating-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.input 
                        key={star}
                        type="radio" 
                        className="mask mask-star-2 bg-orange-400" 
                        checked={star <= review.rating}
                        readOnly
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.2 + star * 0.1 }}
                      />
                    ))}
                  </div>
                </motion.div>
                <motion.p 
                  className="text-base-content italic mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  "{review.reviewText}"
                </motion.p>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  <img src={review.userPhoto || "https://via.placeholder.com/48"} alt={review.userName} className="w-12 h-12 rounded-full mr-3" />
                  <div>
                    <h4 className="font-semibold text-primary">{review.userName}</h4>
                    <p className="text-sm text-base-content opacity-70">{moment(review.reviewDate).format('MMM DD, YYYY')}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}