import React from 'react'

export const BranchesSection = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary font-mina mb-4">আমাদের শাখাসমূহ</h2>
          <p className="text-xl text-base-content font-play">Find us across Bangladesh - Bringing authentic flavors to your city</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=250&fit=crop" 
                alt="Dhaka Branch" 
                className="rounded-xl h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary font-play text-xl">Dhaka - Dhanmondi</h3>
              <div className="space-y-2 text-base-content">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">House 45, Road 27, Dhanmondi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">+880 1711-123456</span>
                </div>
              </div>
              <div className="card-actions justify-between items-center mt-4">
                <div className="badge badge-primary">Main Branch</div>
                <button className="btn btn-outline btn-primary btn-sm">Get Directions</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop" 
                alt="Chittagong Branch" 
                className="rounded-xl h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary font-play text-xl">Chittagong - Agrabad</h3>
              <div className="space-y-2 text-base-content">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Sheikh Mujib Road, Agrabad C/A</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">+880 1811-234567</span>
                </div>
              </div>
              <div className="card-actions justify-between items-center mt-4">
                <div className="badge badge-secondary">Port City</div>
                <button className="btn btn-outline btn-primary btn-sm">Get Directions</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=250&fit=crop" 
                alt="Sylhet Branch" 
                className="rounded-xl h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary font-play text-xl">Sylhet - Zindabazar</h3>
              <div className="space-y-2 text-base-content">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Chowhatta, Zindabazar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">+880 1911-345678</span>
                </div>
              </div>
              <div className="card-actions justify-between items-center mt-4">
                <div className="badge badge-accent">Tea Capital</div>
                <button className="btn btn-outline btn-primary btn-sm">Get Directions</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop" 
                alt="Rajshahi Branch" 
                className="rounded-xl h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary font-play text-xl">Rajshahi - Shaheb Bazar</h3>
              <div className="space-y-2 text-base-content">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Station Road, Shaheb Bazar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">+880 1611-456789</span>
                </div>
              </div>
              <div className="card-actions justify-between items-center mt-4">
                <div className="badge badge-info">Silk City</div>
                <button className="btn btn-outline btn-primary btn-sm">Get Directions</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" 
                alt="Khulna Branch" 
                className="rounded-xl h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary font-play text-xl">Khulna - Royal More</h3>
              <div className="space-y-2 text-base-content">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">KDA Avenue, Royal More</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">+880 1511-567890</span>
                </div>
              </div>
              <div className="card-actions justify-between items-center mt-4">
                <div className="badge badge-warning">Shrimp Capital</div>
                <button className="btn btn-outline btn-primary btn-sm">Get Directions</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <figure className="px-4 pt-4">
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=250&fit=crop" 
                alt="Barisal Branch" 
                className="rounded-xl h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary font-play text-xl">Barisal - Sadar Road</h3>
              <div className="space-y-2 text-base-content">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Band Road, Sadar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">+880 1411-678901</span>
                </div>
              </div>
              <div className="card-actions justify-between items-center mt-4">
                <div className="badge badge-success">Venice of Bengal</div>
                <button className="btn btn-outline btn-primary btn-sm">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title text-base-content">Total Branches</div>
              <div className="stat-value text-primary">6+</div>
              <div className="stat-desc text-base-content">Across Bangladesh</div>
            </div>
            <div className="stat">
              <div className="stat-title text-base-content">Cities Covered</div>
              <div className="stat-value text-primary">6</div>
              <div className="stat-desc text-base-content">Major Cities</div>
            </div>
            <div className="stat">
              <div className="stat-title text-base-content">Happy Customers</div>
              <div className="stat-value text-primary">50K+</div>
              <div className="stat-desc text-base-content">And Growing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}