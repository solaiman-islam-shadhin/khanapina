import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Link } from 'react-router'
import { FullScreenLoader } from '../ui/LoadingSpinner'

export const AllFoods = () => {
  const [foods, setFoods] = useState([])
  const [filteredFoods, setFilteredFoods] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://restaurant-management-server-side-five.vercel.app/foods')
      .then((res) => {
        setFoods(res.data)
        setFilteredFoods(res.data) // Initialize filtered foods
      })
      .catch((err) => {
        alert(err.message)
        setLoading(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  // Search functionality
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    
    if (term === '') {
      setFilteredFoods(foods)
    } else {
      const filtered = foods.filter(food => 
        food.foodName.toLowerCase().includes(term) ||
        food.foodCategory.toLowerCase().includes(term) ||
        food.description.toLowerCase().includes(term) ||
        food.foodOrigin.toLowerCase().includes(term) ||
        food.name.toLowerCase().includes(term)
      )
      setFilteredFoods(filtered)
    }
  }

  if (loading) {
    return <FullScreenLoader text="Loading all foods..." />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-300 py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-mina text-primary mb-2">খানাপিনা</h1>
          <h2 className="text-3xl font-play text-base-content">All Foods</h2>
          <p className="text-base-content opacity-70 mt-2">Explore our complete food collection</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search foods by name, category, origin..."
              value={searchTerm}
              onChange={handleSearch}
              className="input input-bordered focus:border-none input-lg w-full pr-12 focus:input-primary"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-base-content opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>

        {filteredFoods.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-play text-base-content mb-4">
              {searchTerm ? 'No foods found' : 'No foods available'}
            </h3>
            <p className="text-base-content opacity-70">
              {searchTerm ? `No results for "${searchTerm}"` : 'Check back later for delicious options.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFoods.map((food, index) => (
              <motion.div
                key={food._id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.figure
                  className="px-4 pt-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="rounded-xl h-48 w-full object-cover"
                    referrerPolicy='no-referrer'
                  />
                </motion.figure>
                <div className="card-body p-4">
                  <h3 className="card-title text-primary font-play text-lg">
                    {food.foodName}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-primary badge-sm">{food.foodCategory}</span>
                    <span className="text-sm text-base-content opacity-70">
                      Purchased: {food.purchse || 0} times
                    </span>
                  </div>
                  <p className="text-base-content text-sm line-clamp-2">
                    {food.description}
                  </p>
                  <div className="card-actions justify-between items-center mt-4">
                    <span className="text-xl font-bold text-primary">{food.price}৳</span>
                    <Link to={`/food/${food._id}`}>
                      <motion.button
                        className="btn btn-primary btn-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}