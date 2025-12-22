import { FiHeart, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SimilarProducts from "../components/SimilarProducts.jsx";
import { getProductById } from "../data/products";


export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);

  const [qty, setQty] = useState(2);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("black");
  const [mainImage, setMainImage] = useState(product?.image || "/images/a1.jpg");
  const [isFavorite, setIsFavorite] = useState(false);
  const [hoveredThumbnail, setHoveredThumbnail] = useState(null);

  if (!product) {
    return (
      <div className="pt-32 pb-24 container mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold">المنتج غير موجود</h1>
      </div>
    );
  }

  const thumbnails = product.thumbnails || [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="pt-32 pb-24 container mx-auto px-6" dir="rtl">
      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 md:h-[600px]">

        {/* LEFT – THUMBNAILS */}
        <div className="md:col-span-1 flex flex-col md:h-[600px]">
          <div className="flex flex-col gap-3 overflow-y-auto">
            {thumbnails.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                onMouseEnter={() => setHoveredThumbnail(index)}
                onMouseLeave={() => setHoveredThumbnail(null)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition flex-shrink-0 ${mainImage === img
                  ? "border-brand-gold"
                  : "border-gray-light hover:border-gray-medium"
                  }`}
              >
                <img
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{ filter: hoveredThumbnail === index ? 'brightness(0.6)' : 'brightness(1)' }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* CENTER – MAIN IMAGE */}
        <div className="md:col-span-5 flex flex-col md:h-[600px]">
          <div className="relative w-full h-full min-h-[400px]">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg z-10"
            >
              <FiHeart
                className={`text-2xl transition ${isFavorite ? "text-red-500 fill-red-500" : "text-black"
                  }`}
              />
            </button>
            <img
              src={mainImage}
              className="w-full h-full object-cover rounded-xl shadow-md"
              alt="product"
            />
          </div>
        </div>

        {/* RIGHT – PRODUCT INFO */}
        <div className="md:col-span-5 flex flex-col justify-start">

          {/* Title */}
          <h1
            className="text-2xl font-bold mb-2 text-black"
            style={{
              fontFamily: 'Calibri',
              fontWeight: 700,
              fontStyle: 'Bold',
              fontSize: '28px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3 justify-center">
            <div className="text-[#C8A06A] text-xl" style={{ fontFamily: 'Calibri', fontWeight: 700, fontSize: '20px' }}>
              {"★".repeat(product.rating)}
            </div>
          </div>

          {/* Price */}
          <div className="mb-4 pb-3">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-base text-gray-500 line-through" style={{ fontFamily: 'Calibri', fontWeight: 400, fontSize: '16px' }}>{product.originalPrice}</span>
              <span className="text-2xl font-bold" style={{ color: '#8B1538', fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '32px', lineHeight: '100%', letterSpacing: '0%' }}>{product.price}</span>
            </div>
          </div>

          {/* Size Guide Link */}
          <div className="mb-4">
            <a href="#" className="text-gray-600 underline" style={{ fontFamily: 'Calibri', fontWeight: 400, fontSize: '16px' }}>جدول المقاسات</a>
          </div>

          {/* Sizes Label */}
          <div className="mb-2">
            <h3 className="font-semibold text-black" style={{ fontFamily: 'Calibri', fontWeight: 700, fontSize: '20px' }}>المقاسات</h3>
          </div>

          {/* Size */}
          <div className="mb-4">
            <div className="flex gap-2 flex-wrap">
              {["XL", "L", "M", "S"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-5 py-2 rounded-full border-2 font-semibold transition ${size === s
                    ? "bg-black text-white border-black"
                    : "border-gray-400 text-black hover:border-black"
                    }`}
                  style={{ fontFamily: 'Calibri', fontWeight: 600, fontSize: '16px' }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Colors Label */}
          <div className="mb-2">
            <h3 className="font-semibold text-black" style={{ fontFamily: 'Calibri', fontWeight: 700, fontSize: '20px' }}>الألوان</h3>
          </div>

          {/* Colors */}
          <div className="mb-4">
            <div className="flex gap-2">
              {[
                { value: "black", class: "bg-black" },
                { value: "gray", class: "bg-gray-400" },
                { value: "navy", class: "bg-blue-900" },
                { value: "brown", class: "bg-red-900" },
              ].map((c) => (
                <button
                  key={c.value}
                  onClick={() => setColor(c.value)}
                  className={`w-14 h-14 rounded-full border-4 ${c.class} transition ${color === c.value
                    ? "border-black"
                    : "border-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Quantity Label */}
          <div className="mb-2">
            <h3 className="font-semibold text-black" style={{ fontFamily: 'Calibri', fontWeight: 700, fontSize: '20px' }}>الكمية</h3>
          </div>

          <div className="mb-5">
            <div className="flex items-center gap-4 border-2 border-gray-300 rounded-full w-fit px-6 py-3">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>
                <FiMinus className="text-xl" />
              </button>
              <span className="font-semibold" style={{ fontFamily: 'Calibri', fontWeight: 600, fontSize: '18px' }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>
                <FiPlus className="text-xl" />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 max-w-lg mx-auto mt-8">
            <button className="w-full bg-black text-white py-3 px-12 rounded-full font-bold hover:bg-gray-900 transition transform hover:scale-105 hover:shadow-lg" style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}>
              اشتري الآن
            </button>

            <button className="w-full flex items-center justify-center gap-2 border-2 border-black py-3 px-12 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-lg" style={{ fontFamily: 'Calibri', fontWeight: 700, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}>
              <FiShoppingCart className="text-lg" />
              أضف إلى السلة
            </button>
          </div>
        </div>
      </div>

      {/* DESCRIPTION (same as page 48) */}
      <div className="max-w-3xl mx-auto border-t pt-16 border-gray-200" style={{ marginRight: '30px' }}>
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
      <div className="max-w-3xl ml-auto mt-20 border-t pt-16 border-gray-200" style={{ marginRight: '30px' }}>
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

          <button style={{
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
                    fontSize: '16px'
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
                    fontSize: '16px'
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
                    fontSize: '16px'
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
                    fontSize: '16px'
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
      <div className="max-w-3xl mx-auto mt-8" style={{ marginRight: '30px' }}>
        <p className="mb-1" style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>ملاحظات اضافيه</p>
        <textarea
          placeholder="هل لديك أي طلبات خاصة؟ (طول إضافي، اتساع أكبر، تعديل معين…)"
          className="w-[1216px] h-32 p-4 border border-gray-300 rounded-lg text-right focus:shadow-none"
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
    </div >
  );
}
