import { FiHeart, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SimilarProducts from "../components/SimilarProducts.jsx";
import { getProductById } from "../data/products";


export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [mainImage, setMainImage] = useState(product?.image || "/images/a1.jpg");
  const [isFavorite, setIsFavorite] = useState(false);
  const [hoveredThumbnail, setHoveredThumbnail] = useState(null);
  const [showMeasurementsModal, setShowMeasurementsModal] = useState(false);
  const [showImage, setShowImage] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-24 container mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold">المنتج غير موجود</h1>
      </div>
    );
  }

  const thumbnails = product.thumbnails || Array(10).fill(product.image);

  return (
    <div className="pt-32 pb-24 container mx-auto px-6" dir="rtl">
      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* RIGHT – PRODUCT INFO */}
        <div className="flex flex-col" style={{ minHeight: '708px', marginRight: '240px' }}>
          {/* Title */}
          <h1 className="mb-2" style={{
            fontFamily: 'Calibri',
            fontWeight: 400,
            fontStyle: 'Regular',
            fontSize: '60px',
            leadingTrim: 'NONE',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#030303',
            marginTop: '-10px',
            textAlign: 'right'
          }}>
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-4" style={{ marginTop: '10px' }}>
            <div className="flex" style={{ gap: '4px' }}>
              {Array.from({ length: 5 }, (_, i) => i < product.rating ? 'filled' : 'empty').map((type, index) => (
                type === 'filled' ? (
                  <img key={index} src="/images/ng.png" alt="star" style={{
                    width: '28px',
                    height: '27px',
                    display: 'inline-block'
                  }} />
                ) : (
                  <span key={index} style={{
                    width: '28px',
                    height: '27px',
                    color: '#030303',
                    fontFamily: 'Calibri',
                    fontSize: '22px',
                    display: 'inline-block',
                    textAlign: 'center',
                    lineHeight: '27px'
                  }}>
                    ☆
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span style={{
              fontFamily: 'Calibri',
              fontWeight: 700,
              fontStyle: 'Bold',
              fontSize: '40px',
              leadingTrim: 'NONE',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#950000'
            }}>{product.price} <img src="/images/ry.jpeg" alt="ريال" className="inline-block" style={{ width: '40px', height: '40px' }} /></span>
            <span className="text-xl text-gray-400 line-through" style={{ fontFamily: 'Calibri' }}>{product.originalPrice} <img src="/images/ry.jpeg" alt="ريال" className="inline-block" style={{ width: '20px', height: '20px' }} /></span>
          </div>

          {/* Size Guide Link */}
          <a href="#" className="text-gray-600 underline mb-6 block" style={{
            fontFamily: 'Calibri',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '32px',
            leadingTrim: 'none',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'right',
            textDecoration: 'underline',
            textDecorationStyle: 'solid',
            textDecorationOffset: '14%',
            textDecorationThickness: '4%',
            textDecorationSkipInk: 'auto'
          }}>جدول المقاسات</a>

          {/* Sizes */}
          <div className="mb-6" style={{ marginTop: '10px' }}>
            <h3 className="font-semibold text-lg mb-3" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '40px', leadingTrim: 'none', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>المقاسات</h3>
            <div className="flex gap-3 flex-wrap">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => { console.log('Size selected:', s); setSize(s); }}
                  className={`px-8 py-2 rounded-lg border-2 font-semibold transition text-center ${size === s
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-500 hover:border-black hover:text-black"
                    }`}
                  style={{
                    fontFamily: 'Calibri',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '32px',
                    leadingTrim: 'none',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    width: '99px',
                    height: '48px',
                    borderRadius: '25px',
                    borderWidth: '0.5px',
                    opacity: 1,
                    transform: 'rotate(0deg)'
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4" style={{ width: '445px' }}>
            <div className="mb-6" style={{ marginTop: '10px' }}>
              <h3 className="font-semibold text-lg" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '40px', leadingTrim: 'none', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>الكمية</h3>
            </div>
            <div className="flex items-center border-2 border-gray-300 rounded-full w-fit" style={{ marginTop: '10px' }}>
              <button onClick={() => setQty(qty + 1)} className="text-2xl px-5 py-2" style={{ fontFamily: 'Calibri' }}>
                <FiPlus />
              </button>
              <span className="font-semibold text-xl px-5" style={{ fontFamily: 'Calibri' }}>{qty}</span>
              <button onClick={() => qty > 1 && setQty(qty - 1)} className="text-2xl px-5 py-2" style={{ fontFamily: 'Calibri' }}>
                <FiMinus />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between" style={{ width: '445px' }}>
            <div className="mb-6" style={{ marginTop: '10px' }}>
              <h3 className="font-semibold text-lg" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '40px', leadingTrim: 'none', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right', color: '#010127' }}>الالوان</h3>
            </div>
            <div className="flex gap-3" style={{ marginTop: '10px' }}>
              {[
                { value: "red", color: "#590000" },
                { value: "blue", color: "#010127" },
                { value: "gray", color: "#81888E" },
                { value: "black", color: "#030303" },
              ].map((c) => (
                <button
                  key={c.value}
                  onClick={() => { console.log('Color selected:', c.value); setColor(c.value); }}
                  className={`w-10 h-10 rounded-md transition ${color === c.value
                    ? "ring-2 ring-offset-2 ring-black border-2 border-white"
                    : ""
                    }`}
                  style={{ backgroundColor: c.color }}
                />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4" style={{ marginTop: '30px', marginBottom: '0', marginLeft: '50px' }}>
            <button
              className="bg-black text-white font-bold text-lg hover:bg-gray-800 transition"
              style={{
                width: '445px',
                height: '66px',
                borderRadius: '50px',
                borderWidth: '1px',
                opacity: 1,
                fontFamily: 'Calibri'
              }}
            >
              اشتري الآن
            </button>
            <button
              className="border-2 border-black text-black font-bold text-lg hover:bg-gray-100 transition"
              style={{
                width: '445px',
                height: '66px',
                borderRadius: '50px',
                borderWidth: '1px',
                opacity: 1,
                fontFamily: 'Calibri'
              }}
            >
              أضف إلى السلة
            </button>
          </div>
        </div>

        {/* LEFT – IMAGES */}
        <div className="flex flex-row gap-4" style={{ marginLeft: '90px', marginRight: '30px' }}>
          {/* MAIN IMAGE */}
          <div className="relative flex-1" style={{ width: '505px', height: '708px', transform: 'rotate(0deg)', opacity: 1, borderRadius: '5px' }}>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg z-10"
            >
              <FiHeart
                className={`text-2xl transition ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-700"
                  }`}
              />
            </button>
            <img
              src={mainImage}
              className="w-full h-full object-cover"
              alt="product"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex flex-col gap-3 overflow-y-auto h-[708px] pl-2">
            {thumbnails.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                onMouseEnter={() => setHoveredThumbnail(index)}
                onMouseLeave={() => setHoveredThumbnail(null)}
                className="relative w-24 overflow-hidden border-2 border-gray-200 transition flex-shrink-0"
                style={{
                  width: '96px',
                  height: '132px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  borderRadius: '5px'
                }}
              >
                <img
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover transition"
                  style={{
                    filter: hoveredThumbnail === index ? 'brightness(0.8)' : 'none'
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* DESCRIPTION (same as page 48) */}
      <div className="border-t pt-16 border-gray-200" style={{ marginRight: '240px', marginLeft: '30px' }}>
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Calibri', fontWeight: 700, fontSize: '40px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>تفاصيل المنتج</h2>

        <p className="mb-6" style={{
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '32px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'right',
          color: '#0F0F0F'
        }}>
          {product.description}
        </p>

        <p className="mb-6" style={{
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '32px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'right',
          color: '#0F0F0F'
        }}>
          عباية كتان فاخر باللون الأسود بتصميم واسع مطرز بتفاصيل أنيقة على الأكمام والصدر، متوفرة بعدة ألوان ومقاسات لتمنحك إطلالة محتشمة تجمع بين الراحة والفخامة، مع إمكانية الغسيل اليدوي أو التنظيف الجاف للحفاظ على جودتها.
        </p>

      </div>

      {/* SIZES SECTION */}
      <div className="mt-10 border-t pt-16 border-gray-200" style={{ marginRight: '240px', marginLeft: '30px' }}>
        <p style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '40px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>تفصيل حسب المقاس</p>
        <br></br>
        <p style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '32px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>أدخلي مقاساتك واحصلي على عباءة مصممة خصيصًا لك , يرجى إدخال المقاسات بالسنتيمتر</p>
        <br></br>
        <div style={{
          width: '304px',
          height: '59px',
          gap: '10px',
          angle: '0deg',
          opacity: 1,
          borderRadius: '16px',
          padding: '10px',
          border: '2px solid #950000',
          backgroundColor: '#950000'
        }}>

          <button
            onClick={() => setShowImage(true)}
            style={{
              width: '100%',
              height: '100%',
              fontFamily: 'Calibri',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'right',
              color: 'white',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}>
            طريقة أخذ المقاسات
          </button>
        </div>

        {/* Image Display */}
        {showImage && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img
              src="/images/ss.png"
              alt="طريقة أخذ المقاسات"
              style={{
                width: '400px',
                height: 'auto',
                borderRadius: '12px',
                margin: '20px auto',
                display: 'block'
              }}
            />
            <button
              onClick={() => setShowImage(false)}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#950000',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'Calibri',
                fontSize: '16px'
              }}
            >
              إغلاق
            </button>
          </div>
        )}

        <div>
          <form className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label className="text-right mb-1" style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#0F0F0F' }}>الطول (سم)</label>
                <input
                  type="text"
                  placeholder="170cm"
                  className="text-right"
                  style={{
                    width: '600px',
                    height: '40px',
                    gap: '10px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    borderRadius: '8px',
                    padding: '8px',
                    borderWidth: '1px',
                    border: '1px solid #d1d5db',
                    fontFamily: 'Calibri',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-right mb-1" style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#0F0F0F' }}>محيط الارداف (سم)</label>
                <input
                  type="text"
                  placeholder="100cm"
                  className="text-right"
                  style={{
                    width: '600px',
                    height: '40px',
                    gap: '10px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    borderRadius: '8px',
                    padding: '8px',
                    borderWidth: '1px',
                    border: '1px solid #d1d5db',
                    fontFamily: 'Calibri',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label className="text-right mb-1" style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#0F0F0F' }}>محيط الصدر (سم)</label>
                <input
                  type="text"
                  placeholder="90cm"
                  className="text-right"
                  style={{
                    width: '600px',
                    height: '40px',
                    gap: '10px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    borderRadius: '8px',
                    padding: '8px',
                    borderWidth: '1px',
                    border: '1px solid #d1d5db',
                    fontFamily: 'Calibri',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-right mb-1" style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#0F0F0F' }}>عرض الكتف (سم)</label>
                <input
                  type="text"
                  placeholder="40cm"
                  className="text-right"
                  style={{
                    width: '600px',
                    height: '40px',
                    gap: '10px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    borderRadius: '8px',
                    padding: '8px',
                    borderWidth: '1px',
                    border: '1px solid #d1d5db',
                    fontFamily: 'Calibri',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label className="text-right mb-1" style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#0F0F0F' }}>محيط الخصر (سم)</label>
                <input
                  type="text"
                  placeholder="80cm"
                  className="text-right"
                  style={{
                    width: '600px',
                    height: '40px',
                    gap: '10px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    borderRadius: '8px',
                    padding: '8px',
                    borderWidth: '1px',
                    border: '1px solid #d1d5db',
                    fontFamily: 'Calibri',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-right mb-1" style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#0F0F0F' }}>طول الكم (سم)</label>
                <input
                  type="text"
                  placeholder="60cm"
                  className="text-right"
                  style={{
                    width: '600px',
                    height: '40px',
                    gap: '10px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    borderRadius: '8px',
                    padding: '8px',
                    borderWidth: '1px',
                    border: '1px solid #d1d5db',
                    fontFamily: 'Calibri',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label className="text-right mb-1" style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#0F0F0F' }}>طول العباءة (سم)</label>
                <input
                  type="text"
                  placeholder="150cm"
                  className="text-right"
                  style={{
                    width: '600px',
                    height: '40px',
                    gap: '10px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    borderRadius: '8px',
                    padding: '8px',
                    borderWidth: '1px',
                    border: '1px solid #d1d5db',
                    fontFamily: 'Calibri',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-right mb-1" style={{ fontFamily: 'Calibri', fontSize: '16px', color: '#0F0F0F' }}>محيط الذراع (سم)</label>
                <input
                  type="text"
                  placeholder="30cm"
                  className="text-right"
                  style={{
                    width: '600px',
                    height: '40px',
                    gap: '10px',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    borderRadius: '8px',
                    padding: '8px',
                    borderWidth: '1px',
                    border: '1px solid #d1d5db',
                    fontFamily: 'Calibri',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </form>
        </div>

      </div>
      {/* CUSTOM NOTES SECTION */}
      <div className="mt-8" style={{ marginRight: '240px', marginLeft: '30px' }}>
        <p className="mb-1" style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>ملاحظات اضافيه</p>
        <textarea
          placeholder="هل لديك أي طلبات خاصة؟ (طول إضافي، اتساع أكبر، تعديل معين…)"
          className="w-[1216px] h-32 p-4 border border-gray-300 rounded-lg text-right"
          style={{ fontFamily: 'Calibri', fontSize: '16px', boxShadow: 'none', resize: 'none', outline: 'none' }}
        />
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 transition-colors text-white py-6 px-48 rounded-full text-xl mx-auto block"
          style={{
            fontFamily: 'Calibri',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          تأكيد الطلب
        </button>
        <p style={{
          fontFamily: 'Calibri',
          fontWeight: 400,
          fontStyle: 'Regular',
          fontSize: '24px',
          leadingTrim: 'NONE',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'right',
          marginTop: '16px',
          color: '#666'
        }}>
          المنتجات المفصلة حسب الطلب لا يمكن إرجاعها إلا في حالة وجود عيب.
        </p>
      </div>


      {/* SIMILAR PRODUCTS */}
      <SimilarProducts
        products={product.similarProducts}
      />

      {/* Measurements Modal */}
      {showMeasurementsModal && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '50px',
            padding: '40px',
            width: '923px',
            maxHeight: '80vh',
            angle: '0deg',
            opacity: 1,
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setShowMeasurementsModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ✕
            </button>

            {/* Modal Image */}
            <img
              src="/images/ss.png"
              alt="طريقة أخذ المقاسات"
              style={{
                width: '400px',
                height: 'auto',
                borderRadius: '12px',
                marginBottom: '20px',
                objectFit: 'contain'
              }}
            />

            {/* Modal Title */}
            <h3 style={{
              fontFamily: 'Calibri',
              fontWeight: 700,
              fontSize: '32px',
              textAlign: 'right',
              color: '#000000',
              marginTop: '0',
              marginBottom: '16px'
            }}>
              طريقة أخذ المقاسات
            </h3>

            {/* Modal Description */}
            <p style={{
              fontFamily: 'Calibri',
              fontWeight: 400,
              fontSize: '18px',
              textAlign: 'right',
              color: '#666666',
              lineHeight: '1.8',
              margin: '0',
              marginBottom: '24px'
            }}>
              يرجى قياس جسمك وفقًا للخطوط الموضحة في الصورة أعلاه للحصول على أفضل النتائج.
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowMeasurementsModal(false)}
              style={{
                marginTop: 'auto',
                width: '100%',
                backgroundColor: '#950000',
                color: '#FFFFFF',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '12px',
                fontFamily: 'Calibri',
                fontWeight: 600,
                fontSize: '20px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#7a0000'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#950000'}
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div >
  );
}
