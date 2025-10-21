import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import moment from 'moment'
import AuthContext from '../../context/AuthContext'
import { toast, ToastContainer } from 'react-toastify'
import { FullScreenLoader } from '../ui/LoadingSpinner'

export const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = () => {
    axios.get('https://restaurant-management-server-side-five.vercel.app/reviews')
      .then((res) => {
        setReviews(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching reviews:', err)
        setLoading(false)
      })
  }

  const handleSubmitReview = (e) => {
    e.preventDefault()
    setSubmitting(true)
    
    const form = e.target
    const formData = new FormData(form)
    const reviewData = Object.fromEntries(formData.entries())
    
    const newReview = {
      ...reviewData,
      userName: reviewData.userName || 'Anonymous',
      userEmail: reviewData.userEmail || null,
      userPhoto: reviewData.userPhoto || null,
      reviewDate: new Date().toISOString(),
      rating: parseInt(reviewData.rating)
    }

    axios.post('https://restaurant-management-server-side-five.vercel.app/userreview', newReview)
      .then(() => {
        toast.success('Review added successfully!')
        setShowModal(false)
        form.reset()
        fetchReviews() // Refresh reviews
      })
      .catch((err) => {
        toast.error('Error adding review: ' + err.message)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  if (loading) {
    return <FullScreenLoader text="Loading reviews..." />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-8 px-4">
      <ToastContainer />
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-play mb-4">Customer Reviews</h1>
          <p className="text-base-content opacity-70 text-lg max-w-2xl mx-auto">
            See what our customers say about their dining experience at খানাপিনা
          </p>
        </motion.div>

        {/* Add Review Button */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary btn-lg font-play shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Your Review
          </button>
        </motion.div>

        {/* Reviews Grid */}
        {reviews.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-play text-base-content mb-4">No reviews yet</h3>
            <p className="text-base-content opacity-70">Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review._id}
                className="card bg-base-200 shadow-xl hover:border-1 hover:border-primary hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                
              >
                <div className="card-body">
                  <motion.div 
                    className="flex items-center mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
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
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 + star * 0.05 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  <motion.p 
                    className="text-base-content italic mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    "{review.reviewText}"
                  </motion.p>
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
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
        )}
      </div>

      {/* Add Review Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-4xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-3xl font-play text-primary">Add Your Review</h3>
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleSubmitReview} className="space-y-6">
              {/* Personal Information Section */}
              <div className="p-6 rounded-lg border border-primary">
                <h4 className="font-semibold text-xl font-play mb-4 text-primary">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control w-full">
                    <label className="label mb-2">
                      <span className="label-text font-play text-base font-medium">Your Name *</span>
                    </label>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Enter your name"
                      className="input input-bordered focus:border-none w-full focus:input-primary"
                      defaultValue={user?.displayName || user?.name || ''}
                      required
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label mb-2">
                      <span className="label-text font-play text-base font-medium">Your Email</span>
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      placeholder="Enter your email (optional)"
                      className="input input-bordered focus:border-none w-full focus:input-primary"
                      defaultValue={user?.email || ''}
                    />
                  </div>
                </div>

                <div className="form-control w-full mt-4">
                  <label className="label mb-2">
                    <span className="label-text font-play text-base font-medium">Profile Photo URL</span>
                  </label>
                  <input
                    type="url"
                    name="userPhoto"
                    placeholder="Enter photo URL (optional)"
                    className="input input-bordered focus:border-none w-full focus:input-primary"
                    defaultValue={user?.photoURL || ''}
                  />
                </div>
              </div>

              {/* Review Section */}
              <div className="p-6 rounded-lg border border-primary">
                <h4 className="font-semibold text-xl font-play mb-4 text-primary">Your Review</h4>
                
                <div className="form-control w-full mb-4">
                  <label className="label mb-2">
                    <span className="label-text font-play text-base font-medium">Rating *</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="rating rating-lg">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <input
                          key={star}
                          type="radio"
                          name="rating"
                          value={star}
                          className="mask mask-star-2 bg-orange-400"
                          required
                        />
                      ))}
                    </div>
                    <span className="text-sm text-base-content opacity-70 ml-2">Click to rate</span>
                  </div>
                </div>

                <div className="form-control w-full">
                  <label className="label mb-2">
                    <span className="label-text font-play text-base font-medium">Your Review *</span>
                  </label>
                  <textarea
                    name="reviewText"
                    placeholder="Share your experience with us... Tell us about the food, service, ambiance, and overall experience."
                    className="textarea textarea-bordered focus:border-none w-full h-32 focus:textarea-primary resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  className="btn btn-outline btn-lg font-play px-8"
                  onClick={() => setShowModal(false)}
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg font-play px-8"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Submitting...
                    </>
                  ) : (
                    'Submit Review'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}