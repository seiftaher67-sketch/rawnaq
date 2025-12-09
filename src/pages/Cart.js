import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart } from "react-icons/fi";
import Header from "../components/Header";

const Cart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    apartment: "",
    saveData: false,
  });

  const products = [
    {
      id: 1,
      name: "عباية كتان",
      code: "JM303",
      price: 250,
      image: "/images/a1.jpg",
      discount: 25,
    },
    {
      id: 2,
      name: "طرحة قطن",
      code: "JM303",
      price: 250,
      image: "/images/a2.jpg",
      discount: 25,
    },
    {
      id: 3,
      name: "عباية كتان",
      code: "JM303",
      price: 250,
      image: "/images/a3.jpg",
      discount: 25,
    },
    {
      id: 4,
      name: "طرحة قطن",
      code: "JM303",
      price: 250,
      image: "/images/a4.jpg",
      discount: 25,
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites({
      ...favorites,
      [id]: !favorites[id],
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(products[(currentIndex + i) % products.length]);
    }
    return visible;
  };

  const visibleProducts = getVisibleProducts();
  const subtotal = products.reduce((sum, item) => sum + item.price, 0);
  const shipping = 20;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div dir="rtl" className="flex-grow pt-40 pb-24 bg-white container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-16 text-black">
          عربة التسوق
        </h1>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-6 px-4 mb-16">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="bg-brand-black text-white rounded-full p-3 hover:bg-brand-softBlack transition-colors flex-shrink-0"
            aria-label="السابق"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Product Cards Container */}
          <div className="flex gap-6 flex-1 overflow-hidden">
            {visibleProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow flex flex-col"
              >
                {/* Product Image Container */}
                <div className="relative bg-gray-100 h-[28rem] flex-grow overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Heart Icon - Top Left */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-soft hover:bg-gray-light transition-colors"
                  >
                    <FiHeart
                      size={20}
                      className={favorites[product.id] ? "fill-red-500 text-red-500" : "text-gray-dark"}
                    />
                  </button>

                  {/* Discount Badge - Top Right */}
                  <div className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded font-bold text-sm">
                    {product.discount}%
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 flex flex-col">
                  {/* Name and Price Row */}
                  <div className="flex justify-between items-center mb-3">
                    {/* Product Name - Left */}
                    <h3 className="font-sans text-lg font-bold text-left opacity-60" style={{ color: "#666666" }}>
                      {product.name}
                    </h3>

                    {/* Price Section - Right */}
                    <div className="flex flex-col text-right">
                      {/* Current Price */}
                      <p className="font-bold text-xl" style={{ color: "#8B1538" }}>
                        {product.price} <span className="text-sm">ريال</span>
                      </p>
                      {/* Original Price - Strikethrough */}
                      <p className="text-sm" style={{ color: "#999999", textDecoration: "line-through" }}>
                        {product.price + 50} <span className="text-xs">ريال</span>
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <button className="flex-1 bg-brand-black text-white py-2 px-3 rounded-full font-semibold hover:bg-brand-softBlack transition-colors text-xs">
                      اشتري الآن
                    </button>
                    <button className="bg-gray-light border border-gray-200 rounded-full p-2 hover:bg-gray-light transition-colors flex-shrink-0">
                      <FiShoppingCart size={18} className="text-brand-black" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-brand-black text-white rounded-full p-3 hover:bg-brand-softBlack transition-colors flex-shrink-0"
            aria-label="التالي"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Summary Section Below Cards */}
        <div className="flex justify-center mt-12 px-4">
          <div style={{ maxWidth: 'calc(100% - 200px)' }} className="w-full">
            <div className="bg-gray-100 rounded-xl border border-gray-300 p-8 flex flex-col justify-center">
              <div className="space-y-4 text-right">
                <div className="flex justify-between items-center" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
                  <span className="text-gray-700">مبيع إجمالي</span>
                  <span className="text-gray-700">
                    {subtotal}
                    <span className="mr-1">ريال</span>
                  </span>
                </div>
                <div className="flex justify-between items-center" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
                  <span className="text-gray-700">مصاريف التوصيل</span>
                  <span className="text-gray-700">
                    {shipping}
                    <span className="mr-1">ريال</span>
                  </span>
                </div>
                <div className="flex justify-between items-center" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
                  <span className="text-gray-800">المبيع كامل</span>
                  <span className="text-gray-800">
                    {total}
                    <span className="mr-1">ريال</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Information Section */}
        <div className="mt-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Right: Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-right" style={{ fontFamily: 'Calibri', fontWeight: 700, fontSize: '32px' }}>
                أدخل معلوماتك
              </h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-right text-gray-700 font-semibold mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    dir="rtl"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-right text-gray-700 font-semibold mb-2">
                    رقم الجوال
                  </label>
                  <input
                    type="tel"
                    placeholder="أدخل رقم جوالك"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    dir="rtl"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-right text-gray-700 font-semibold mb-2">
                    العنوان
                  </label>
                  <input
                    type="text"
                    placeholder="أدخل العنوان"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    dir="rtl"
                  />
                </div>

                {/* Apartment Number */}
                <div>
                  <label className="block text-right text-gray-700 font-semibold mb-2">
                    رقم الشقة
                  </label>
                  <input
                    type="text"
                    placeholder="رقم المنزل / رقم الشقة"
                    value={formData.apartment}
                    onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    dir="rtl"
                  />
                </div>

                {/* Save Data Checkbox */}
                <div className="flex items-center justify-end gap-3 mt-6">
                  <label className="text-right text-gray-700">
                    احفظ هذه المعلومات للمرة القادمة
                  </label>
                  <input
                    type="checkbox"
                    checked={formData.saveData}
                    onChange={(e) => setFormData({ ...formData, saveData: e.target.checked })}
                    className="w-5 h-5 rounded border border-gray-300 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Left: Map */}
            <div className="rounded-2xl overflow-hidden h-96 bg-gray-200 border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1748299999996!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43363ff851d1%3A0x32cab5c13cd15a9e!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
