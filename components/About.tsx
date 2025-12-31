
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-[#E32636] font-semibold tracking-wide uppercase">Who We Are</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Empowering Your Mobile Experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Bonnie Mobile Spares is a premier wholesaler and retailer based in Kenya, specializing in high-quality mobile phone parts and professional repair services. We understand that your mobile device is essential to your daily life and business, which is why we only provide genuine, tested components.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From our headquarters in Githurai 45 to our growing network of branches across Kenya, we pride ourselves on technical expertise, rapid turnaround times, and unbeatable wholesale prices for technicians and end-users alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="text-2xl">✅</span>
                <span className="font-semibold">Genuine Parts</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="text-2xl">🛠️</span>
                <span className="font-semibold">Expert Technicians</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="text-2xl">💰</span>
                <span className="font-semibold">Wholesale Prices</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
                src="https://picsum.photos/seed/shop1/300/400" 
                alt="Shop Interior" 
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
                src="https://picsum.photos/seed/repair1/300/400" 
                alt="Repair Service" 
                className="rounded-xl shadow-lg mt-8 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
