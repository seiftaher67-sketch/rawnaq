import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import card1 from '../card1.jpg';
import card2 from '../card2.jpg';
import card3 from '../card3.jpg';

const LimitedTimeOffers = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 30, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const marqueeText = "شحن مجاني لجميع الطلبات داخل السعودية لفترة محدودة";
  const spanStyle = { fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%' };
  const spans = Array.from({length: 20}, (_, i) => (
    <span key={i} className="inline-block px-16 text-center text-base font-semibold" style={spanStyle}>{marqueeText}</span>
  ));

  return (
    <div className="bg-gray-50 py-12 px-4">
      {/* Shipping Info Marquee */}
      <div className="bg-gray-600 text-white py-4 mb-8">
        <style dangerouslySetInnerHTML={{__html: `
          .animate-marquee {
            animation: marquee 80s linear infinite;
            display: inline-block;
            width: max-content;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
        `}} />
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {spans}{spans}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '48px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right', color: '#0F0F0F' }} className="mb-8">عروض محدودة لفترة قصيرة</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {/* Card 1 */}
          <div className="flex-shrink-0 w-64 flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow flex flex-col">
            <div className="relative bg-gray-100 h-80 flex-grow overflow-hidden">
              <img src="/images/1.png" alt="الفرقة" className="w-full h-full object-cover object-center" />
              <div className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded font-bold text-sm">25%</div>
            </div>
            <div className="p-3 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-sans text-lg font-bold text-left opacity-60" style={{ color: '#666666' }}>الفرقة</h3>
                <div className="flex flex-col text-right">
                  <p className="font-bold text-xl" style={{ color: '#8B1538' }}>250 <span className="text-sm">ريال</span></p>
                  <p className="text-sm" style={{ color: '#999999', textDecoration: 'line-through' }}>300 <span className="text-xs">ريال</span></p>
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-brand-black text-white py-2 px-3 rounded-full font-semibold hover:bg-brand-softBlack transition-colors text-xs">اشتري الآن</button>
                <button className="bg-gray-light border border-gray-200 rounded-full p-2 hover:bg-gray-light transition-colors flex-shrink-0">
                  <FiShoppingCart size={18} className="text-brand-black" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-64 flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow flex flex-col">
            <div className="relative bg-gray-100 h-80 flex-grow overflow-hidden">
              <img src="/images/2.png" alt="عبارة كتان" className="w-full h-full object-cover object-center" />
              <div className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded font-bold text-sm">25%</div>
            </div>
            <div className="p-3 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-sans text-lg font-bold text-left opacity-60" style={{ color: '#666666' }}>عبارة كتان</h3>
                <div className="flex flex-col text-right">
                  <p className="font-bold text-xl" style={{ color: '#8B1538' }}>250 <span className="text-sm">ريال</span></p>
                  <p className="text-sm" style={{ color: '#999999', textDecoration: 'line-through' }}>335 <span className="text-xs">ريال</span></p>
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-brand-black text-white py-2 px-3 rounded-full font-semibold hover:bg-brand-softBlack transition-colors text-xs">اشتري الآن</button>
                <button className="bg-gray-light border border-gray-200 rounded-full p-2 hover:bg-gray-light transition-colors flex-shrink-0">
                  <FiShoppingCart size={18} className="text-brand-black" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-64 flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow flex flex-col">
            <div className="relative bg-gray-100 h-80 flex-grow overflow-hidden">
              <img src="/images/3.png" alt="طرحة قطن" className="w-full h-full object-cover object-center" />
              <div className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded font-bold text-sm">25%</div>
            </div>
            <div className="p-3 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-sans text-lg font-bold text-left opacity-60" style={{ color: '#666666' }}>طرحة قطن</h3>
                <div className="flex flex-col text-right">
                  <p className="font-bold text-xl" style={{ color: '#8B1538' }}>250 <span className="text-sm">ريال</span></p>
                  <p className="text-sm" style={{ color: '#999999', textDecoration: 'line-through' }}>300 <span className="text-xs">ريال</span></p>
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-brand-black text-white py-2 px-3 rounded-full font-semibold hover:bg-brand-softBlack transition-colors text-xs">اشتري الآن</button>
                <button className="bg-gray-light border border-gray-200 rounded-full p-2 hover:bg-gray-light transition-colors flex-shrink-0">
                  <FiShoppingCart size={18} className="text-brand-black" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 w-64 flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow flex flex-col">
            <div className="relative bg-gray-100 h-80 flex-grow overflow-hidden">
              <img src="/images/4.jpg" alt="عبارة كتان" className="w-full h-full object-cover object-center" />
              <div className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded font-bold text-sm">25%</div>
            </div>
            <div className="p-3 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-sans text-lg font-bold text-left opacity-60" style={{ color: '#666666' }}>عبارة كتان</h3>
                <div className="flex flex-col text-right">
                  <p className="font-bold text-xl" style={{ color: '#8B1538' }}>250 <span className="text-sm">ريال</span></p>
                  <p className="text-sm" style={{ color: '#999999', textDecoration: 'line-through' }}>300 <span className="text-xs">ريال</span></p>
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-brand-black text-white py-2 px-3 rounded-full font-semibold hover:bg-brand-softBlack transition-colors text-xs">اشتري الآن</button>
                <button className="bg-gray-light border border-gray-200 rounded-full p-2 hover:bg-gray-light transition-colors flex-shrink-0">
                  <FiShoppingCart size={18} className="text-brand-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Countdown Timer */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">العرض ينتهي خلال:</p>
          <div className="flex justify-center space-x-4">
            <div className="bg-red-500 text-white px-4 py-2 rounded">
              <span className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span><br/>أيام
            </div>
            <div className="bg-red-500 text-white px-4 py-2 rounded">
              <span className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span><br/>ساعات
            </div>
            <div className="bg-red-500 text-white px-4 py-2 rounded">
              <span className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span><br/>دقائق
            </div>
            <div className="bg-red-500 text-white px-4 py-2 rounded">
              <span className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span><br/>ثواني
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeOffers;
