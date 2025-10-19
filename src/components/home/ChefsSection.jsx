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
                src="https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232161.jpg?semt=ais_hybrid" 
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
                src="https://static.vecteezy.com/system/resources/previews/012/753/011/non_2x/female-chef-holding-beef-steak-plate-free-photo.jpg" 
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
                src="https://media.istockphoto.com/photos/indian-chef-at-his-restaurant-looking-at-the-camera-smiling-with-arms-picture-id875991950?k=20&m=875991950&s=612x612&w=0&h=W1X5K4jD8l_Y4aGW3VXjDWVmIMbg3IJcf8S-v1DCcFA=" 
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