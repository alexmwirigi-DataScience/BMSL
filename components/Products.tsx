
import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="parts" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-base text-[#E32636] font-semibold tracking-wide uppercase">Spare Parts</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Popular Categories</p>
          </div>
          <a href="#" className="mt-4 md:mt-0 text-[#002B49] font-bold border-b-2 border-[#002B49] pb-1">
            View Wholesale Catalog
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {PRODUCTS.map((product, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5]"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg leading-tight transform group-hover:-translate-y-2 transition-transform duration-300">
                  {product.name}
                </h3>
                <div className="h-0.5 w-0 group-hover:w-full bg-[#F39200] transition-all duration-300 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
