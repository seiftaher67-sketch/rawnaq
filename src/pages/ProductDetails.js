import { FiHeart, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SimilarProducts from "../components/SimilarProducts.jsx";
import { getProductById } from "../data/products";


export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);

  const [qty, setQty] = useState(1);
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
                  style={{filter: hoveredThumbnail === index ? 'brightness(0.6)' : 'brightness(1)'}}
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
            <div className="text-[#C8A06A] text-xl" style={{fontFamily: 'Calibri', fontWeight: 700, fontSize: '20px'}}>
              {"★".repeat(product.rating)}
            </div>
          </div>

          {/* Price */}
          <div className="mb-4 pb-3">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-base text-gray-500 line-through" style={{fontFamily: 'Calibri', fontWeight: 400, fontSize: '16px'}}>{product.originalPrice}</span>
              <span className="text-2xl font-bold" style={{color: '#8B1538', fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '32px', lineHeight: '100%', letterSpacing: '0%'}}>{product.price}</span>
            </div>
          </div>

          {/* Size Guide Link */}
          <div className="mb-4">
            <a href="#" className="text-gray-600 underline" style={{fontFamily: 'Calibri', fontWeight: 400, fontSize: '16px'}}>جدول المقاسات</a>
          </div>

          {/* Sizes Label */}
          <div className="mb-2">
            <h3 className="font-semibold text-black" style={{fontFamily: 'Calibri', fontWeight: 700, fontSize: '20px'}}>المقاسات</h3>
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
                  style={{fontFamily: 'Calibri', fontWeight: 600, fontSize: '16px'}}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Colors Label */}
          <div className="mb-2">
            <h3 className="font-semibold text-black" style={{fontFamily: 'Calibri', fontWeight: 700, fontSize: '20px'}}>الألوان</h3>
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
            <h3 className="font-semibold text-black" style={{fontFamily: 'Calibri', fontWeight: 700, fontSize: '20px'}}>الكمية</h3>
          </div>

          <div className="mb-5">
            <div className="flex items-center gap-4 border-2 border-gray-300 rounded-full w-fit px-6 py-3">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>
                <FiMinus className="text-xl" />
              </button>
              <span className="font-semibold" style={{fontFamily: 'Calibri', fontWeight: 600, fontSize: '18px'}}>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>
                <FiPlus className="text-xl" />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 max-w-lg mx-auto mt-8">
            <button className="w-full bg-black text-white py-3 px-12 rounded-full font-bold hover:bg-gray-900 transition transform hover:scale-105 hover:shadow-lg" style={{fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%'}}>
              اشتري الآن
            </button>

            <button className="w-full flex items-center justify-center gap-2 border-2 border-black py-3 px-12 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-lg" style={{fontFamily: 'Calibri', fontWeight: 700, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%'}}>
              <FiShoppingCart className="text-lg" />
              أضف إلى السلة
            </button>
          </div>
        </div>
      </div>

      {/* DESCRIPTION (same as page 48) */}
      <div className="max-w-3xl mx-auto border-t pt-16 border-gray-200">
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

      {/* REVIEWS SECTION */}
      <div className="max-w-3xl mx-auto mt-20 border-t pt-16 border-gray-200">

        <h2
          style={{
            fontFamily: 'Calibri',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '40px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'right',
            color: '#0F0F0F',
            marginBottom: '40px'
          }}
        >
          تقييمات ومراجعات المنتج
        </h2>

        {/* Review Item */}
        <div className="space-y-6">

          {product.reviews.map((review, index) => (
            <div key={index} className="pb-6 border-b border-gray-200 last:border-b-0">

              {/* Header with Avatar, Name, Stars and Date */}
              <div className="flex gap-3 items-start mb-3 justify-between">

                {/* Left Section - Avatar and Name/Stars */}
                <div className="flex gap-3 items-start flex-1">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  </div>

                  {/* Name and Stars */}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'Calibri',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '24px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        textAlign: 'right',
                        color: '#0F0F0F',
                        marginBottom: '6px'
                      }}
                    >
                      {review.name}
                    </h3>
                    <div className="text-[#C8A06A] text-xl">
                      {"★".repeat(review.rating)}
                      <span className="text-gray-300">
                        {"★".repeat(5 - review.rating)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Section - Date */}
                <div className="flex-shrink-0 text-left">
                  <p
                    style={{
                      fontFamily: 'Calibri',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      textAlign: 'right',
                      color: '#707070'
                    }}
                  >
                    {review.date}
                  </p>
                </div>
              </div>

              {/* Review Text */}
              <p
                style={{
                  fontFamily: 'Calibri',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'right',
                  color: '#0F0F0F',
                  marginRight: '50px'
                }}
                className="mt-2"
              >
                {review.text}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* SIMILAR PRODUCTS */}
      <SimilarProducts
        products={product.similarProducts}
      />
    </div>
  );
}
