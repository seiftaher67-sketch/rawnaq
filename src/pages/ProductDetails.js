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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20  overflow-y-auto auto-rows-max md:auto-rows-stretch">

        {/* LEFT – THUMBNAILS */}
        <div className="md:col-span-1 flex flex-col h-full">
          <div className="flex flex-col gap-3 overflow-y-auto">
            {thumbnails.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition flex-shrink-0 ${mainImage === img
                  ? "border-brand-gold"
                  : "border-gray-light hover:border-gray-medium"
                  }`}
              >
                <img
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* CENTER – MAIN IMAGE */}
        <div className="md:col-span-5 flex flex-col h-full">
          <div className="relative flex-1 ">
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
        <div className="md:col-span-5 flex flex-col justify-start h-full">

          {/* Title */}
          <h1 className="text-2xl font-bold mb-2 text-black">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="text-[#C8A06A] text-lg">
              {"★".repeat(product.rating)}
            </div>
          </div>

          {/* Price */}
          <div className="mb-4 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-base text-gray-500 line-through">{product.originalPrice}</span>
              <span className="text-2xl font-bold text-[#C8A06A]">{product.price}</span>
            </div>
          </div>

          {/* Size Guide Link */}
          <div className="mb-4">
            <a href="#" className="text-gray-600 underline text-sm">جدول المقاسات</a>
          </div>

          {/* Sizes Label */}
          <div className="mb-2">
            <h3 className="font-semibold text-base text-black">المقاسات</h3>
          </div>

          {/* Size */}
          <div className="mb-4">
            <div className="flex gap-2 flex-wrap">
              {["XL", "L", "M", "S"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-1 rounded-full border-2 text-sm font-semibold transition ${size === s
                    ? "bg-black text-white border-black"
                    : "border-gray-400 text-black hover:border-black"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Colors Label */}
          <div className="mb-2">
            <h3 className="font-semibold text-base text-black">الألوان</h3>
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
                  className={`w-10 h-10 rounded-full border-4 ${c.class} transition ${color === c.value
                    ? "border-black"
                    : "border-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Quantity Label */}
          <div className="mb-2">
            <h3 className="font-semibold text-base text-black">الكمية</h3>
          </div>

          <div className="mb-5">
            <div className="flex items-center gap-3 border-2 border-gray-300 rounded-full w-fit px-4 py-2">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>
                <FiMinus className="text-lg" />
              </button>
              <span className="text-base font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)}>
                <FiPlus className="text-lg" />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button className="w-full bg-black text-white py-3 rounded-full text-base font-bold hover:bg-gray-900 transition">
              اشتري الآن
            </button>

            <button className="w-full flex items-center justify-center gap-2 border-2 border-black py-3 rounded-full text-base font-semibold hover:bg-gray-100 transition">
              <FiShoppingCart className="text-xl" />
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

        <h2 className="text-3xl font-bold mb-10 text-black">تقييمات ومراجعات المنتج</h2>

        {/* Review Item */}
        <div className="space-y-10">

          {product.reviews.map((review, index) => (
            <div key={index} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">{review.name}</h3>

                <div className="text-[#C8A06A] text-lg">
                  {"★".repeat(review.rating)}
                  <span className="text-gray-300">
                    {"★".repeat(5 - review.rating)}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-4">{review.date}</p>

              <p className="text-gray-700 leading-relaxed text-lg">{review.text}</p>
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
