import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import moment from 'moment'
import AuthContext from '../../context/AuthContext'
import { toast, ToastContainer } from 'react-toastify'
import { FullScreenLoader } from '../ui/LoadingSpinner'
import Swal from 'sweetalert2'

export const MyOrders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useContext(AuthContext)


  useEffect(() => {
    if (user?.email) {
      axios.get(`https://restaurant-management-server-side-five.vercel.app/pruchasedfoods/${user.email}`)
        .then((res) => {
          setOrders(res.data)
          setLoading(false)
        })
        .catch((err) => {
          alert(err.message)
          setLoading(false)
        })
    }
  }, [user])

  const handleDelete = (orderId) => {
    Swal.fire({
      title: 'Delete Order?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, Delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://restaurant-management-server-side-five.vercel.app/purchasedfoods/${orderId}`)
          .then(() => {
            setOrders(orders.filter(order => order._id !== orderId))
            toast.success('Order deleted successfully!')
          })
          .catch((err) => {
            toast.error('Error deleting order: ' + err.message)
          })
      }
    })
  }

  if (loading) {
    return <FullScreenLoader text="Loading your orders..." />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-300 py-8 px-4">
      <div className="container mx-auto">
        <ToastContainer />
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-mina text-primary mb-2">খানাপিনা</h1>
          <h2 className="text-3xl font-play text-base-content">My Orders</h2>
          <p className="text-base-content opacity-70 mt-2">View and manage your food orders</p>
        </motion.div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-play text-base-content mb-4">No orders found</h3>
            <p className="text-base-content opacity-70">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <motion.div
              className="hidden md:block card bg-base-100 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="card-body p-0">
                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    <thead>
                      <tr className="bg-primary text-primary-content">
                        <th className="font-play text-lg">Image</th>
                        <th className="font-play text-lg">Food Name</th>
                        <th className="font-play text-lg">Price</th>
                        <th className="font-play text-lg">Quantity</th>
                        <th className="font-play text-lg">Owner</th>
                        <th className="font-play text-lg">Status</th>
                        <th className="font-play text-lg">Order Date</th>
                        <th className="font-play text-lg">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <motion.tr
                          key={order._id}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="hover:bg-base-200"
                        >
                          <td>
                            <div className="avatar">
                              <div className="mask mask-squircle w-16 h-16">
                                <img referrerPolicy='no-referrer' src={order.foodImage} alt={order.foodName} />
                              </div>
                            </div>
                          </td>
                          <td className="font-play font-semibold">{order.foodName}</td>
                          <td className="font-bold text-primary">{order.price}৳</td>
                          <td>{order.quantity}</td>
                          <td className="text-sm">{order.ownerName || 'N/A'}</td>
                          <td>
                            <div className={`badge ${order.status === 'accepted' ? 'badge-success' : 'badge-warning'}`}>
                              {order.status === 'accepted' ? 'Accepted' : 'Pending'}
                            </div>
                          </td>
                          <td className="text-sm">{moment(order.purchaseDate).format('MMM DD, YYYY h:mm A')}</td>
                          <td>
                            <motion.button
                              onClick={() => handleDelete(order._id)}
                              className="btn btn-sm btn-error"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </motion.button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {orders.map((order, index) => (
                <motion.div
                  key={order._id}
                  className="card bg-base-100 shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card-body p-4">
                    <div className="flex items-start gap-4">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                          <img referrerPolicy='no-referrer' src={order.foodImage} alt={order.foodName} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-play font-bold text-lg text-primary mb-2">{order.foodName}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-base-content opacity-70">Price:</span>
                            <span className="font-bold text-primary">{order.price}৳</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-base-content opacity-70">Quantity:</span>
                            <span className="font-semibold">{order.quantity}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-base-content opacity-70">Owner:</span>
                            <span className="text-sm">{order.foodOwner || 'N/A'}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-base-content opacity-70">Status:</span>
                            <div className={`badge badge-sm ${order.status === 'accepted' ? 'badge-success' : 'badge-warning'}`}>
                              {order.status === 'accepted' ? 'Accepted' : 'Pending'}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-base-content opacity-70">Order Date:</span>
                            <span className="text-sm">{moment(order.purchaseDate).format('MMM DD, h:mm A')}</span>
                          </div>
                        </div>
                        <div className="card-actions justify-end mt-4">
                          <motion.button
                            onClick={() => handleDelete(order._id)}
                            className="btn btn-error btn-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
