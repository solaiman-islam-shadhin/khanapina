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
                src="https://tse2.mm.bing.net/th/id/OIP.CXT1HnNxgSbsOuB1XpJ6kgHaEo?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" 
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
                src="https://www.hotelscombined.com/rimg/dimg/09/c4/b2d1ab5e-city-54645-17ea2458fc7.jpg?width=2160&height=1215&xhint=1483&yhint=898&crop=true" 
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
                src="https://th.bing.com/th/id/R.ba4d7b2b8c3ce235aa052ea4733bd8ba?rik=b7Zuv84r08teOQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-fU-_NDe2P4A%2fT1pd0iUG-jI%2fAAAAAAAADmw%2fjEa5wGcbGVA%2fs1600%2fRajshahi%2b11.jpg&ehk=2rJvZsolPSdd3%2f9%2bY36%2fKF1ATjchhvXkbhBTHpBvZVU%3d&risl=&pid=ImgRaw&r=0" 
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
                src="https://www.mediabangladesh.net/wp-content/uploads/2015/03/shat-gambuj-mosque.png" 
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
                src="https://cdn.dhakapost.com/media/imgAll/BG/2022December/barisal-20221209184629.jpg" 
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