
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import moment from 'moment'

export const Purchase = () => {

  const [food, setFood] = useState(null)
  const navigate = useNavigate();

  const { user, manualUser, Toast3 } = useContext(AuthContext);
  const { id } = useParams()


  useEffect(() => {
    axios.get(`https://restaurant-management-server-side-five.vercel.app/foods/${id}`)
      .then((res) => {
        setFood(res.data)

      })
      .catch((err) => {
        alert(err.message)

      })
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;

    // quantity update logic
    const purchaseQuantity = parseInt(form.quantity.value);
    const currentPurchaseCount = food.purchse || 0;
    const newPurchaseCount = currentPurchaseCount + purchaseQuantity;
    const currentQuantity = parseInt(food.quantity);
    const newQuantity = currentQuantity - purchaseQuantity;

    axios.patch(`https://restaurant-management-server-side-five.vercel.app/foods/${id}`, {
      quantity: newQuantity,
      purchse: newPurchaseCount
    })
      .then((res) => {
      })
      .catch((err) => {
        alert('Error completing purchase: ' + err.message)
      })
   
    const formData = new FormData(form);
    const PurchasedFood = Object.fromEntries(formData.entries());
    const purchasedate = moment().format('YYYY-MM-DD HH:mm:ss');
    PurchasedFood.purchaseDate = purchasedate;
    PurchasedFood.foodImage = food.foodImage;
    PurchasedFood.ownerName = food.name;
    PurchasedFood.ownerEmail = food.email;


    axios.post('https://restaurant-management-server-side-five.vercel.app/purchasedfoods', {
      ...PurchasedFood
    })
      .then((res) => {
        Toast3();
         navigate('/my-orders');

      })
      .catch((err) => {
        alert('Error completing purchase: ' + err.message)
      })

    form.reset();


  }

  const [quantity, setQuantity] = useState(1)
  const totalPrice = food ? food.price * quantity : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-300 py-4 md:py-8 px-4">

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mina text-primary mb-2">খানাপিনা</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-play text-base-content">Purchase Food</h2>
          <p className="text-sm md:text-base text-base-content opacity-70 mt-2">Complete your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <h3 className="card-title text-xl md:text-2xl font-play mb-4 md:mb-6">Order Details</h3>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-play text-lg">Food Name</span>
                      </label>
                      <input
                        type="text"
                        name="foodName"
                        defaultValue={food ? food.foodName : ""}
                        placeholder="Enter food name"
                        className="input input-bordered focus:border-none input-lg w-full focus:input-primary"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-play text-lg">Price (৳)</span>
                      </label>
                      <input
                        type="text"
                        name="price"
                        defaultValue={food ? food.price : ""}
                        placeholder="Enter price"
                        className="input input-bordered focus:border-none input-lg w-full focus:input-primary"
                        min="1"
                        required
                        readOnly
                      />
                    </div>

                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-play text-lg">Quantity</span>
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="input input-bordered focus:border-none input-lg w-full focus:input-primary"
                        min='1'
                        max={food ? food.quantity : 1}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-play text-lg">Phone Number</span>
                      </label>
                      <input
                        type="text"
                        name="phonenumber"

                        placeholder='+880 1234567891'
                        className="input input-bordered focus:border-none input-lg w-full focus:input-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="divider">Buyer Information</div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-play text-lg">Buyer Name</span>
                      </label>
                      <input
                        type="text"
                        name='name'
                        value={user?.displayName || manualUser?.name || ''}
                        className="input input-bordered focus:border-none input-lg w-full bg-base-200"
                        readOnly
                      />
                    </div>

                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-play text-lg">Buyer Email</span>
                      </label>
                      <input
                        type="email"
                        name='email'
                        value={user?.email || ''}
                        className="input input-bordered focus:border-none input-lg w-full bg-base-200"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label mb-2">
                      <span className="label-text font-play text-lg">Delivery Address</span>
                    </label>
                    <textarea
                      name="address"
                      placeholder="Enter your delivery address here"
                      className="textarea textarea-bordered focus:border-none textarea-lg w-full focus:textarea-primary h-24"
                      required
                    ></textarea>
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
                <h3 className="card-title text-xl md:text-2xl font-play mb-4 md:mb-6">Order Summary</h3>

                {food && (
                  <div className="flex justify-center mb-1">
                    <div className="avatar">
                      <div className="mask mask-squircle w-40 h-40">
                        <img referrerPolicy='no-referrer' src={food.foodImage} alt={food.foodName} />
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-play text-lg">Food Item:</span>
                    <span className="font-semibold">{food?.foodName || 'Loading...'}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-play text-lg">Unit Price:</span>
                    <span className="font-semibold">৳{food?.price || '0'}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-play text-lg">Quantity:</span>
                    <span className="font-semibold">{quantity}</span>
                  </div>

                  <div className="divider"></div>

                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span className="font-play">Total:</span>
                    <span className="text-primary">৳{totalPrice || '0'}</span>
                  </div>
                </div>

                {food && (
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
