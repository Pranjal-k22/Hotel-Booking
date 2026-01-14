import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="relative bg-gray-900 py-24 sm:py-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Luxury Hotel Lobby"
              className="h-full w-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              About Hotel Booking
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              We make finding and booking your perfect stay simple and reliable.
              From boutique hotels to luxury resorts, our platform helps
              travellers discover the right room at the right price.
            </p>

            {/* Stats Section */}
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-3 text-center">
                <div className="flex flex-col gap-y-2 border-l border-white/10 pl-6 sm:pl-0 sm:border-l-0">
                  <dt className="text-base leading-7 text-gray-400">Total Bookings</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">10k+</dd>
                </div>
                <div className="flex flex-col gap-y-2 border-l border-white/10 pl-6 sm:border-l sm:border-white/20">
                  <dt className="text-base leading-7 text-gray-400">Partner Hotels</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">500+</dd>
                </div>
                <div className="flex flex-col gap-y-2 border-l border-white/10 pl-6 sm:border-l sm:border-white/20">
                  <dt className="text-base leading-7 text-gray-400">Customer Support</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">24/7</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* --- Mission Section --- */}
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Values</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                To connect travellers with memorable stays while supporting local
                hosts and properties. We focus on transparency, convenience, and
                exceptional customer service to ensure every trip is seamless.
              </p>
            </div>
          </div>
        </section>

        {/* --- Team Section --- */}
        <section className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Team</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about travel and technology.
              </p>
            </div>
            
            <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* Team Member 1 */}
              <li className="group">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <img 
                    className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-indigo-100" 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Alex Morgan" 
                  />
                  <h3 className="mt-6 text-center text-base font-semibold leading-7 tracking-tight text-gray-900">Pranjal</h3>
                  <p className="text-center text-sm leading-6 text-indigo-600">Founder & CEO</p>
                </div>
              </li>

              {/* Team Member 2 */}
              <li className="group">
                 <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <img 
                    className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-indigo-100" 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Sana Patel" 
                  />
                  <h3 className="mt-6 text-center text-base font-semibold leading-7 tracking-tight text-gray-900">Sana Patel</h3>
                  <p className="text-center text-sm leading-6 text-indigo-600">Head of Product</p>
                </div>
              </li>

              {/* Team Member 3 */}
              <li className="group">
                 <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <img 
                    className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-indigo-100" 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Jon Reyes" 
                  />
                  <h3 className="mt-6 text-center text-base font-semibold leading-7 tracking-tight text-gray-900">Adarsh</h3>
                  <p className="text-center text-sm leading-6 text-indigo-600">Engineering Lead</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default About;