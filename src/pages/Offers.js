// src/pages/Offers.js

import { useState } from 'react';
import ProductCard from "../components/ProductCard.jsx";

export default function Offers() {
  const [selectedProductType, setSelectedProductType] = useState('');
  const [selectedFabric, setSelectedFabric] = useState('');

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

      {/* Filter Section */}
      <div className="container mx-auto px-20 mb-12">
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between shadow-sm">

          {/* Product Type */}
          <div className="relative w-full md:w-1/2">
            <select
              value={selectedProductType}
              onChange={(e) => setSelectedProductType(e.target.value)}
              className="w-full appearance-none p-4 border border-gray-300 rounded-full text-black bg-white"
              style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}
            >
              <option value="">نوع المنتج</option>
              <option value="عباية">عباية</option>
              <option value="طرحة">طرحة</option>
              <option value="نقاب">نقاب</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-black">
              ▼
            </span>
          </div>

          {/* Fabric Type */}
          <div className="relative w-full md:w-1/2">
            <select
              value={selectedFabric}
              onChange={(e) => setSelectedFabric(e.target.value)}
              className="w-full appearance-none p-4 border border-gray-300 rounded-full text-black bg-white"
              style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}
            >
              <option value="">نوع القماش</option>
              <option value="قطن">قطن</option>
              <option value="كريب">كريب</option>
              <option value="حرير">حرير</option>
              <option value="كتان">كتان</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-black">
              ▼
            </span>
          </div>

          {/* Apply Filter Button */}
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto px-6 py-4 border border-gray-300 rounded-lg text-white bg-black hover:bg-gray-800 flex items-center justify-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19S3 15.4183 3 11 6.58172 3 11 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-10">
        <div className="flex flex-wrap gap-6 justify-center">
          {offersData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

    </div>
  );
}