import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products";

const MyOrders = () => {
  return (
    <div className="pt-36 pb-20 bg-white">
      <Header />
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '64px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }} className="text-[#0F0F0F]">سجل الطلبات</h1>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image="/images/n1.jpg"
              name={product.name}
              price={product.price}
              oldPrice={product.originalPrice}
              showOldPrice={true}
              variant="default"
              buttonText="إعادة الطلب"
              showCartBtn={false}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyOrders;
