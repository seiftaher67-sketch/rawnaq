import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "ظننت مبدأ أن العياب أمر بهيج للتراث لكني وجدت انه يعطيك حضور وثقة كبيرة جداً رائع فعلا وصل الطلب في وقت وجيز والخامة ممتازة وراقية جداً وشكراً لكم كثير شكراً على الشحن السريع حقيقة انتم الأفضل",
      name: "سارة خالد",
      image: "/images/t2.jpg",
      rating: 5
    },
    {
      id: 2,
      text: "عملت بحثا وتوازن كثير قبل ما اشتري والحمد لله اختيار موفق جداً الجودة رائعة والألوان والتصميمات حلوة جداً والتوصيل سريع والعاملين في الشركة لطيفين جداً شكراً لكم",
      name: "مريم أحمد",
      image: "/images/t3.jpg",
      rating: 5
    },
    {
      id: 3,
      text: "متشكرة جداً على الجودة العالية والاهتمام بالتفاصيل كل شيء رائع جداً من اختيار الخامة إلى التغليف والشحن كل شيء احترافي وراقي جداً سأتسوق منكم مرة أخرى بكل تأكيد",
      name: "هبة إبراهيم",
      image: "/images/t11.jpg",
      rating: 5
    },
    {
      id: 4,
      text: "تجربة تسوق رائعة جداً بكل صراحة الموقع سهل جداً والمنتجات بجودة عالية والأسعار مقبولة جداً والشحن كان سريع وحريص على المنتج والحمد لله وصل بحالة ممتازة أنصح الجميع بالشراء منكم",
      name: "فاطمة محمد",
      image: "/images/t2.jpg",
      rating: 5
    },
    {
      id: 5,
      text: "أول مرة أشتري منكم والحمد لله كانت تجربة ممتازة جداً الموظفات لطيفات جداً والمنتج جيد والتغليف احترافي جداً بصراحة ستكون مشترية دائمة أشكركم على هذا الاهتمام واستمروا بهذا المستوى الراقي",
      name: "ليلى علي",
      image: "/images/t3.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-16 mb-20 bg-gray-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="mb-1" style={{ fontFamily: 'Amiri', fontWeight: 400, fontStyle: 'Regular', fontSize: '36px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }}>
            ثقة عملاؤنا هي سر تميزنا ، اكتشفي تجاربهم
            معنا          </h2>

        </div>

        {/* Testimonials Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full px-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 border border-gray-light transition-all duration-300 hover:border-gray-medium hover:shadow-md group group-hover:text-gray-800"
              >
                {/* Review Text */}
                <p style={{ fontFamily: 'Amiri', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '1.5', letterSpacing: '0%', textAlign: 'center' }}>
                  {testimonial.text}
                </p>

                {/* Star Rating */}
                <div className="mb-4 group-hover:brightness-75 transition-all duration-300" style={{ display: 'flex', justifyContent: 'center', transform: 'rotate(0deg)', opacity: 1, position: 'relative', top: '10px', left: '27px', gap: '2px' }}>
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src="/images/ngmaa.png"
                      alt="Rating"
                      style={{
                        width: '17.122604370117188px',
                        height: '16.353347778320312px',
                        transform: 'rotate(0deg)',
                        opacity: 1,
                        position: 'relative',
                        top: '3.58px',
                        left: '3.44px'
                      }}
                    />
                  ))}
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3 justify-start mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 style={{ fontFamily: 'Amiri', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
