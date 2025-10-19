import React, { useState } from 'react'

export const AddFood = () => {
  const [formData, setFormData] = useState({
    foodName: '',
    foodImage: '',
    foodCategory: '',
    quantity: 1,
    price: '',
    foodOrigin: '',
    description: ''
  })

  // Mock logged-in user data (in real app, this would come from auth context)
  const loggedInUser = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  }

  const categories = ['Bengali', 'Chinese', 'Indian', 'Continental', 'Fast Food', 'Dessert', 'Beverage']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const foodData = {
      ...formData,
      addedBy: {
        name: loggedInUser.name,
        email: loggedInUser.email
      },
      addedDate: Date.now()
    }
    
    console.log('Food data:', foodData)
    alert('Food item added successfully!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-mina text-primary mb-2">খানাপিনা</h1>
          <h2 className="text-3xl font-play text-base-content">Add New Food Item</h2>
          <p className="text-base-content opacity-70 mt-2">Share your delicious creation</p>
        </div>

        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
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
                    <span className="label-text font-play text-lg">Food Image URL</span>
                  </label>
                  <input
                    type="url"
                    name="foodImage"
                    value={formData.foodImage}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                    className="input input-bordered input-lg w-full focus:input-primary"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-play text-lg">Food Category</span>
                  </label>
                  <select
                    name="foodCategory"
                    value={formData.foodCategory}
                    onChange={handleChange}
                    className="select select-bordered select-lg w-full focus:select-primary"
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
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
                    <span className="label-text font-play text-lg">Food Origin (Country)</span>
                  </label>
                  <input
                    type="text"
                    name="foodOrigin"
                    value={formData.foodOrigin}
                    onChange={handleChange}
                    placeholder="Enter country of origin"
                    className="input input-bordered input-lg w-full focus:input-primary"
                    required
                  />
                </div>
              </div>

              <div className="divider">Added By</div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-play text-lg">Name</span>
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
                    <span className="label-text font-play text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    value={loggedInUser.email}
                    className="input input-bordered input-lg w-full bg-base-200"
                    readOnly
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-play text-lg">Description</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter ingredients, making procedure, and other details..."
                  className="textarea textarea-bordered textarea-lg w-full focus:textarea-primary h-32"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-lg w-full font-play text-xl"
              >
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}