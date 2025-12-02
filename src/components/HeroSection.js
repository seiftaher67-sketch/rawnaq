import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative text-white overflow-hidden h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/images/Frau(MP4).mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col h-full">
          <div className="flex-grow flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-ruqah italic">
                   أناقتك تبدا من هنا
                </h1>
                <p className="text-lg md:text-2xl mt-[52px] mb-4 opacity-90 leading-relaxed font-ruqah italic font-bold">
                  اكتشفي تشكيلتنا الراقية من العبايات والنقابات والطرح المصممة بعناية لتمنحك احتشامًا يليق بكِ،
                </p>
                <p className="text-lg md:text-2xl mt-[-10px] mb-8 opacity-90 leading-relaxed font-ruqah italic font-bold">
                   وخامات فاخرة تجمع بين الراحة والأناقة في كل مناسبة
                </p>
                <Link to="/offers">
                    <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-110 hover:-translate-y-1 hover:font-bold transition-all duration-300 shadow-lg">
                    تسوقي الآن
                    </button>
                </Link>
                </div>
            </div>
          </div>
          
      </div>
    </section>
  );
};

export default HeroSection;
