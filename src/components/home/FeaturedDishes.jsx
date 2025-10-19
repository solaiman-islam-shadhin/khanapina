import React from 'react'

export const FeaturedDishes = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary font-mina mb-4">আমাদের বিশেষ খাবার</h2>
          <p className="text-xl text-base-content font-play">Discover our signature dishes crafted with love and tradition</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" 
                alt="Biryani" 
                className="rounded-xl h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary font-play">Kacchi Biryani</h3>
              <p className="text-base-content">Aromatic basmati rice layered with tender mutton, cooked to perfection with traditional spices.</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-accent">৳450</span>
                <button className="btn btn-primary btn-sm">Order Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" 
                alt="Pancakes" 
                className="rounded-xl h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary font-play">Hilsa Curry</h3>
              <p className="text-base-content">Fresh hilsa fish cooked in rich mustard gravy, a Bengali delicacy that melts in your mouth.</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-accent">৳380</span>
                <button className="btn btn-primary btn-sm">Order Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" 
                alt="Dessert" 
                className="rounded-xl h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary font-play">Mishti Doi</h3>
              <p className="text-base-content">Traditional sweet yogurt dessert, perfectly creamy and infused with cardamom essence.</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-accent">৳120</span>
                <button className="btn btn-primary btn-sm">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}