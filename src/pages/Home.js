import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import Testimonials from '../components/Testimonials';

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
          <div className="flex flex-col md:flex-row gap-6">
            {/* Card 1 - Left (Wider) - صورة المرأة في الصحراء */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 h-[400px] md:flex-[1.5]"
              onClick={() => handleCardClick('card1')}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c4121e5f8af449fab8ea450fd7ca0fa%2F993fa82ac6e34b52b97706f88e500849?format=webp&width=800"
                alt="عرض خاص 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <p className="text-xs font-normal mb-2" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>عرض الموسم</p>
                  <p className="text-lg font-bold mb-2 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>اختاري الفضية إلى تليق بك</p>
                  <p className="text-xs leading-relaxed" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>تسوق الآن من مكتبة الخاصة في جميع متاجرنا<br/>الشامل والجميلة الآن اليومية</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Right (Narrower) - صورة قريبة */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 h-[400px] md:flex-[1]"
              onClick={() => handleCardClick('card2')}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c4121e5f8af449fab8ea450fd7ca0fa%2Fe597cd5b1c2f4efab93435c4e88e1130?format=webp&width=800"
                alt="عرض خاص 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <p className="text-xs font-normal mb-2" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>عرض الموسم</p>
                  <p className="text-lg font-bold mb-2 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>اختاري الفضية إلى تليق بك</p>
                  <p className="text-xs leading-relaxed" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>تسوق الآن من مكتبة الخاصة في جميع متاجرنا<br/>الشامل والجميلة الآن اليومية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Collection / Featured Products Section */}
      <section className="featured-products">
        <h2>New Collection</h2>
        {/* Product cards will be added here */}
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;
