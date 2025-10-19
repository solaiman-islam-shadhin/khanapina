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
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-mina text-primary mb-2">খানাপিনা</h1>
          <h2 className="text-3xl font-play text-base-content">Purchase Food</h2>
          <p className="text-base-content opacity-70 mt-2">Complete your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <h3 className="card-title text-2xl font-play mb-6">Order Details</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-play text-lg">Food Name</span>
                      </label>
                      <input
                        type="text"
                        name="foodName"
                        value={formData.foodName}
                        onChange={handleChange}
                        placeholder="Enter food name"
                        className="input input-bordered input-lg w-full focus:input-primary"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-play text-lg">Price (৳)</span>
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        className="input input-bordered input-lg w-full focus:input-primary"
                        min="1"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-play text-lg">Quantity</span>
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="input input-bordered input-lg w-full focus:input-primary"
                        min="1"
                        required
                      />
                    </div>
                  </div>

                  <div className="divider">Buyer Information</div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-play text-lg">Buyer Name</span>
                      </label>
                      <input
                        type="text"
                        value={loggedInUser.name}
                        className="input input-bordered input-lg w-full bg-base-200"
                        readOnly
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-play text-lg">Buyer Email</span>
                      </label>
                      <input
                        type="email"
                        value={loggedInUser.email}
                        className="input input-bordered input-lg w-full bg-base-200"
                        readOnly
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-full font-play text-xl"
                  >
                    Complete Purchase
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-2xl sticky top-8">
              <div className="card-body">
                <h3 className="card-title text-2xl font-play mb-6">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-play text-lg">Food Item:</span>
                    <span className="font-semibold">{formData.foodName || 'Not selected'}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-play text-lg">Unit Price:</span>
                    <span className="font-semibold">৳{formData.price || '0'}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-play text-lg">Quantity:</span>
                    <span className="font-semibold">{formData.quantity}</span>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span className="font-play">Total:</span>
                    <span className="text-primary">৳{totalPrice || '0'}</span>
                  </div>
                </div>

                {formData.price && formData.quantity && (
                  <div className="alert alert-info mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="font-play">Review your order before purchasing</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}