import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WashingGuide = () => {
  return (
   <div className="relative pt-5 pb-5 flex justify-center items-center px-6">
      <img
        src="/images/bg.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      />
     
      {/* Page Wrapper */}
      <main className="pt-40 pb-24 container mx-auto px-6">

        

        {/* Card Box */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl border border-gray-200 p-10">
{/* Title */}
        <h1 className="text-4xl font-bold text-center mb-12 text-black">
          تعليمات الغسيل و العنايه بالاقمشه
        </h1>
          <div className="text-center text-lg leading-loose text-gray-700 space-y-4 washing-tips">
            <p>يفضل الغسيل اليدوي بماء بارد</p>
            <p>في الغسالة وضع Delicate</p>
            <p>تجفيف بالظل</p>
            <p>كي بدرجة منخفضة</p>
            <p>تعليق على شماعة مبطنة</p>
            <p>عدم رش العطور مباشرة</p>
          </div>

        </div>
      </main>

      
    </div>
  );
};

export default WashingGuide;
