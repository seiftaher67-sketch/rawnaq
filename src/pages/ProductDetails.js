import { FiHeart, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import SimilarProducts from "../components/SimilarProducts.jsx";


export default function ProductDetails() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("black");
  const [mainImage, setMainImage] = useState("/images/a1.jpg");
  const [isFavorite, setIsFavorite] = useState(false);

  const thumbnails = [
    "/images/a1.jpg",
    "/images/a2.jpg",
    "/images/a3.jpg",
    "/images/a4.jpg",
    
  ];

  return (
    <div className="pt-32 pb-24 container mx-auto px-6" dir="rtl">
      {/* GRID (like page 48) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
      
              {/* IMAGE GALLERY */}
              <div className="flex flex-row gap-4">
                {/* Thumbnails */}
                <div className="flex flex-col gap-4 max-h-[550px] overflow-y-auto pr-2">
                  {thumbnails.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setMainImage(img)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition flex-shrink-0 ${
                        mainImage === img
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
      
                {/* Main Image */}
                <div className="relative flex-1">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg z-10"
                  >
                    <FiHeart
                      className={`text-3xl transition ${
                        isFavorite ? "text-red-500 fill-red-500" : "text-black"
                      }`}
                    />
                  </button>
                  <img
                    src={mainImage}
                    className="w-full h-auto object-cover rounded-xl shadow-md"
                    alt="product"
                  />
                </div>
              </div>
      
              {/* RIGHT – Product Info */}
              <div className="flex flex-col justify-start">
      
                {/* Title */}
                <h1 className="text-4xl font-bold mb-4 text-black">عباية كتان فاخرة</h1>
      
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-[#C8A06A] text-xl">
                    {"★★★★★"}
                  </div>
                  <span className="text-gray-600 text-sm">(5.0)</span>
                </div>
      
                {/* Price */}
                <div className="mb-8 border-b pb-6 border-gray-200">
                  <div className="flex items-center gap-4">
                    <span className="text-xl text-gray-500 line-through">300 ر.س</span>
                    <span className="text-4xl font-bold text-[#C8A06A]">250 ر.س</span>
                  </div>
                </div>
      
                {/* Size */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-3 text-lg">المقاسات</h3>
                  <div className="flex gap-3">
                    {[ "S", "M", "L", "XL"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`px-6 py-2 rounded-full border-2 text-lg transition ${
                          size === s
                            ? "bg-black text-white border-black"
                            : "border-gray-400 hover:border-black"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
      
                {/* Colors */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-3 text-lg">الألوان</h3>
                  <div className="flex gap-4">
                    {[ 
                      { value: "black", class: "bg-black" },
                      { value: "gray", class: "bg-gray-500" },
                      { value: "navy", class: "bg-blue-900" },
                      { value: "brown", class: "bg-red-900" },
                    ].map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setColor(c.value)}
                        className={`w-10 h-10 rounded-full border-4 ${c.class} 
                          ${
                            color === c.value
                              ? "border-black"
                              : "border-gray-200"
                          }`}
                      />
                    ))}
                  </div>
                </div>
      
                {/* Quantity */}
                <div className="mb-10">
                  <h3 className="font-semibold mb-3 text-lg">الكمية</h3>
                  <div className="flex items-center gap-6 border-2 border-gray-300 rounded-full w-fit px-6 py-2">
                    <button onClick={() => qty > 1 && setQty(qty - 1)}>
                      <FiMinus className="text-xl" />
                    </button>
                    <span className="text-xl font-semibold">{qty}</span>
                    <button onClick={() => setQty(qty + 1)}>
                      <FiPlus className="text-xl" />
                    </button>
                  </div>
                </div>
      
                {/* Buttons */}
                <div className="flex flex-col gap-4">
                  <button className="w-full bg-black text-white py-4 rounded-full text-xl font-bold hover:bg-[#222]">
                    اشتري الآن
                  </button>
      
                  <button className="w-full flex items-center justify-center gap-2 border-2 border-black py-4 rounded-full text-xl font-semibold hover:bg-gray-100">
                    <FiShoppingCart className="text-2xl" />
                    أضف إلى السلة
                  </button>
                </div>
              </div>
            </div>

      {/* DESCRIPTION (same as page 48) */}
      <div className="max-w-3xl mx-auto border-t pt-16 border-gray-200">
        <h2 className="text-3xl font-bold mb-8">تفاصيل المنتج</h2>

        <p className="text-gray-700 leading-loose text-lg mb-6">
          عباية فاخرة مصنوعة من أجود أنواع الكتان، بتصميم يناسب الإطلالات
          الرسمية واليومية. خياطة عالية الجودة وخامة خفيفة ومريحة طوال اليوم.
        </p>

        <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-[#C8A06A] text-2xl">•</span>
            خامة كتان فاخر مستورد
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C8A06A] text-2xl">•</span>
            متوفر بعدة مقاسات تناسب الجميع
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C8A06A] text-2xl">•</span>
            تصميم مناسب للاستخدام اليومي
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C8A06A] text-2xl">•</span>
            خفيف ولطيف على الجسم
          </li>
        </ul>
      </div>

      {/* REVIEWS SECTION */}
      <div className="max-w-3xl mx-auto mt-20 border-t pt-16 border-gray-200">

        <h2 className="text-3xl font-bold mb-10 text-black">تقييمات ومراجعات المنتج</h2>

        {/* Review Item */}
        <div className="space-y-10">

          {[
            {
              name: "سارة محمد",
              rating: 5,
              date: "13 يوليو 2023",
              text: "العباية روعة جدًا والخامة ممتازة، التوصيل كان سريع والتعامل راقي.",
            },
            {
              name: "منه الله",
              rating: 4,
              date: "4 ديسمبر 2023",
              text: "المقاسات مضبوطة والخامة مريحة جداً. أنصح بالشراء.",
            },
            {
              name: "هدير إسلام",
              rating: 3,
              date: "12 ديسمبر 2023",
              text: "الخامة جيدة لكن التوصيل تأخر يومين. أتمنى تتحسن خدمة الشحن.",
            },
          ].map((review, index) => (
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
        products={[
          {
            name: "عباية كريب فاخرة",
            image: "/images/1.png",
            oldPrice: 300,
            price: 250,
          },
          {
            name: "عباية قطنية ناعمة",
            image: "/images/2.png",
            oldPrice: 220,
            price: 180,
          },
          {
            name: "عباية حرير فاخرة",
            image: "/images/3.png",
            oldPrice: 350,
            price: 299,
          },
        ]}
      />
    </div>
  );
}
