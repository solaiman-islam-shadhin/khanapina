import React from 'react'
import { motion } from 'framer-motion'

export const ChefsSection = () => {
  return (
    <section className="py-20 bg-base-200">
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
            আমাদের শেফদের সাথে পরিচিত হন
          </motion.h2>
          <motion.p 
            className="text-xl text-base-content font-play"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Meet the culinary artists behind our exceptional dishes
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              src: "https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232161.jpg?semt=ais_hybrid",
              name: "Chef Abdul Rahman",
              role: "Head Chef & Founder",
              description: "With 15+ years of experience in traditional Bengali cuisine, Chef Rahman brings authentic flavors to every dish.",
              badges: ["Bengali Cuisine", "Biryani Expert"]
            },
            {
              src: "https://static.vecteezy.com/system/resources/previews/012/753/011/non_2x/female-chef-holding-beef-steak-plate-free-photo.jpg",
              name: "Chef Fatima Khatun",
              role: "Pastry & Dessert Chef",
              description: "Specializing in traditional sweets and modern desserts, Chef Fatima creates magical endings to every meal.",
              badges: ["Desserts", "Traditional Sweets"]
            },
            {
              src: "https://media.istockphoto.com/photos/indian-chef-at-his-restaurant-looking-at-the-camera-smiling-with-arms-picture-id875991950?k=20&m=875991950&s=612x612&w=0&h=W1X5K4jD8l_Y4aGW3VXjDWVmIMbg3IJcf8S-v1DCcFA=",
              name: "Chef Mohammad Karim",
              role: "Seafood Specialist",
              description: "Master of fish preparations and coastal cuisine, Chef Karim brings the taste of Bengal's rivers to your plate.",
              badges: ["Seafood", "Fish Curry"]
            }
          ].map((chef, index) => (
            <motion.div 
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.figure 
                className="px-4 pt-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={chef.src}
                  alt={chef.name}
                  className="rounded-full w-48 h-48 object-cover border-4 border-primary"
                />
              </motion.figure>
              <div className="card-body text-center">
                <motion.h3 
                  className="card-title justify-center text-primary font-play text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  {chef.name}
                </motion.h3>
                <motion.p 
                  className="text-accent font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                >
                  {chef.role}
                </motion.p>
                <motion.p 
                  className="text-base-content mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {chef.description}
                </motion.p>
                <motion.div 
                  className="flex justify-center space-x-2 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  {chef.badges.map((badge, badgeIndex) => (
                    <motion.div 
                      key={badgeIndex}
                      className={`badge ${badgeIndex === 0 ? 'badge-primary' : 'badge-secondary'}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {badge}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}