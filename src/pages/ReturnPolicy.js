import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReturnPolicy = () => {
  return (
    <div className="relative min-h-screen" dir="rtl">

      {/* Background Image */}
     <img
        src="/images/bg.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      />
     

      <main className="pt-40 pb-24 container mx-auto px-6">

       
        {/* White Card */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl border border-gray-200 p-10">
 {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-12 text-black">
          سياسة الاسترجاع
        </h1>

          <div className="text-center text-lg leading-loose text-gray-700 space-y-4 return-policy">
            <p>استلام طلب خاطئ → استرجاع كامل</p>
            <p>استلام طلب ناقص</p>
            <p>غير قابل للاسترجاع بعد تعديل المقاسات</p>
            <p>الاسترجاع خلال ١ يوم</p>
            <p>معالجة الاسترجاع خلال ١٤ يوم</p>
            <p>المنتج يجب أن يكون بحالته الأصلية</p>
          </div>

        </div>
      </main>

     
    </div>
  );
};

export default ReturnPolicy;
