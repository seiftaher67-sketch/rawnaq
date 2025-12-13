import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductCarousel from '../components/ProductCarousel';
import Testimonials from '../components/Testimonials';
import im1 from '../im1.jpeg';
import CategorySection from '../components/CategorySection';

const Home = () => {
  const marqueeTexts = [
    "شحن مجاني لجميع الطلبات داخل السعودية لفترة محدودة",
    "خصم 30% على العبايات الفاخرة",
    "عروض موسمية على الإكسسوارات"
  ];
  const spans = Array.from({length: 100}, (_, i) => (
    <span key={i} className="inline-block px-8 text-center font-calibri text-base font-normal leading-none tracking-normal">{marqueeTexts[i % marqueeTexts.length]}</span>
  ));
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <CategorySection />

      {/* Shipping Info Marquee */}
      <div className="bg-gray-medium text-white py-4">
        <style dangerouslySetInnerHTML={{__html: `
          .animate-marquee {
            animation: marquee 80s linear infinite;
            display: inline-block;
            width: max-content;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}} />
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {spans}{spans}
          </div>
        </div>
      </div>

      {/* Promotional Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            {/* Card 2 - Left (Narrower) - صورة قريبة */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 w-full h-[20rem] sm:h-[24rem] md:h-[28rem] md:w-1/3"
              onClick={() => handleCardClick('card2')}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c4121e5f8af449fab8ea450fd7ca0fa%2Fe597cd5b1c2f4efab93435c4e88e1130?format=webp&width=800"
                alt="عرض خاص 1"
                className="w-full h-full object-cover"
        
        />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <p className="text-base sm:text-lg font-bold mb-2 leading-tight italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontStyle: 'italic'}}>عرض الموسم</p>
                  <p className="text-base sm:text-lg font-bold mb-2 leading-tight italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontStyle: 'italic'}}>اختاري التفصيلة التي تليق بك</p>
                  <p className="text-xs sm:text-sm leading-relaxed italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontStyle: 'italic', color: '#f0f0f0'}}>تسوقي الآن من تشكيلتنا التي تجمع بين اللمسة<br/>العصرية والأناقة الكلاسيكية</p>
                </div>
              </div>
            </div>

            {/* Card 1 - Right (Wider) - صورة المرأة في الصحراء */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 w-full h-[20rem] sm:h-[24rem] md:h-[28rem] md:w-1/2"
              onClick={() => handleCardClick('card1')}
            >
              <img
                src={im1}
                alt="عرض خاص 2"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <p className="text-base sm:text-lg font-bold mb-2 leading-tight italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontStyle: 'italic'}}>تألقى الآن بخصم خاص</p>
                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-2 italic" style={{textShadow: '4px 4px 8px rgba(0,0,0,0.9)', fontStyle: 'italic', color: '#FFD700'}}>30%</p>
                  <p className="text-sm sm:text-base leading-relaxed italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontStyle: 'italic'}}>خصومات موسمية على العبايات الفاخرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Collection / Featured Products Section */}
      <ProductCarousel />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;
