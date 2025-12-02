import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
          <div className="grid gap-8 grid-cols-1 md:grid-cols-12">
            {/* Card 1 - Left (Narrower) */}
            <div
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 h-[32rem] md:col-span-3"
              onClick={() => handleCardClick('card1')}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c4121e5f8af449fab8ea450fd7ca0fa%2Fe597cd5b1c2f4efab93435c4e88e1130?format=webp&width=800"
                alt="عرض خاص 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent flex items-end justify-center pb-8">
                <div className="text-center text-white px-4">
                  <h3 className="text-6xl font-bold mb-4 italic" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>30%</h3>
                  <p className="text-lg font-semibold leading-snug italic" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>خصومات مريحة على العبايات الفاخرة</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Right (Wider) */}
            <div
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 h-[32rem] md:col-span-9"
              onClick={() => handleCardClick('card2')}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c4121e5f8af449fab8ea450fd7ca0fa%2F993fa82ac6e34b52b97706f88e500849?format=webp&width=800"
                alt="عرض خاص 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent flex items-end justify-center pb-8">
                <div className="text-center text-white px-4">
                  <p className="text-sm font-medium mb-3 italic" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>عرض خاص</p>
                  <p className="text-2xl font-bold mb-3 leading-relaxed italic" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7)'}}>احصلي على الأناقة إلى ذروة بك</p>
                  <p className="text-sm leading-relaxed italic" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>حصول إلى أرقى وأسمى متطلبات الجمال والأناقة</p>
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
      <Footer />
    </div>
  );
};

export default Home;
