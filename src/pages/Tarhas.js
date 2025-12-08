import ProductCard from "../components/ProductCard.jsx";

export default function Tarhas() {
  const tarhasList = [
    { id: 1, name: "طرحة شيفون ناعمة", price: 49, image: "/images/t11.jpg" },
    { id: 2, name: "طرحة قطن ممتاز", price: 59, image: "/images/t2.jpg" },
    { id: 3, name: "طرحة سوفت راقية", price: 45, image: "/images/t3.jpg" },
    { id: 4, name: "طرحة خليجية فاخرة", price: 79, image: "/images/t11.jpg" },
    { id: 5, name: "طرحة سوبر ديلاكس", price: 69, image: "/images/t11.jpg" },
    { id: 6, name: "طرحة سادة يومية", price: 39, image: "/images/t2.jpg" },
    { id: 7, name: "طرحة فاخرة", price: 89, image: "/images/t3.jpg" },
    { id: 8, name: "طرحة عصرية", price: 55, image: "/images/t11.jpg" },
  ];

  return (
    <div className="pt-36 pb-20 bg-white">

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0F0F0F]">الطرح</h1>

      </div>

      {/* Filter Section */}
<div className="container mx-auto px-6 mb-12">
  <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between shadow-sm">

    {/* Sort */}
    <div className="relative w-full md:w-1/3">
      <select className="w-full appearance-none p-4 border border-gray-300 rounded-lg text-gray-700 bg-white">
        <option>الفرز: من السعر الأقل للأعلى</option>
        <option>الفرز: من الأعلى للأقل</option>
        <option>الأحدث</option>
      </select>
      <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
        ▼
      </span>
    </div>

    {/* Size */}
    <div className="relative w-full md:w-1/3">
      <select className="w-full appearance-none p-4 border border-gray-300 rounded-lg text-gray-700 bg-white">
        <option>المقاس</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>
      <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
        ▼
      </span>
    </div>

    {/* Color */}
    <div className="relative w-full md:w-1/3">
      <select className="w-full appearance-none p-4 border border-gray-300 rounded-lg text-gray-700 bg-white">
        <option>اللون</option>
        <option>أسود</option>
        <option>بيج</option>
        <option>رمادي</option>
      </select>
      <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
        ▼
      </span>
    </div>

    {/* Apply Filter Button */}
    <div className="w-full md:w-auto">
      <button className="w-full md:w-auto px-6 py-4 border border-gray-300 rounded-lg text-white bg-black hover:bg-gray-800 flex items-center justify-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19S3 15.4183 3 11 6.58172 3 11 3 19 6.58172 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
       
      </button>
    </div>

  </div>
</div>
      {/* Products Grid */}
      <div className="container mx-auto px-6">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {tarhasList.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              variant="default"
            />
          ))}
        </div>
      </div>

    </div>
  );
}
