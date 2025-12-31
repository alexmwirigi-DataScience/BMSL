
import React from 'react';
import { BRANCHES } from '../constants';

const Branches: React.FC = () => {
  return (
    <section id="branches" className="py-20 bg-[#F8FAFC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-[#E32636] font-semibold tracking-wide uppercase">Our Network</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Visit Our Branch Locations</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Find the Bonnie Mobile Spares branch nearest to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANCHES.map((branch, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-sm border-2 transition-all duration-300 flex flex-col ${
                branch.isHQ 
                  ? 'border-[#002B49] ring-4 ring-blue-50' 
                  : 'border-transparent hover:border-[#8BC53F]'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{branch.name}</h3>
                {branch.isHQ && (
                  <span className="bg-[#002B49] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Main HQ
                  </span>
                )}
              </div>
              
              <div className="flex-grow space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#E32636] mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-gray-600 font-medium">Located conveniently in the heart of {branch.name.split(' ')[0]}.</p>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Contact Numbers</p>
                  {branch.phones.map((phone, pIdx) => (
                    <a 
                      key={pIdx}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-[#F39200] hover:text-white transition-all duration-200 group"
                    >
                      <svg className="w-5 h-5 mr-3 text-[#002B49] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="font-bold">{phone}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full py-3 rounded-xl border-2 border-[#002B49] text-[#002B49] font-bold hover:bg-[#002B49] hover:text-white transition-all duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
