import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import ProductCarousel from '../components/ProductCarousel';
import im1 from '../im1.jpeg';

const Home = () => {
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
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}} />
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <span className="inline-block px-16 text-center text-base font-semibold">شحن مجاني على جميع الطلبات فوق 100 ريال</span>
            <span className="inline-block px-16 text-center text-base font-semibold">توصيل سريع في 24-48 ساعة</span>
            <span className="inline-block px-16 text-center text-base font-semibold">ضمان استرجاع المبلغ خلال 30 يوم</span>
            <span className="inline-block px-16 text-center text-base font-semibold">شحن مجاني على جميع الطلبات فوق 100 ريال</span>
            <span className="inline-block px-16 text-center text-base font-semibold">توصيل سريع في 24-48 ساعة</span>
            <span className="inline-block px-16 text-center text-base font-semibold">ضمان استرجاع المبلغ خلال 30 يوم</span>
            <span className="inline-block px-16 text-center text-base font-semibold">شحن مجاني على جميع الطلبات فوق 100 ريال</span>
            <span className="inline-block px-16 text-center text-base font-semibold">توصيل سريع في 24-48 ساعة</span>
            <span className="inline-block px-16 text-center text-base font-semibold">ضمان استرجاع المبلغ خلال 30 يوم</span>
            <span className="inline-block px-16 text-center text-base font-semibold">شحن مجاني على جميع الطلبات فوق 100 ريال</span>
            <span className="inline-block px-16 text-center text-base font-semibold">توصيل سريع في 24-48 ساعة</span>
            <span className="inline-block px-16 text-center text-base font-semibold">ضمان استرجاع المبلغ خلال 30 يوم</span>
          </div>
        </div>
      </div>

      {/* Promotional Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            {/* Card 2 - Left (Narrower) - صورة قريبة */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 h-[600px] md:w-1/3"
              onClick={() => handleCardClick('card2')}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c4121e5f8af449fab8ea450fd7ca0fa%2Fe597cd5b1c2f4efab93435c4e88e1130?format=webp&width=800"
                alt="عرض خاص 1"
                className="w-full h-full object-cover"
        
        />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <p className="text-lg font-bold mb-2 leading-tight italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontStyle: 'italic'}}>عرض الموسم</p>
                  <p className="text-lg font-bold mb-2 leading-tight italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontStyle: 'italic'}}>اختاري التفصيلة التي تليق بك</p>
                  <p className="text-sm leading-relaxed italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontStyle: 'italic', color: '#f0f0f0'}}>تسوقي الآن من تشكيلتنا التي تجمع بين اللمسة<br/>العصرية والأناقة الكلاسيكية</p>
                </div>
              </div>
            </div>

            {/* Card 1 - Right (Wider) - صورة المرأة في الصحراء */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 h-[600px] md:w-1/2"
              onClick={() => handleCardClick('card1')}
            >
              <img
                src={im1}
                alt="عرض خاص 2"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <p className="text-lg font-bold mb-2 leading-tight italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontStyle: 'italic'}}>تألقى الآن بخصم خاص</p>
                  <p className="text-8xl font-extrabold mb-2 italic" style={{textShadow: '4px 4px 8px rgba(0,0,0,0.9)', fontStyle: 'italic', color: '#FFD700'}}>30%</p>
                  <p className="text-base leading-relaxed italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontStyle: 'italic'}}>خصومات موسمية على العبايات الفاخرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Collection / Featured Products Section */}
      <ProductCarousel />
    </div>
  );
};

export default Home;
