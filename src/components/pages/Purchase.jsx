import React, { useState } from 'react'

export const Purchase = () => {
  const [formData, setFormData] = useState({
    foodName: '',
    price: '',
    quantity: 1
  })

  // Mock logged-in user data (in real app, this would come from auth context)
  const loggedInUser = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const purchaseData = {
      ...formData,
      buyerName: loggedInUser.name,
      buyerEmail: loggedInUser.email,
      buyingDate: Date.now()
    }
    
    console.log('Purchase data:', purchaseData)
    alert('Purchase successful!')
  }

  const totalPrice = formData.price * formData.quantity

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-mina text-primary mb-2">খানাপিনা</h1>
            <h2 className="text-2xl font-play text-base-content">Purchase Food</h2>
            <p className="text-base-content opacity-70 mt-2">Complete your order</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-play">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                value={formData.foodName}
                onChange={handleChange}
                placeholder="Enter food name"
                className="input input-bordered w-full focus:input-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-play">Price (৳)</span>
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="input input-bordered w-full focus:input-primary"
                min="1"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-play">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="input input-bordered w-full focus:input-primary"
                min="1"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-play">Buyer Name</span>
              </label>
              <input
                type="text"
                value={loggedInUser.name}
                className="input input-bordered w-full bg-base-200"
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-play">Buyer Email</span>
              </label>
              <input
                type="email"
                value={loggedInUser.email}
                className="input input-bordered w-full bg-base-200"
                readOnly
              />
            </div>

            {formData.price && formData.quantity && (
              <div className="card bg-primary text-primary-content">
                <div className="card-body p-4">
                  <h3 className="card-title text-lg">Total Amount</h3>
                  <p className="text-2xl font-bold">৳{totalPrice}</p>
                </div>
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary w-full font-play text-lg"
            >
              Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}