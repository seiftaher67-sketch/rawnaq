// src/pages/Offers.js

import ProductCard from "../components/ProductCard.jsx";
import { FiClock } from 'react-icons/fi';

export default function Offers() {
  const offersData = [
    {
      id: 1,
      name: "عباية كريب فاخرة",
      price: 180,
      oldPrice: 240,
      image: "/images/n1.jpg",
      discount: 30,
    },
    {
      id: 2,
      name: "عباية سعودية فاخرة",
      price: 220,
      oldPrice: 300,
      image: "/images/t11.jpg",
      discount: 25,
    },
    {
      id: 3,
      name: "عباية يومية أنيقة",
      price: 150,
      oldPrice: 199,
      image: "/images/t3.jpg",
      discount: 30,
    },
    {
      id: 4,
      name: "عباية لكجري مفتوحة",
      price: 190,
      oldPrice: 260,
      image: "/images/a1.jpg",
      discount: 25,
    },
    {
      id: 5,
      name: "عباية رسمية مطرزة",
      price: 250,
      oldPrice: 330,
      image: "/images/n1.jpg",
      discount: 30,
    },
    {
      id: 6,
      name: "عباية صيفية خفيفة",
      price: 140,
      oldPrice: 180,
      image: "/images/t3.jpg",
      discount: 25,
    },
    {
      id: 7,
      name: "عباية قطنية مريحة",
      price: 160,
      oldPrice: 200,
      image: "/images/a2.jpg",
      discount: 30,
    },
    {
      id: 8,
      name: "عباية مطرزة باللؤلؤ",
      price: 280,
      oldPrice: 350,
      image: "/images/a3.jpg",
      discount: 25,
    },
    {
      id: 9,
      name: "عباية شتوية دافئة",
      price: 200,
      oldPrice: 250,
      image: "/images/t2.jpg",
      discount: 30,
    },
    {
      id: 10,
      name: "عباية عصرية أنيقة",
      price: 170,
      oldPrice: 220,
      image: "/images/n1.jpg",
      discount: 25,
    },
    {
      id: 11,
      name: "عباية كلاسيكية",
      price: 190,
      oldPrice: 240,
      image: "/images/t3.jpg",
      discount: 30,
    },
    {
      id: 12,
      name: "عباية صيفية خفيفة",
      price: 130,
      oldPrice: 170,
      image: "/images/a1.jpg",
      discount: 25,
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-white">

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '64px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }} className="text-[#0F0F0F] mb-4">
          العروض
        </h1>

      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {offersData.map((product) => (
            <div key={product.id}>
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                showOldPrice={true}
                variant="offer"
                discount={product.discount}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Digital Countdown Timer */}
      <div className="text-center mt-12">
        <div className="flex items-center justify-center mb-4">
          <FiClock className="text-red-600 mr-2" size={24} />
          <p className="text-gray-600 text-lg font-semibold">العرض ينتهي خلال:</p>
        </div>
        <div className="flex justify-center space-x-6">
          <div className="bg-gradient-to-br from-red-100 to-red-200 backdrop-blur-md text-red-900 border-2 border-red-400 px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse">
            <span className="text-4xl font-extrabold block">02</span>
            <span className="text-sm font-medium">أيام</span>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-red-200 backdrop-blur-md text-red-900 border-2 border-red-400 px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse">
            <span className="text-4xl font-extrabold block">14</span>
            <span className="text-sm font-medium">ساعات</span>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-red-200 backdrop-blur-md text-red-900 border-2 border-red-400 px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse">
            <span className="text-4xl font-extrabold block">30</span>
            <span className="text-sm font-medium">دقائق</span>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-red-200 backdrop-blur-md text-red-900 border-2 border-red-400 px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse">
            <span className="text-4xl font-extrabold block">45</span>
            <span className="text-sm font-medium">ثواني</span>
          </div>
        </div>
      </div>

    </div>
  );
}