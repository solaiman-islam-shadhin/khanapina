import React from 'react'
import { Link } from 'react-router'

export const GallerySection = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary font-mina mb-4">রেস্তোরাঁর পরিবেশ</h2>
          <p className="text-xl text-base-content font-play">Experience the warm and inviting atmosphere of our restaurant</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=400&fit=crop" 
              alt="Restaurant Interior" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Dining Area</h3>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=400&fit=crop" 
              alt="Kitchen" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Open Kitchen</h3>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=400&fit=crop" 
              alt="Private Dining" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Private Dining</h3>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=400&fit=crop" 
              alt="Outdoor Seating" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Outdoor Seating</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg">
            <Link to="/gallery" className="font-play">View Full Gallery</Link>
          </button>
        </div>
      </div>
    </section>
  )
}