import React from 'react'

export const ReviewsSection = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary font-mina mb-4">গ্রাহকদের মতামত</h2>
          <p className="text-xl text-base-content font-play">What our valued customers say about us</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="rating rating-sm">
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                </div>
              </div>
              <p className="text-base-content italic mb-4">"The biryani here is absolutely incredible! Reminds me of my grandmother's cooking. The flavors are authentic and the service is excellent."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face" alt="Customer" className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <h4 className="font-semibold text-primary">Rashida Ahmed</h4>
                  <p className="text-sm text-base-content opacity-70">Food Blogger</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                </div>
              </div>
              <p className="text-base-content italic mb-4">"Amazing experience! The hilsa curry was perfectly cooked and the ambiance is so welcoming. Will definitely come back with family."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" alt="Customer" className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <h4 className="font-semibold text-primary">Karim Hassan</h4>
                  <p className="text-sm text-base-content opacity-70">Regular Customer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="rating rating-sm">
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                </div>
              </div>
              <p className="text-base-content italic mb-4">"Best Bengali restaurant in the city! The mishti doi is heavenly and the staff is so friendly. Highly recommended for authentic taste."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" alt="Customer" className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <h4 className="font-semibold text-primary">Fatima Khan</h4>
                  <p className="text-sm text-base-content opacity-70">Food Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}