import React from 'react'

export const ChefsSection = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary font-mina mb-4">আমাদের শেফদের সাথে পরিচিত হন</h2>
          <p className="text-xl text-base-content font-play">Meet the culinary artists behind our exceptional dishes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=300&fit=crop&crop=face" 
                alt="Chef Rahman" 
                className="rounded-full w-48 h-48 object-cover border-4 border-primary"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary font-play text-2xl">Chef Abdul Rahman</h3>
              <p className="text-accent font-semibold">Head Chef & Founder</p>
              <p className="text-base-content mt-2">With 15+ years of experience in traditional Bengali cuisine, Chef Rahman brings authentic flavors to every dish.</p>
              <div className="flex justify-center space-x-2 mt-4">
                <div className="badge badge-primary">Bengali Cuisine</div>
                <div className="badge badge-secondary">Biryani Expert</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=300&fit=crop&crop=face" 
                alt="Chef Fatima" 
                className="rounded-full w-48 h-48 object-cover border-4 border-primary"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary font-play text-2xl">Chef Fatima Khatun</h3>
              <p className="text-accent font-semibold">Pastry & Dessert Chef</p>
              <p className="text-base-content mt-2">Specializing in traditional sweets and modern desserts, Chef Fatima creates magical endings to every meal.</p>
              <div className="flex justify-center space-x-2 mt-4">
                <div className="badge badge-primary">Desserts</div>
                <div className="badge badge-secondary">Traditional Sweets</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=face" 
                alt="Chef Karim" 
                className="rounded-full w-48 h-48 object-cover border-4 border-primary"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary font-play text-2xl">Chef Mohammad Karim</h3>
              <p className="text-accent font-semibold">Seafood Specialist</p>
              <p className="text-base-content mt-2">Master of fish preparations and coastal cuisine, Chef Karim brings the taste of Bengal's rivers to your plate.</p>
              <div className="flex justify-center space-x-2 mt-4">
                <div className="badge badge-primary">Seafood</div>
                <div className="badge badge-secondary">Fish Curry</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}