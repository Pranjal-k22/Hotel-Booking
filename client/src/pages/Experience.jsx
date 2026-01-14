import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Experience = () => {
  // Animation variants for staggered lists
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const experiences = [
    {
      title: "Curated Luxury",
      desc: "Every hotel in our portfolio is hand-picked for its unique character and world-class service.",
      icon: "✨",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Seamless Booking",
      desc: "One-click reservations and instant confirmation. No hidden fees, ever.",
      icon: "📱",
      img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Local immersion",
      desc: "Go beyond the room. Experience curated local tours and hidden culinary gems.",
      icon: "🗺️",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-indigo-100">
      <Navbar />

      <main>
        {/* --- Dynamic Hero --- */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1920&q=80" 
              className="w-full h-full object-cover"
              alt="Infinity Pool"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          </motion.div>

          <div className="relative text-center px-4">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-indigo-300 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Elevate Your Stay
            </motion.span>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              The Full Experience
            </motion.h1>
          </div>
        </section>

        {/* --- Feature Grid with Scroll Animations --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group cursor-default"
              >
                <div className="overflow-hidden rounded-2xl mb-6 shadow-xl">
                  <img 
                    src={exp.img} 
                    alt={exp.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <span className="text-4xl mb-4 block">{exp.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- Interactive "Vibe" Section --- */}
        <section className="bg-slate-900 py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Unmatched Hospitality <br />
                <span className="text-indigo-400">At Every Touchpoint.</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Global Concierge Access 24/7",
                  "Room Upgrades for Loyalty Members",
                  "VIP Airport Transfers",
                  "Verified Guest Reviews"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-slate-300 border-b border-slate-800 pb-4"
                  >
                    <div className="h-2 w-2 bg-indigo-500 rounded-full" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80" 
                className="relative rounded-3xl shadow-2xl z-10"
                alt="Spa Treatment"
              />
            </motion.div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-24 text-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-indigo-600 max-w-4xl mx-auto rounded-3xl p-12 text-white shadow-2xl shadow-indigo-200 mx-6"
          >
            <h2 className="text-3xl font-bold mb-4">Ready for an unforgettable stay?</h2>
            <p className="mb-8 text-indigo-100">Join 50,000+ happy travellers worldwide.</p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              Explore Destinations
            </button>
          </motion.div>
        </section>
      </main>

      
    </div>
  );
};

export default Experience;