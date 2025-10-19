import React, { useState } from 'react'

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all')

  const galleryImages = [
    { id: 1, src: 'https://foodfusion.com/wp-content/uploads/2019/01/Kachay-Gosht-ki-Biryani-Recipe-by-Food-fusion-2.jpg', category: 'food', title: 'Kacchi Biryani' },
    { id: 2, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', category: 'food', title: 'Hilsa Curry' },
    { id: 3, src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop', category: 'food', title: 'Mishti Doi' },
    { id: 4, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', category: 'restaurant', title: 'Dining Area' },
    { id: 5, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop', category: 'restaurant', title: 'Open Kitchen' },
    { id: 6, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop', category: 'restaurant', title: 'Private Dining' },
    { id: 7, src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop', category: 'restaurant', title: 'Outdoor Seating' },
    { id: 8, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop', category: 'food', title: 'Special Platter' },
    { id: 9, src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop', category: 'food', title: 'Traditional Sweets' },
    { id: 10, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', category: 'restaurant', title: 'Interior Design' },
    { id: 11, src: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop', category: 'restaurant', title: 'Cozy Corner' },
    { id: 12, src: 'https://media-psoriasis.newlifeoutlook.com/wp-content/uploads/2014/09/foods_psoriasis.jpg', category: 'food', title: 'Fresh Ingredients' }
  ]

  const filteredImages = activeTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-300 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-mina text-primary mb-2">খানাপিনা</h1>
          <h2 className="text-3xl font-play text-base-content">Gallery</h2>
          <p className="text-base-content opacity-70 mt-2">Explore our delicious food and beautiful ambiance</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="tabs tabs-boxed bg-base-100 shadow-lg">
            <button 
              className={`tab tab-lg font-play ${activeTab === 'all' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button 
              className={`tab tab-lg font-play ${activeTab === 'food' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('food')}
            >
              Food
            </button>
            <button 
              className={`tab tab-lg font-play ${activeTab === 'restaurant' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('restaurant')}
            >
              Restaurant
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-play font-semibold text-lg">{image.title}</h3>
                  <span className="badge badge-primary capitalize">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="stats shadow w-full bg-base-100">
            <div className="stat">
              <div className="stat-title font-play">Total Images</div>
              <div className="stat-value text-primary">{galleryImages.length}</div>
              <div className="stat-desc">Beautiful moments captured</div>
            </div>
            <div className="stat">
              <div className="stat-title font-play">Food Items</div>
              <div className="stat-value text-primary">{galleryImages.filter(img => img.category === 'food').length}</div>
              <div className="stat-desc">Delicious dishes</div>
            </div>
            <div className="stat">
              <div className="stat-title font-play">Restaurant Views</div>
              <div className="stat-value text-primary">{galleryImages.filter(img => img.category === 'restaurant').length}</div>
              <div className="stat-desc">Ambiance shots</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}