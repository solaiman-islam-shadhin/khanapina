import axios from "axios"
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Food } from "./Food";
import { toast, ToastContainer } from "react-toastify";

export const AddFood = () => {

  const categories = ['Bengali', 'Chinese', 'Indian', 'Continental', 'Fast Food', 'Dessert', 'Beverage']
  const { user,manualUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const FoodData = Object.fromEntries(formData.entries());
    const purchse = 0;
    const image = user.photoURL || manualUser.photoURL
    FoodData.purchse = purchse;
    FoodData.image = image;
    axios.post('https://restaurant-management-server-side-five.vercel.app/foods', {
      ...FoodData
    })
      .then((res) => {
        toast.success('Food item added successfully')
        e.target.reset()
      })
      .catch((err) => {
        alert('Error adding food item: ' + err.message)
      })

  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-300 py-8 px-4">
      <ToastContainer />
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
                  <label className="label mb-2">
                    <span className="label-text font-play text-lg">Food Name</span>
                  </label>
                  <input
                    type="text"
                    name="foodName"

                    placeholder="Enter food name"
                    className="input input-bordered focus:border-none input-lg w-full focus:input-primary"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text font-play text-lg">Food Image URL</span>
                  </label>
                  <input
                    type="url"
                    name="foodImage"

                    placeholder="Enter image URL"
                    className="input input-bordered focus:border-none input-lg w-full focus:input-primary"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text font-play text-lg">Food Category</span>
                  </label>
                  <select
                    name="foodCategory"
                    className="select select-bordered focus:border-none  focus:ring-0 select-lg w-full focus:select-primary"
                    required
                  >
                    <option value="" disabled>Select category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text font-play text-lg">Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"

                    className="input input-bordered focus:border-none input-lg w-full focus:input-primary"
                    min="1"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text font-play text-lg">Price (৳)</span>
                  </label>
                  <input
                    type="number"
                    name="price"

                    placeholder="Enter price"
                    className="input input-bordered focus:border-none input-lg w-full focus:input-primary"
                    min="1"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text font-play text-lg">Food Origin (Country)</span>
                  </label>
                  <input
                    type="text"
                    name="foodOrigin"

                    placeholder="Enter country of origin"
                    className="input input-bordered focus:border-none input-lg w-full focus:input-primary"
                    required
                  />
                </div>
              </div>

              <div className="divider">Added By</div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text font-play text-lg">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user.displayName || manualUser.name}
                    className="input input-bordered focus:border-none input-lg w-full bg-base-200"
                    readOnly
                  />
                </div>

                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text font-play text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    className="input input-bordered focus:border-none input-lg w-full bg-base-200"
                    readOnly
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text font-play text-lg">Description</span>
                </label>
                <textarea
                  name="description"

                  placeholder="Enter ingredients, making procedure, and other details..."
                  className="textarea textarea-bordered focus:border-none textarea-lg w-full focus:textarea-primary h-32"
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