import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { motion } from 'framer-motion'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'
import { FullScreenLoader } from '../ui/LoadingSpinner'

export const Food = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [food, setFood] = useState(null)
  const [loading, setLoading] = useState(true)
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`https://restaurant-management-server-side-five.vercel.app/foods/${id}`)
      .then((res) => {
        setFood(res.data)
        setLoading(false)
      })
      .catch((err) => {
        alert(err.message)
        setLoading(false)
      })
  }, [id])

  const isOwnFood = user && food && user.email === food.email



  if (loading) {
    return <FullScreenLoader text="Loading food details..." />
  }

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-error mb-4">Food Not Found</h2>
          <button onClick={() => navigate('/')} className="btn btn-primary">Go Home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-300 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto bg-base-100 rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <motion.div
              className="relative h-96 lg:h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="badge badge-primary badge-lg font-play">{food.foodCategory}</span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="badge badge-secondary badge-lg font-play">{food.foodOrigin}</span>
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div
              className="p-8 lg:p-12 flex flex-col justify-between"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <motion.h1
                  className="text-4xl lg:text-5xl font-bold text-primary font-mina mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {food.foodName}
                </motion.h1>

                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary">
                    {food.price}৳
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-base-content opacity-70">
                      <span className="font-semibold">Available:</span> {food.quantity} items
                    </div>
                    <div className="text-base-content opacity-70">
                      <span className="font-semibold">Purchased:</span> {food.purchse || 0} times
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-xl font-semibold text-base-content mb-3 font-play">Description</h3>
                  <p className="text-base-content leading-relaxed text-justify">
                    {food.description}
                  </p>
                </motion.div>

                <motion.div
                  className="border-t pt-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h3 className="text-lg font-semibold text-base-content mb-3 font-play">Added by</h3>
                  <div className="flex items-center gap-3">
                    <div className="avatar placeholder">
                      <div className="bg-primary text-primary-content rounded-full w-12">
                        <img referrerPolicy='no-referrer' src={food.image} alt={food.name} />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-base-content">{food.name}</p>
                      <p className="text-sm text-base-content opacity-70">{food.email}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >

                {isOwnFood ? (
                  <motion.button
                    className="btn btn-disabled btn-lg flex-1 font-play text-error text-lg"
                    disabled
                  >
                    Cannot Purchase Own Food
                  </motion.button>
                ) : (
                  <Link to={`/purchase/${food._id}`} state={{ food }}>
                    <motion.button
                      className="btn btn-primary btn-lg flex-1 font-play text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={parseInt(food.quantity) === 0}
                    >
                      {parseInt(food.quantity) === 0 ? 'Out of Stock' : 'Purchase Now'}
                    </motion.button>
                  </Link>
                )}
                <motion.button
                  onClick={() => navigate(-1)}
                  className="btn btn-outline btn-lg font-play"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
