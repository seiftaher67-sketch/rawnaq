import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logooo from "../logooo.png";

const WashingGuide = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <img
        src="/images/bg.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      />

      {/* Page Wrapper */}
      <main className="flex-grow pt-40 pb-24 container mx-auto px-6 max-w-5xl">
        {/* Card Box */}
        <div className="bg-white rounded-3xl border-2 border-gray-400 p-12">
          {/* Title with border */}
          <div className="border-2 border-gray-500 rounded-2xl px-8 py-4 mb-12 inline-block mx-auto block">
            <h1 style={{
              fontFamily: 'Calibri',
              fontWeight: 700,
              fontStyle: 'Bold',
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'right'
            }}>
              تعليمات الغسيل و العناية بالقطاعة
            </h1>
          </div>

          {/* Warning Text */}
          <p style={{
            fontFamily: 'Calibri',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '24px',
            leadingTrim: 'NONE',
            lineHeight: '24px',
            letterSpacing: '0%',
            textAlign: 'right'
          }} className="text-red-700 mb-8">
            حتى تحافظين على عبايتك عند غسلها عليك أن تهتمي بها في هذه الخطوات كثيرا
          </p>

          {/* Instructions with bullets */}
          <div className="space-y-2 mb-12 text-right">
            <p style={{
              fontFamily: 'Calibri',
              fontWeight: 600,
              fontStyle: 'Regular',
              fontSize: '24px',
              leadingTrim: 'NONE',
              lineHeight: '48px',
              letterSpacing: '0%',
              textAlign: 'right',
              color: '#000000'
            }}>
              <span className="text-xl mr-3">•</span>
              يفضل الغسيل اليدوي بماء بارد ومنظفات لطيفة.
            </p>
            <p style={{
              fontFamily: 'Calibri',
              fontWeight: 600,
              fontStyle: 'Regular',
              fontSize: '24px',
              leadingTrim: 'NONE',
              lineHeight: '48px',
              letterSpacing: '0%',
              textAlign: 'right',
              color: '#000000'
            }}>
              <span className="text-xl mr-3">•</span>
              في الغسالة استخدمي وضع Delicate ووضعها في كيس غسيل.
            </p>
            <p style={{
              fontFamily: 'Calibri',
              fontWeight: 600,
              fontStyle: 'Regular',
              fontSize: '24px',
              leadingTrim: 'NONE',
              lineHeight: '48px',
              letterSpacing: '0%',
              textAlign: 'right',
              color: '#000000'
            }}>
              <span className="text-xl mr-3">•</span>
              تجفيف في الظل دون عصر أو نشاف.
            </p>
            <p style={{
              fontFamily: 'Calibri',
              fontWeight: 600,
              fontStyle: 'Regular',
              fontSize: '24px',
              leadingTrim: 'NONE',
              lineHeight: '48px',
              letterSpacing: '0%',
              textAlign: 'right',
              color: '#000000'
            }}>
              <span className="text-xl mr-3">•</span>
              كي القماش بحرارة منخفضة ومن الداخل.
            </p>
            <p style={{
              fontFamily: 'Calibri',
              fontWeight: 600,
              fontStyle: 'Regular',
              fontSize: '24px',
              leadingTrim: 'NONE',
              lineHeight: '48px',
              letterSpacing: '0%',
              textAlign: 'right',
              color: '#000000'
            }}>
              <span className="text-xl mr-3">•</span>
              تعليق على شماعة مبطنة والتحفيظ في مكان جاف.
            </p>
            <p style={{
              fontFamily: 'Calibri',
              fontWeight: 600,
              fontStyle: 'Regular',
              fontSize: '24px',
              leadingTrim: 'NONE',
              lineHeight: '48px',
              letterSpacing: '0%',
              textAlign: 'right',
              color: '#000000'
            }}>
              <span className="text-xl mr-3">•</span>
              تجنب رش العطور مباشرة على القماش.
            </p>
          </div>

          {/* Logo at bottom */}
          <div className="relative flex justify-end pt-8">
            <img
              src={logooo}
              alt="RAWNAQ Logo"
              className="h-24 mt-6 mr-4"
              style={{ filter: 'brightness(0.8) saturate(1.8) sepia(0.3)' }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WashingGuide;
