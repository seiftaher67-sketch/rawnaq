import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logooo from "../logooo.png";

const ReturnPolicy = () => {
  return (
    <div className="relative min-h-screen flex flex-col" dir="rtl">
      {/* Background Image */}
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
              سياسة الاسترجاع والاستبدال والاسترجاع
            </h1>
          </div>

          {/* Warning Text */}
          <p style={{
            fontFamily: 'Calibri',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '24px',
            leadingTrim: 'NONE',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'right'
          }} className="text-red-700 mb-8">
            يمكن استرجاع او استبدال المنتج في الحالات التالية
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
              <span className="text-xl ml-3">•</span>
              استلام العميل لطلب خاطئ. (يتم استرداد قيمة الطلب للعميل).
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
              <span className="text-xl ml-3">•</span>
              استلام العميل لطلب ناقص. (يتم تسليم العميل الطلب الناقص او استرداد قيمة المنتج الناقص).
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
              <span className="text-xl ml-3">•</span>
              يمكنك استبدال أو استرجاع منتجاتنا في حالة عدم مطابقتها للمواصفات المتفق عليها مع العميل ، أو في حالة الخطأ في التسليم أو الخطأ في التنفيذ الغير ناتج عن إهمال العميل.
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
              <span className="text-xl ml-3">•</span>
              في حال تم التعديل على مقاسات العباية، لايمكن استراجاعها او استبدالها.
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
              <span className="text-xl ml-3">•</span>
              يقدم طلب الاسترجاع طبقًا للفقرة السابقة خلال 1 يوم من تاريخ استلام العميل للخدمات أو المنتجات.
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
              <span className="text-xl ml-3">•</span>
              يمكنك استبدال العباية قبل اكمال 6 ساعات من وقت الطلب (خلال 6 ساعة).
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
              <span className="text-xl ml-3">•</span>
              عند الاسترداد سيتم معالجة طلبك وتحويل المبلغ خلال 14 يوم عمل من تاريخ استلام المنتج
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
              <span className="text-xl ml-3">•</span>
              يجب ان تكون العباية بحالتها الاصلية وبجميع ملحقاتها.
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

export default ReturnPolicy;
