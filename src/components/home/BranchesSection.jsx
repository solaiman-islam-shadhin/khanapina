import React from 'react'
import { motion } from 'framer-motion'

export const BranchesSection = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl font-bold text-primary font-mina mb-4"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            আমাদের শাখাসমূহ
          </motion.h2>
          <motion.p
            className="text-xl text-base-content font-play"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Find us across Bangladesh - Bringing authentic flavors to your city
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=250&fit=crop",
              title: "Dhaka - Dhanmondi",
              address: "House 45, Road 27, Dhanmondi",
              phone: "+880 1711-123456",
              badge: "Main Branch",
              badgeClass: "badge-primary"
            },
            {
              src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
              title: "Chittagong - Agrabad",
              address: "Sheikh Mujib Road, Agrabad C/A",
              phone: "+880 1811-234567",
              badge: "Port City",
              badgeClass: "badge-secondary"
            },
            {
              src: "https://www.hotelscombined.com/rimg/dimg/09/c4/b2d1ab5e-city-54645-17ea2458fc7.jpg?width=2160&height=1215&xhint=1483&yhint=898&crop=true",
              title: "Sylhet - Zindabazar",
              address: "Chowhatta, Zindabazar",
              phone: "+880 1911-345678",
              badge: "Tea Capital",
              badgeClass: "badge-accent"
            },
            {
              src: "https://th.bing.com/th/id/R.ba4d7b2b8c3ce235aa052ea4733bd8ba?rik=b7Zuv84r08teOQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-fU-_NDe2P4A%2fT1pd0iUG-jI%2fAAAAAAAADmw%2fjEa5wGcbGVA%2fs1600%2fRajshahi%2b11.jpg&ehk=2rJvZsolPSdd3%2f9%2bY36%2fKF1ATjchhvXkbhBTHpBvZVU%3d&risl=&pid=ImgRaw&r=0",
              title: "Rajshahi - Shaheb Bazar",
              address: "Station Road, Shaheb Bazar",
              phone: "+880 1611-456789",
              badge: "Silk City",
              badgeClass: "badge-info"
            },
            {
              src: "https://www.mediabangladesh.net/wp-content/uploads/2015/03/shat-gambuj-mosque.png",
              title: "Khulna - Royal More",
              address: "KDA Avenue, Royal More",
              phone: "+880 1511-567890",
              badge: "Shrimp Capital",
              badgeClass: "badge-warning"
            },
            {
              src: "https://cdn.dhakapost.com/media/imgAll/BG/2022December/barisal-20221209184629.jpg",
              title: "Barisal - Sadar Road",
              address: "Band Road, Sadar",
              phone: "+880 1411-678901",
              badge: "Venice of Bengal",
              badgeClass: "badge-success"
            }
          ].map((branch, index) => (
            <motion.div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.figure
                className="px-4 pt-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={branch.src}
                  alt={branch.title}
                  className="rounded-xl h-48 w-full object-cover"
                  referrerPolicy='no-referrer'
                />
              </motion.figure>
              <div className="card-body">
                <motion.h3
                  className="card-title text-primary font-play text-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {branch.title}
                </motion.h3>
                <motion.div
                  className="space-y-2 text-base-content"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{branch.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm">{branch.phone}</span>
                  </div>
                </motion.div>
                <motion.div
                  className="card-actions justify-between items-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className={`badge ${branch.badgeClass}`}>{branch.badge}</div>
                  <motion.button
                    className="btn btn-outline btn-primary btn-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Directions
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}

        </div>

        <div
          className="text-center  mt-12 hidden md:block"

        >
          <div
            className="stats shadow"

          >
            {[
              { title: "Total Branches", value: "6+", desc: "Across Bangladesh" },
              { title: "Cities Covered", value: "6", desc: "Major Cities" },
              { title: "Happy Customers", value: "50K+", desc: "And Growing" }
            ].map((stat, index) => (
              <div
                key={index}
                className="stat"

              >
                <div className="stat-title text-base-content">{stat.title}</div>
                <div
                  className="stat-value text-primary"

                >
                  {stat.value}
                </div>
                <div className="stat-desc text-base-content">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}