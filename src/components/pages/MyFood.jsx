import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'
import { CiEdit } from "react-icons/ci";
import { toast, ToastContainer } from 'react-toastify';
import { FullScreenLoader } from '../ui/LoadingSpinner';
export const MyFood = () => {
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedFood, setSelectedFood] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://restaurant-management-server-side-five.vercel.app/my-foods/${user.email}`)
                .then((res) => {
                    setFoods(res.data)
                    setLoading(false)
                })
                .catch((err) => {
                    alert(err.message)
                    setLoading(false)
                })
        }
    }, [user])

    const handleUpdate = (food) => {
        setSelectedFood(food)
        setShowModal(true)
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const updatedData = Object.fromEntries(formData.entries())

        axios.patch(`https://restaurant-management-server-side-five.vercel.app/food/${selectedFood._id}`, updatedData)
            .then((res) => {
                toast.success('Food updated successfully!')
                setShowModal(false)

                setFoods(foods.map(food =>
                    food._id === selectedFood._id ? { ...food, ...updatedData } : food
                ))
            })
            .catch((err) => {
                alert('Error updating food: ' + err.message)
            })
    }

    if (loading) {
        return <FullScreenLoader text="Loading your foods..." />
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
                    <h2 className="text-3xl font-play text-base-content">My Food Items</h2>
                    <p className="text-base-content opacity-70 mt-2">Manage your added food items</p>
                </motion.div>

                {foods.length === 0 ? (
                    <div className="text-center py-16">
                        <h3 className="text-2xl font-play text-base-content mb-4">No food items found</h3>
                        <p className="text-base-content opacity-70">You haven't added any food items yet.</p>
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
                                                <th className="font-play text-lg">Category</th>
                                                <th className="font-play text-lg">Price</th>
                                                <th className="font-play text-lg">Quantity</th>
                                                <th className="font-play text-lg">Purchased</th>
                                                <th className="font-play text-lg">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {foods.map((food, index) => (
                                                <motion.tr
                                                    key={food._id}
                                                    initial={{ opacity: 0, x: -50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}

                                                >
                                                    <td>
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-16 h-16">
                                                                <img src={food.foodImage} alt={food.foodName} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="font-play font-semibold">{food.foodName}</td>
                                                    <td>
                                                        <span className="badge badge-primary">{food.foodCategory}</span>
                                                    </td>
                                                    <td className="font-bold text-primary">{food.price}৳</td>
                                                    <td>{food.quantity}</td>
                                                    <td>{food.purchse || 0}</td>
                                                    <td>
                                                        <motion.button
                                                            onClick={() => handleUpdate(food)}
                                                            className="btn btn-sm btn-primary"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <CiEdit size={25} />
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
                            {foods.map((food, index) => (
                                <motion.div
                                    key={food._id}
                                    className="card bg-base-100 shadow-xl"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="card-body p-4">
                                        <div className="flex items-start gap-4">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={food.foodImage} alt={food.foodName} />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-play font-bold text-lg text-primary mb-2">{food.foodName}</h3>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm text-base-content opacity-70">Category:</span>
                                                        <span className="badge badge-primary badge-sm">{food.foodCategory}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm text-base-content opacity-70">Price:</span>
                                                        <span className="font-bold text-primary">{food.price}৳</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm text-base-content opacity-70">Available:</span>
                                                        <span className="font-semibold">{food.quantity}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm text-base-content opacity-70">Purchased:</span>
                                                        <span className="font-semibold">{food.purchse || 0}</span>
                                                    </div>
                                                </div>
                                                <div className="card-actions justify-end mt-4">
                                                    <motion.button
                                                        onClick={() => handleUpdate(food)}
                                                        className="btn btn-primary btn-sm"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <CiEdit size={20} />
                                                        Edit
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

            {/* Update Modal */}
            {showModal && selectedFood && (
                <div className="modal modal-open px-2 lg:px-0 ">
                    <div className="modal-box w-full  max-w-6xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-bold text-3xl font-play text-primary">Update Food Item</h3>
                            <button
                                className="btn btn-sm btn-circle btn-ghost"
                                onClick={() => setShowModal(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleUpdateSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                <div className="form-control w-full">
                                    <label className="label mb-4">
                                        <span className="label-text font-play text-lg">Food Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="foodName"
                                        defaultValue={selectedFood.foodName}
                                        className="input input-bordered input-lg focus:input-primary w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label mb-4">
                                        <span className="label-text font-play text-lg">Price (৳)</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        defaultValue={selectedFood.price}
                                        className="input input-bordered input-lg focus:input-primary w-full"
                                        min="1"
                                        required
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label mb-4">
                                        <span className="label-text font-play text-lg">Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        defaultValue={selectedFood.quantity}
                                        className="input input-bordered input-lg focus:input-primary w-full"
                                        min="1"
                                        required
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label mb-4">
                                        <span className="label-text font-play text-lg">Category</span>
                                    </label>
                                    <select
                                        name="foodCategory"
                                        defaultValue={selectedFood.foodCategory}
                                        className="select select-bordered select-lg focus:select-primary w-full"
                                        required
                                    >
                                        <option value="Bengali">Bengali</option>
                                        <option value="Chinese">Chinese</option>
                                        <option value="Indian">Indian</option>
                                        <option value="Continental">Continental</option>
                                        <option value="Fast Food">Fast Food</option>
                                        <option value="Dessert">Dessert</option>
                                        <option value="Beverage">Beverage</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-control w-full">
                                <label className="label mb-4">
                                    <span className="label-text font-play text-lg">Food Image URL</span>
                                </label>
                                <input
                                    type="url"
                                    name="foodImage"
                                    defaultValue={selectedFood.foodImage}
                                    className="input input-bordered input-lg focus:input-primary w-full"
                                    placeholder="Enter image URL"
                                    required
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label mb-4">
                                    <span className="label-text font-play text-lg ">Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    defaultValue={selectedFood.description}
                                    className="textarea textarea-bordered textarea-lg focus:textarea-primary w-full h-32"
                                    placeholder="Enter food description, ingredients, and preparation details..."
                                    required
                                ></textarea>
                            </div>

                            <div className="flex justify-end gap-4 pt-6 border-t">
                                <button
                                    type="button"
                                    className="btn btn-outline btn-lg font-play px-8"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary btn-lg font-play px-8">
                                    Update Food
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
