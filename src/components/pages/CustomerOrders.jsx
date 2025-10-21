import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import moment from 'moment'
import AuthContext from '../../context/AuthContext'
import { FullScreenLoader } from '../ui/LoadingSpinner'
import Swal from 'sweetalert2'

export const CustomerOrders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { user } = useContext(AuthContext)
  useEffect(() => {
    fetchOrders()
  }, [user])

  const fetchOrders = () => {
    if (user?.email) {
      axios.get(`http://localhost:5000/customer-orders/${user.email}`)
        .then((res) => {
          setOrders(res.data)
          setLoading(false)
        })
        .catch((err) => {
          console.error('Error fetching customer orders:', err)
          setLoading(false)
        })
    }
  }

  const handleAccept = (orderId) => {
    Swal.fire({
      title: 'Accept Order?',
      text: 'Are you sure you want to accept this order?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10b981',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, Accept!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`http://localhost:5000/purchasedfoods/${orderId}`, {
          status: 'accepted'
        })
          .then(() => {
            setOrders(orders.map(order => 
              order._id === orderId ? { ...order, status: 'accepted' } : order
            ))
            setSelectedOrder(prev => ({ ...prev, status: 'accepted' }))
            Swal.fire('Accepted!', 'Order has been accepted.', 'success')
          })
          .catch((err) => {
            console.error('Error accepting order:', err)
            Swal.fire('Error!', 'Failed to accept order.', 'error')
          })
      }
    })
  }

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
        axios.delete(`http://localhost:5000/purchasedfoods/${orderId}`)
          .then(() => {
            setOrders(orders.filter(order => order._id !== orderId))
            setShowModal(false)
            Swal.fire('Deleted!', 'Order has been deleted.', 'success')
          })
          .catch((err) => {
            console.error('Error deleting order:', err)
            Swal.fire('Error!', 'Failed to delete order.', 'error')
          })
      }
    })
  }

  const openModal = (order) => {
    setSelectedOrder(order)
    setShowModal(true)
  }

  if (loading) {
    return <FullScreenLoader text="Loading customer orders..." />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-play mb-4">Customer Orders</h1>
          <p className="text-base-content opacity-70 text-lg max-w-2xl mx-auto">
            Orders placed by customers for your food items
          </p>
        </motion.div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-play text-base-content mb-4">No customer orders yet</h3>
            <p className="text-base-content opacity-70">When customers order your food items, they will appear here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order, index) => (
              <motion.div
                key={order._id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <figure className="px-4 pt-4">
                  <img
                    src={order.foodImage}
                    alt={order.foodName}
                    className="rounded-xl h-48 w-full object-cover"
                    referrerPolicy='no-referrer'
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-primary font-play">{order.foodName}</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold">Customer:</span>
                      <span>{order.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Email:</span>
                      <span className="text-xs">{order.buyerEmail || order.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Status:</span>
                      <div className={`badge badge-sm ${order.status === 'accepted' ? 'badge-success' : 'badge-warning'}`}>
                        {order.status === 'accepted' ? 'Accepted' : 'Pending'}
                      </div>
                    </div>
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <button
                      onClick={() => openModal(order)}
                      className="btn btn-primary btn-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Customer Details Modal */}
      {showModal && selectedOrder && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-2xl font-play text-primary">Order Details</h3>
              <button
                className="btn btn-sm btn-circle btn-ghost"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedOrder.foodImage}
                  alt={selectedOrder.foodName}
                  className="w-full h-48 object-cover rounded-lg"
                  referrerPolicy='no-referrer'
                />
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-primary">Food:</span>
                  <p className="text-lg">{selectedOrder.foodName}</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Customer:</span>
                  <p>{selectedOrder.name}</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Email:</span>
                  <p>{selectedOrder.buyerEmail || selectedOrder.email}</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Phone:</span>
                  <p>{selectedOrder.phonenumber}</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Quantity:</span>
                  <p>{selectedOrder.quantity}</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Total Price:</span>
                  <p className="text-xl font-bold text-primary">{selectedOrder.price * selectedOrder.quantity}৳</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Order Date:</span>
                  <p>{moment(selectedOrder.purchaseDate).format('MMM DD, YYYY HH:mm')}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <span className="font-semibold text-primary">Delivery Address:</span>
              <p className="bg-base-200 p-3 rounded-lg mt-2">{selectedOrder.address}</p>
            </div>

            <div className="modal-action mt-6">
              {selectedOrder.status === 'accepted' ? (
                <>
                  <div className="badge badge-success badge-lg">Order Accepted</div>
                  <button
                    onClick={() => handleDelete(selectedOrder._id)}
                    className="btn btn-error font-play"
                    disabled
                  >
                    Delete Order
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleAccept(selectedOrder._id)}
                    className="btn btn-success font-play"
                  >
                    Accept Order
                  </button>
                  <button
                    onClick={() => handleDelete(selectedOrder._id)}
                    className="btn btn-error font-play"
                  >
                    Delete Order
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}